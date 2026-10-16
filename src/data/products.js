export const formatINR = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)

export const categories = [
  { id: 'all', label: 'All Rituals' },
  { id: 'face-wash', label: 'Face Wash' },
  { id: 'cleanser', label: 'Cleansers' },
  { id: 'serum', label: 'Serums' },
  { id: 'lip', label: 'Lip Color' },
]

export const products = [
  {
    id: 'porcelain-milk',
    name: 'Porcelain Milk Cleanser',
    category: 'cleanser',
    price: 2190,
    size: '150 ml',
    tag: 'Daily ritual',
    image: '/images/product-cleanser.jpg',
    gallery: ['/images/product-cleanser.jpg', '/images/nalatra-still-life.jpg', '/images/ritual-hands.jpg'],
    blurb: 'A milky first cleanse that dissolves the day without stripping the skin barrier.',
    story:
      'Formulated as an evening reset: rice water, camellia, and a whisper of rose otto. The texture is fluid, the finish is calm, never squeaky.',
    notes: ['Rice water', 'Camellia oil', 'Damask rose'],
    skin: 'All skin, especially tightness after city air',
    packaging: 'Ivory frosted glass with muted blush undertone',
  },
  {
    id: 'rosewood-balm',
    name: 'Rosewood Balm Cleanser',
    category: 'cleanser',
    price: 2690,
    size: '80 g',
    tag: 'Melt-away',
    image: '/images/product-balm-cleanser.jpg',
    gallery: ['/images/product-balm-cleanser.jpg', '/images/editorial-texture.jpg', '/images/nalatra-still-life.jpg'],
    blurb: 'A warming balm that melts pigment and SPF into an emulsion of rosewood and oat.',
    story:
      'Work between dry palms until the balm turns to oil, then add water and watch it become milk. Rinse. Skin feels cushioned, never film-coated.',
    notes: ['Rosewood', 'Oat lipid', 'Shea'],
    skin: 'Dry, mature, or makeup-heavy days',
    packaging: 'Wide ivory jar, champagne lid',
  },
  {
    id: 'morning-dew',
    name: 'Morning Dew Gel Wash',
    category: 'face-wash',
    price: 1890,
    size: '180 ml',
    tag: 'Dawn',
    image: '/images/product-gel-wash.jpg',
    gallery: ['/images/product-gel-wash.jpg', '/images/hero-campaign.jpg', '/images/ritual-hands.jpg'],
    blurb: 'A translucent gel that wakes the face with cucumber water and a low-foam amino cleanse.',
    story:
      'Built for humid Indian mornings: light, rinsable, and quietly clarifying. Leaves a cool veil rather than a tight canvas.',
    notes: ['Cucumber water', 'Amino surfactants', 'Green tea'],
    skin: 'Combination and oily, or anyone who prefers gel',
    packaging: 'Clear-frosted pump, ivory and blush system',
  },
  {
    id: 'velvet-cream',
    name: 'Velvet Cleansing Cream',
    category: 'face-wash',
    price: 2490,
    size: '125 ml',
    tag: 'Comfort',
    image: '/images/product-facewash.jpg',
    gallery: ['/images/product-facewash.jpg', '/images/editorial-texture.jpg', '/images/ritual-hands.jpg'],
    blurb: 'A cream-to-foam wash for mornings when the skin asks for softness over sparkle.',
    story:
      'Dispense a pearl, emulsify with damp hands, and massage along the jaw. Rinses clean, leaving the kind of quiet glow that makeup sits well on.',
    notes: ['Marshmallow root', 'Sweet almond', 'Honey extract'],
    skin: 'Normal to dry',
    packaging: 'Matte cream tube, champagne cap',
  },
  {
    id: 'radiance-essence',
    name: 'Radiance Essence Serum',
    category: 'serum',
    price: 4890,
    size: '30 ml',
    tag: 'Signature',
    featured: true,
    image: '/images/product-serum-radiance.jpg',
    gallery: ['/images/product-serum-radiance.jpg', '/images/editorial-texture.jpg', '/images/hero-campaign.jpg'],
    blurb: 'A light-catching essence of fermented rice and niacinamide for a lived-in luminosity.',
    story:
      'Three drops in the palm, press — never rub — from the high points of the face. Designed to sit under cream or alone in warm weather.',
    notes: ['Fermented rice', 'Niacinamide', 'Tremella'],
    skin: 'Dullness, uneven tone',
    packaging: 'Frosted glass, champagne collar',
  },
  {
    id: 'night-restore',
    name: 'Night Restore Serum',
    category: 'serum',
    price: 5490,
    size: '30 ml',
    tag: 'After dark',
    featured: true,
    image: '/images/product-serum-night.jpg',
    gallery: ['/images/product-serum-night.jpg', '/images/lip-macro.jpg', '/images/nalatra-still-life.jpg'],
    blurb: 'A concentrated night treatment of bakuchiol and midnight botanicals in wine-tinted glass.',
    story:
      'The last step before pillow. A slow, cushioned serum that respects retinoid-sensitive skin while still speaking the language of renewal.',
    notes: ['Bakuchiol', 'Squalane', 'Blue tansy'],
    skin: 'Evening recovery, fine texture',
    packaging: 'Amber-frosted dropper, champagne metal',
  },
  {
    id: 'dawn-drops',
    name: 'Vitamin C Dawn Drops',
    category: 'serum',
    price: 3990,
    size: '20 ml',
    tag: 'Brighten',
    image: '/images/product-serum-c.jpg',
    gallery: ['/images/product-serum-c.jpg', '/images/hero-campaign.jpg', '/images/editorial-texture.jpg'],
    blurb: 'Stabilised vitamin C in a silk-light oil-serum for the first light of day.',
    story:
      'One dropper across cheeks and brow. Champagne-gold, never sticky. Follow with a broad-spectrum SPF — radiance without the compromise.',
    notes: ['Ethyl ascorbic acid', 'Sea buckthorn', 'Vitamin E'],
    skin: 'Uneven tone, city pollution',
    packaging: 'Squat frosted dropper, champagne collar',
  },
  {
    id: 'wine-hour',
    name: 'Wine Hour Satin Lip',
    category: 'lip',
    price: 2290,
    size: '3.8 g',
    tag: 'nalatra',
    featured: true,
    image: '/images/product-lipstick-wine.jpg',
    gallery: ['/images/product-lipstick-wine.jpg', '/images/lip-macro.jpg', '/images/product-lipstick-blush.jpg'],
    blurb: 'A deep wine satin that reads as rosewood in daylight and burgundy by evening.',
    story:
      'Precision-milled wax, a satin — not lacquer — finish. Built to look like pigment on skin, not a plastic shell. One pass is enough.',
    notes: ['Jojoba', 'Rice bran wax', 'Vitamin E'],
    skin: 'All lips; layer over balm in dry months',
    packaging: 'Deep wine metal, champagne ring',
  },
  {
    id: 'nude-nalatra',
    name: 'Nude nalatra Matte',
    category: 'lip',
    price: 2290,
    size: '3.8 g',
    tag: 'Everyday',
    image: '/images/product-lipstick-nude.jpg',
    gallery: ['/images/product-lipstick-nude.jpg', '/images/collection-editorial.jpg', '/images/product-lipstick-blush.jpg'],
    blurb: 'A warm rosewood nude with a breathable matte that never feels dusty.',
    story:
      'The studio nude: neither beige nor brown. Made for Indian and global skin undertones that often get left out of “universal” nudes.',
    notes: ['Cocoa butter', 'Silica silk', 'Vanilla absolute'],
    skin: 'Daily wear',
    packaging: 'Cream and muted rose case',
  },
  {
    id: 'blush-silk',
    name: 'Blush Silk Lip Color',
    category: 'lip',
    price: 2190,
    size: '3.8 g',
    tag: 'Sheer',
    image: '/images/product-lipstick-blush.jpg',
    gallery: ['/images/product-lipstick-blush.jpg', '/images/hero-campaign.jpg', '/images/product-lipstick-nude.jpg'],
    blurb: 'A dusty rose silk that looks like your own mouth, only more considered.',
    story:
      'Semi-sheer, buildable, and quietly expensive. The shade we reach for between meetings and dinner.',
    notes: ['Meadowfoam', 'Mica (non-plastic)', 'Rose wax'],
    skin: 'All lips',
    packaging: 'Muted rose metal, champagne ring',
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)

export const relatedProducts = (id, limit = 3) => {
  const current = getProduct(id)
  if (!current) return products.slice(0, limit)
  return products.filter((p) => p.id !== id && p.category === current.category).concat(
    products.filter((p) => p.id !== id && p.category !== current.category),
  ).slice(0, limit)
}
