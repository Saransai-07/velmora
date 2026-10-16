import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatINR } from '../data/products'

export default function Checkout() {
  const { items, subtotal, clear } = useCart()
  const [done, setDone] = useState(false)
  const shipping = subtotal >= 3999 || subtotal === 0 ? 0 : 149
  const total = subtotal + shipping

  const submit = (e) => {
    e.preventDefault()
    setDone(true)
    clear()
  }

  if (done) {
    return (
      <section className="page checkout done">
        <p className="kicker">Confirmed</p>
        <h1>Your order is with the nalatra.</h1>
        <p>
          A note will arrive at the email you shared. This is a demonstration checkout — no payment
          was taken.
        </p>
        <Link to="/shop" className="btn wine">
          Continue browsing
        </Link>
      </section>
    )
  }

  return (
    <section className="page checkout">
      <header className="page-hero">
        <p className="kicker">Checkout</p>
        <h1>Where shall we send the ritual?</h1>
      </header>
      {items.length === 0 ? (
        <p>
          Your bag is empty. <Link to="/shop">Return to the collection</Link>.
        </p>
      ) : (
        <div className="checkout-grid">
          <form onSubmit={submit} className="checkout-form">
            <label>
              Full name
              <input required name="name" autoComplete="name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" autoComplete="email" />
            </label>
            <label>
              Mobile
              <input required type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Address
              <textarea required name="address" rows={3} />
            </label>
            <div className="row">
              <label>
                City
                <input required name="city" />
              </label>
              <label>
                PIN
                <input required name="pin" />
              </label>
            </div>
            <p className="fine">Payment is simulated. No card details are stored.</p>
            <button type="submit" className="btn wine">
              Place order · {formatINR(total)}
            </button>
          </form>
          <aside className="summary">
            <h2>Bag</h2>
            <ul>
              {items.map((i) => (
                <li key={i.id}>
                  <span>
                    {i.name} × {i.qty}
                  </span>
                  <span>{formatINR(i.line)}</span>
                </li>
              ))}
              <li>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : formatINR(shipping)}</span>
              </li>
              <li className="total">
                <span>Total</span>
                <span>{formatINR(total)}</span>
              </li>
            </ul>
          </aside>
        </div>
      )}
    </section>
  )
}
