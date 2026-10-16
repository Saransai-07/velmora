import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="wordmark sm">VELMORA</p>
          <p className="tagline">Your Skin. Your Ritual. Your Radiance.</p>
          <p className="fine">
            Campaign imagery is art-directed for the Velmora collection. It is not photography of
            manufactured retail units.
          </p>
        </div>
        <div>
          <h3>nalatra</h3>
          <p>
            Madhapur
            <br />
            Ayyapa society
            <br />
            Hyderabad 580001
          </p>
          <p>
            <a href="mailto:nalatra@velmora.in">nalatra@nalatra.in</a>
          </p>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li>
              <Link to="/shop">The Collection</Link>
            </li>
            <li>
              <Link to="/ritual">The Ritual</Link>
            </li>
            <li>
              <Link to="/about">Maison</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Care</h3>
          <p>Free returns within 14 days on unopened vessels. Formulated in India. Ships nationwide.</p>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Velmora nalatra</span>
        <span>Prices in Indian rupees</span>
      </div>
    </footer>
  )
}
