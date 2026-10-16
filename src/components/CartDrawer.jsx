import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatINR } from '../data/products'

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal } = useCart()
  const shipFree = subtotal >= 3999

  return (
    <>
      <div className={`scrim ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'show' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Your Bag</h2>
          <button className="text-btn" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        {items.length === 0 ? (
          <p className="empty-bag">Your ritual is empty. Begin with a cleanser or serum.</p>
        ) : (
          <ul className="bag-list">
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" />
                <div>
                  <p className="bag-name">{item.name}</p>
                  <p className="bag-meta">
                    {item.size} · {formatINR(item.price)}
                  </p>
                  <div className="qty">
                    <button onClick={() => setQty(item.id, item.qty - 1)}>–</button>
                    <span>{item.qty}</span>
                    <button onClick={() => setQty(item.id, item.qty + 1)}>+</button>
                    <button className="text-btn" onClick={() => remove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="drawer-foot">
          <p className="subtotal">
            <span>Subtotal</span>
            <span>{formatINR(subtotal)}</span>
          </p>
          <p className="ship-note">
            {shipFree ? 'Complimentary shipping applies.' : 'Complimentary shipping above ₹3,999.'}
          </p>
          <Link to="/checkout" className="btn wine" onClick={() => setOpen(false)}>
            Checkout
          </Link>
        </div>
      </aside>
    </>
  )
}
