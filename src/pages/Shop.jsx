import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function Shop() {
  const [cat, setCat] = useState('all')
  const list = useMemo(
    () => (cat === 'all' ? products : products.filter((p) => p.category === cat)),
    [cat],
  )

  return (
    <section className="page shop">
      <header className="page-hero">
        <p className="kicker">The collection</p>
        <h1>Every essential, in one house.</h1>
        <p>Face wash, cleanser, serum, and lip color — priced in ₹, shipped across India.</p>
      </header>
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c.id}
            className={cat === c.id ? 'on' : ''}
            onClick={() => setCat(c.id)}
            type="button"
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
