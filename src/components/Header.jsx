import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { count, setOpen } = useCart()
  const [menu, setMenu] = useState(false)

  return (
    <header className="site-header">
      {/* <div className="announce">Complimentary shipping across India on orders above ₹3,999</div> */}
      <div className="nav-bar">
        <button className="menu-btn" aria-label="Open menu" onClick={() => setMenu((v) => !v)}>
          <span />
          <span />
        </button>
        <nav className={`nav-left ${menu ? 'is-open' : ''}`}>
          <NavLink to="/shop" onClick={() => setMenu(false)}>
            Shop
          </NavLink>
          <NavLink to="/ritual" onClick={() => setMenu(false)}>
            The Ritual
          </NavLink>
          <NavLink to="/about" onClick={() => setMenu(false)}>
            Maison
          </NavLink>
        </nav>
        <Link to="/" className="wordmark" onClick={() => setMenu(false)}>
          VELMORA
        </Link>
        <div className="nav-right">
          <Link to="/shop" className="nav-quiet">
            Collection
          </Link>
          <button className="bag-btn" onClick={() => setOpen(true)} aria-label="Open bag">
            Bag <span>{String(count).padStart(2, '0')}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
