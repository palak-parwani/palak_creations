// ============================================
// components/ProductSection.js (UPDATED with navigation)
// ============================================
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Heart } from 'lucide-react';
import styles from './ProductSection.module.css';

const ProductSection = ({ category, subcategory }) => {
  const router = useRouter();
  const [wishlist, setWishlist] = useState([]);
  const [showCount, setShowCount] = useState('12');
  const [sortBy, setSortBy] = useState('featured');

  const toggleWishlist = (productId, e) => {
    e.stopPropagation(); // Prevent card click
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (productId) => {
    // Navigate to product detail page
    router.push(`/product/${productId}`);
  };

  const products = [
    {
      id: 'marsha-maxi-dress-001',
      name: 'MARSHA MAXI DRESS',
      image: '/assets/suitsets1.jpg',
      originalPrice: 4749,
      salePrice: 1199,
      discount: '75% off',
      rating: 5,
      reviews: 8,
      badges: ['BESTSELLER', 'EXTRA 20% OFF']
    },
    {
      id: 'cassia-maxi-dress-002',
      name: 'CASSIA MAXI DRESS',
      image: '/assets/suitsets8.jpg',
      originalPrice: 4749,
      salePrice: 1399,
      discount: '71% off',
      rating: 5,
      reviews: 8,
      badges: ['BESTSELLER', 'EXTRA 20% OFF']
    },
    {
      id: 'sorbet-yellow-ikat-003',
      name: 'SORBET YELLOW IKAT DRESS',
      image: '/assets/cord1.jpg',
      originalPrice: 3749,
      salePrice: 1399,
      discount: '63% off',
      rating: 5,
      reviews: 6,
      badges: ['BESTSELLER', 'EXTRA 20% OFF']
    },
    {
      id: 'multicolour-floral-004',
      name: 'MULTICOLOUR ANIMATED FLORAL DRESS',
      image: '/assets/lehnga1.jpg',
      originalPrice: 3749,
      salePrice: 999,
      discount: '73% off',
      rating: 0,
      reviews: 0,
      badges: ['NEW', 'BESTSELLER', 'EXTRA 20% OFF']
    },
    {
      id: 'floral-print-maxi-005',
      name: 'FLORAL PRINT MAXI DRESS',
      image: '/assets/suitsets5.jpg',
      originalPrice: 3999,
      salePrice: 1299,
      discount: '67% off',
      rating: 5,
      reviews: 12,
      badges: ['BESTSELLER', 'EXTRA 20% OFF']
    },
    {
      id: 'white-cotton-dress-006',
      name: 'WHITE COTTON DRESS',
      image: '/assets/suitsets7.jpg',
      originalPrice: 2999,
      salePrice: 899,
      discount: '70% off',
      rating: 4,
      reviews: 5,
      badges: ['EXTRA 20% OFF']
    },
    {
      id: 'striped-midi-dress-007',
      name: 'STRIPED MIDI DRESS',
      image: '/assets/cord3.jpg',
      originalPrice: 3499,
      salePrice: 1099,
      discount: '69% off',
      rating: 5,
      reviews: 9,
      badges: ['BESTSELLER']
    },
    {
      id: 'elegant-white-dress-008',
      name: 'ELEGANT WHITE DRESS',
      image: '/assets/cord2.jpg',
      originalPrice: 4299,
      salePrice: 1499,
      discount: '65% off',
      rating: 5,
      reviews: 15,
      badges: ['NEW', 'EXTRA 20% OFF']
    },
    {
      id: 'elegant-white-dress-008',
      name: 'ELEGANT WHITE DRESS',
      image: '/assets/cord2.jpg',
      originalPrice: 4299,
      salePrice: 1499,
      discount: '65% off',
      rating: 5,
      reviews: 15,
      badges: ['NEW', 'EXTRA 20% OFF']
    },
    {
      id: 'elegant-white-dress-008',
      name: 'ELEGANT WHITE DRESS',
      image: '/assets/cord2.jpg',
      originalPrice: 4299,
      salePrice: 1499,
      discount: '65% off',
      rating: 5,
      reviews: 15,
      badges: ['NEW', 'EXTRA 20% OFF']
    },
    {
      id: 'elegant-white-dress-008',
      name: 'ELEGANT WHITE DRESS',
      image: '/assets/cord2.jpg',
      originalPrice: 4299,
      salePrice: 1499,
      discount: '65% off',
      rating: 5,
      reviews: 15,
      badges: ['NEW', 'EXTRA 20% OFF']
    },
    
  ];

  return (
    <div className={styles.productSection}>
      <div className={styles.productHeader}>
        <h5 className={styles.productCount}>226 Products</h5>
        <div className={styles.productControls}>
          <div className={styles.selectWrapper}>
            <label className={styles.selectLabel}>Show</label>
            <select 
              className={styles.select}
              value={showCount}
              onChange={(e) => setShowCount(e.target.value)}
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
          <select 
            className={styles.select}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Best Selling</option>
            <option value="newest">Alphabetically, A-Z</option>
            <option value="newest">Alphabetically, Z-A</option>
            <option value="newest">% Sale off</option>
          </select>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.map(product => (
          <div 
            key={product.id} 
            className={styles.productCard}
            onClick={() => handleProductClick(product.id)}
          >
            <div className={styles.productImageWrapper}>
              <img 
                src={product.image} 
                alt={product.name}
                className={styles.productImage}
              />
              <button 
                className={styles.wishlistBtn}
                onClick={(e) => toggleWishlist(product.id, e)}
              >
                <Heart 
                  size={20} 
                  fill={wishlist.includes(product.id) ? '#ff4444' : 'none'}
                  color={wishlist.includes(product.id) ? '#ff4444' : '#666'}
                />
              </button>
              <div className={styles.productBadges}>
                {product.badges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`${styles.badge} ${badge === 'NEW' ? styles.badgeNew : styles.badgeDefault}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productName}>{product.name}</h3>
              {product.reviews > 0 && (
                <div className={styles.productRating}>
                  <span className={styles.stars}>{'★'.repeat(product.rating)}</span>
                  <span className={styles.reviewCount}>{product.reviews} reviews</span>
                </div>
              )}
              <div className={styles.productPrice}>
                <span className={styles.originalPrice}>₹ {product.originalPrice.toFixed(2)}</span>
                <span className={styles.salePrice}>₹ {product.salePrice.toFixed(2)}</span>
                <span className={styles.discount}>{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;