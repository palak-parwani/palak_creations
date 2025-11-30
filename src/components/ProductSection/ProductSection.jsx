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
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&h=600&fit=crop',
      originalPrice: 4299,
      salePrice: 1499,
      discount: '65% off',
      rating: 5,
      reviews: 15,
      badges: ['NEW', 'EXTRA 20% OFF']
    }
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
            <option value="newest">Newest</option>
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