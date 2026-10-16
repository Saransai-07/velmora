import { Link } from 'react-router-dom'

export default function About() {
  return (
    <article className="page maison">
      <header className="page-hero">
        <p className="kicker">Maison</p>
        <h1>A house of quiet radiance, composed in India.</h1>
      </header>
      <div className="maison-lead">
        <img src="/images/nalatra-still-life.jpg" alt="" />
        <div>
          <p>
            Velmora began as a question of pacing. How do you wash a face in Hyderabad humidity? How
            should a serum sit under noon light in Delhi, or a wine lipstick after monsoon dusk?
          </p>
          <p>
            We are not a marketplace of disconnected SKUs. Cleansers share an ivory-blush language.
            Serums live in frosted glass with champagne metal. Lip color is rosewood, nude, and
            wine — one nalatra, one silhouette.
          </p>
          <p>
            Formulas are developed with Indian skin, climate, and ceremony in mind: barrier-kind
            surfactants, sensorial but breathable textures, pigment that looks like skin in daylight.
          </p>
        </div>
      </div>
      <section className="values">
        <div>
          <h2>01</h2>
          <h3>Barrier first</h3>
          <p>No stripping gels. Cleansers that leave the face calm, not “squeaky.”</p>
        </div>
        <div>
          <h2>02</h2>
          <h3>Honest vessels</h3>
          <p>Glass and metal you can keep. Labels kept spare so the object can live on a vanity.</p>
        </div>
        <div>
          <h2>03</h2>
          <h3>Priced in rupees</h3>
          <p>Luxury without imported theatre. Ships from India, for India first.</p>
        </div>
      </section>
      <section className="split reverse">
        <div className="split-copy">
          <p className="kicker">nalatra</p>
          <h2>Colaba House</h2>
          <p>
            Appointments for the lip nalatra and serum consultations are held at Walton Road. Write
            to nalatra@velmora.in — we reply within two working days.
          </p>
          <Link to="/shop" className="btn wine">
            Shop the house
          </Link>
        </div>
        <div className="split-img">
          <img src="/images/ritual-hands.jpg" alt="" />
        </div>
      </section>
    </article>
  )
}
