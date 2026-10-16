import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatINR, getProduct, relatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { add } = useCart()
  const [shot, setShot] = useState(0)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setShot(0)
    setQty(1)
  }, [id])

  if (!product) {
    return (
      <section className="page">
        <p>This piece is no longer in the nalatra.</p>
        <Link to="/shop">Return to the collection</Link>
      </section>
    )
  }

  return (
    <article className="pdp">
      <div className="pdp-gallery">
        <div className="pdp-main">
          <img src={product.gallery[shot]} alt="" />
          <span className="overlay-mark">VELMORA</span>
        </div>
        <div className="thumbs">
          {product.gallery.map((src, i) => (
            <button key={src} className={shot === i ? 'on' : ''} onClick={() => setShot(i)} type="button">
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </div>
      <div className="pdp-info">
        <p className="kicker">{product.tag}</p>
        <h1>{product.name}</h1>
        <p className="price lg">
          {formatINR(product.price)} <span>· {product.size}</span>
        </p>
        <p className="lede">{product.blurb}</p>
        <p>{product.story}</p>
        <ul className="notes">
          {product.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="fine">Suited to {product.skin}. {product.packaging}.</p>
        <div className="pdp-actions">
          <div className="qty">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              –
            </button>
            <span>{qty}</span>
            <button type="button" onClick={() => setQty((q) => q + 1)}>
              +
            </button>
          </div>
          <button type="button" className="btn wine" onClick={() => add(product.id, qty)}>
            Add to bag
          </button>
        </div>
      </div>
      <section className="related">
        <h2>Continue the ritual</h2>
        <div className="grid-3">
          {relatedProducts(product.id).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </article>
  )
}
