import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const add = (id, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id)
      if (found) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { id, qty }]
    })
    setOpen(true)
  }

  const setQty = (id, qty) => {
    if (qty < 1) {
      setItems((prev) => prev.filter((i) => i.id !== id))
      return
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const clear = () => setItems([])

  const detailed = useMemo(
    () =>
      items
        .map((i) => {
          const product = getProduct(i.id)
          return product ? { ...product, qty: i.qty, line: product.price * i.qty } : null
        })
        .filter(Boolean),
    [items],
  )

  const count = detailed.reduce((n, i) => n + i.qty, 0)
  const subtotal = detailed.reduce((n, i) => n + i.line, 0)

  const value = {
    items: detailed,
    count,
    subtotal,
    open,
    setOpen,
    add,
    setQty,
    remove,
    clear,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
