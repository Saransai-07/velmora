import { Link } from 'react-router-dom'
import { formatINR } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, large = false }) {
  const { add } = useCart()

  return (
    <article className={`card ${large ? 'large' : ''}`}>
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image} alt="" />
        <span className="overlay-mark">VELMORA</span>
        <span className="tag">{product.tag}</span>
      </Link>
      <div className="card-copy">
        <p className="cat">{product.category.replace('-', ' ')}</p>
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="price">
          {formatINR(product.price)} <span>· {product.size}</span>
        </p>
        <button type="button" className="text-btn add" onClick={() => add(product.id)}>
          Add to bag
        </button>
      </div>
    </article>
  )
}
