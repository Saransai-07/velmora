import { Link } from 'react-router-dom'

export default function Ritual() {
  return (
    <article className="page ritual">
      <header className="page-hero">
        <p className="kicker">The ritual</p>
        <h1>Four gestures. One unhurried hour.</h1>
        <p>A sequence, not a 12-step theatre. Edit according to climate and mood.</p>
      </header>
      <ol className="steps">
        <li>
          <img src="/images/product-cleanser.jpg" alt="" />
          <div>
            <p className="kicker">01 · Cleanse</p>
            <h2>Melt, then milk.</h2>
            <p>
              Evening: Rosewood Balm between dry palms, then water. Morning: Morning Dew Gel or
              Velvet Cream, never both. Rinse with lukewarm water; pat, do not drag.
            </p>
            <Link to="/shop">Shop cleansers</Link>
          </div>
        </li>
        <li>
          <img src="/images/product-serum-radiance.jpg" alt="" />
          <div>
            <p className="kicker">02 · Treat</p>
            <h2>Press, never rub.</h2>
            <p>
              Dawn Drops at first light; Radiance Essence when the face looks tired of city air;
              Night Restore as the last wet step. Three drops in the palm, pressed along the high
              planes.
            </p>
            <Link to="/shop">Shop serums</Link>
          </div>
        </li>
        <li>
          <img src="/images/ritual-hands.jpg" alt="" />
          <div>
            <p className="kicker">03 · Pause</p>
            <h2>Let the skin decide.</h2>
            <p>
              Ninety seconds of stillness. In monsoon, skip heavy cream. In hill stations, seal
              with a richer layer. The ritual is a conversation, not a script.
            </p>
          </div>
        </li>
        <li>
          <img src="/images/product-lipstick-wine.jpg" alt="" />
          <div>
            <p className="kicker">04 · Color</p>
            <h2>One pass of satin.</h2>
            <p>
              Nude nalatra for daylight. Blush Silk when you want your own mouth, considered. Wine
              Hour after six. Blot once. Do not lacquer.
            </p>
            <Link to="/shop">Shop lip color</Link>
          </div>
        </li>
      </ol>
    </article>
  )
}
