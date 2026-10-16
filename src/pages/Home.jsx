import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const featured = products.filter((p) => p.featured)
  const rest = products.filter((p) => !p.featured).slice(0, 4)

  return (
    <>
      <section className="hero">
        <img src="/images/hero-campaign.jpg" alt="" className="hero-img" />
        <div className="hero-copy">
          <p className="eyebrow">The Autumn nalatra · Hyderabad</p>
          <h1>
            Your Skin.
            <br />
            Your Ritual.
            <br />
            Your Radiance.
          </h1>
          <p className="lede">
            A considered collection of face washes, cleansers, serums, and lip color — composed for
            Indian light, climate, and ceremony.
          </p>
          <Link to="/shop" className="btn wine">
            Enter the collection
          </Link>
        </div>
      </section>

      <section className="intro">
        <p className="kicker">Maison Velmora</p>
        <h2>Skincare as a private hour, not a performance.</h2>
        <p>
          We design vessels you will want on the vanity — ivory glass, champagne collars, wine
          metal — and formulas that feel as considered as they look. Quiet luxury, made to be used
          twice a day.
        </p>
      </section>

      <section className="split editorial">
        <div className="split-img">
          <img src="/images/editorial-texture.jpg" alt="" />
        </div>
        <div className="split-copy">
          <p className="kicker">Texture study</p>
          <h2>Cream that peaks. Serum that strings. Color that sits like skin.</h2>
          <p>
            Every formula is photographed and felt in-house before it is named. Viscosity, sheen,
            and how a product moves under humid air matter as much as the INCI list.
          </p>
          <Link to="/ritual" className="text-link">
            Read the ritual
          </Link>
        </div>
      </section>

      <section className="shelf">
        <div className="shelf-head">
          <h2>Signature pieces</h2>
          <Link to="/shop">View all</Link>
        </div>
        <div className="grid-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} large />
          ))}
        </div>
      </section>

      <section className="campaign-band">
        <div className="campaign-copy">
          <p className="kicker">Lip nalatra</p>
          <h2>Wine Hour — satin, not lacquer.</h2>
          <p>
            A deep rosewood-burgundy bullet milled for precision edges and a natural satin finish.
            Built for dusk, dinner, and the commute home.
          </p>
          <Link to="/product/wine-hour" className="btn wine">
            Discover Wine Hour
          </Link>
        </div>
        <div className="campaign-img">
          <img src="/images/lip-macro.jpg" alt="" />
        </div>
      </section>

      <section className="shelf">
        <div className="shelf-head">
          <h2>The daily edit</h2>
        </div>
        <div className="grid-4">
          {rest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="wide-still">
        <img src="/images/collection-editorial.jpg" alt="" />
        <div className="wide-caption">
          <p className="kicker">Packaging system</p>
          <h2>One house. One silhouette language.</h2>
          <p>
            Ivory and blush for cleansers. Frosted glass and champagne for serums. Burgundy,
            rosewood, and nude for the lip nalatra. Campaign stills, art-directed as a family.
          </p>
        </div>
      </section>
    </>
  )
}
