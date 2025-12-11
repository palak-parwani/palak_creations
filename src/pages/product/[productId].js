'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Minus, Plus, Star } from 'lucide-react';
import styles from './productdetail.module.css';
import CartSidebar from '../../components/CartSidebar/CartSidebar';

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showOffers, setShowOffers] = useState(true);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  // Sample product data (replace with API call)
  const product = {
    id: productId,
    // brand: 'Bunaai',
    name: 'ESHITA COTTON SUIT SET',
    price: 3800.00,
    originalPrice: 4500.00,
    rating: 5,
    reviewCount: 1,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    offers: [
      'Buy 2 get 15% off.',
      'Buy 3 get 20% off.',
      'Buy 4 get 25% off.'
    ],
    description: `This beautiful cotton suit set features intricate tie-dye patterns in black and white. 
    Made from premium quality cotton fabric, it ensures comfort and style for all-day wear. 
    The set includes a kurta and matching pants, perfect for casual and semi-formal occasions.`,
    careGuide: `- Machine wash cold with similar colors
- Do not bleach
- Tumble dry low
- Iron on low heat if needed
- Do not dry clean`,
    additionalInfo: {
      netQuantity: '1 N',
      manufacturer: 'Bunaaiwhiteofficial',
      address: 'Plot no.F-870, First Floor, Road No 14, VKI Area, Jaipur Rajasthan -302013',
      country: 'India',
      email: 'orders@bunaai.com',
      phone: '+91 8800174972'
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const cartItem = {
      id: `${product.id}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: product.images[0]
    };

    setCartItems(prev => {
      const existing = prev.find(item => item.id === cartItem.id);
      if (existing) {
        return prev.map(item =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, cartItem];
    });

    setIsCartOpen(true);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productWrapper}>
          {/* Left Side - Product Images */}
          <div className={styles.imageSection}>
            <div className={styles.thumbnailList}>
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${styles.thumbnail} ${selectedImage === idx ? styles.thumbnailActive : ''}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img src={img} alt={`Product ${idx + 1}`} />
                </div>  
              ))}
            </div>
            <div className={styles.mainImage}>
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className={styles.detailSection}>
            <div className={styles.brandName}>{product.brand}</div>
            <h1 className={styles.productName}>{product.name}</h1>

            {/* Rating */}
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < product.rating ? '#ffa726' : 'none'}
                    color={i < product.rating ? '#ffa726' : '#ddd'}
                  />
                ))}
              </div>
              <span className={styles.reviewCount}>{product.reviewCount} review</span>
            </div>

            {/* Price */}
            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>₹ {product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>₹ {product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <div className={styles.taxInfo}>Inclusive of all taxes</div>

            {/* Size Selection */}
            <div className={styles.sizeSection}>
              <div className={styles.sizeHeader}>
                <span className={styles.sizeLabel}>SELECT SIZE</span>
                <a href="#" className={styles.sizeChart}>Size Chart</a>
              </div>
              <div className={styles.sizeOptions}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeButtonActive : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className={styles.quantitySection}>
              <span className={styles.quantityLabel}>QUANTITY</span>
              <div className={styles.quantityControl}>
                <button className={styles.quantityBtn} onClick={decrementQuantity}>
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className={styles.quantityInput}
                />
                <button className={styles.quantityBtn} onClick={incrementQuantity}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              ADD TO CART
            </button>

            {/* Offers */}
            <div className={styles.offersSection}>
              <div
                className={styles.offersHeader}
                onClick={() => setShowOffers(!showOffers)}
              >
                <span>OFFERS FOR YOU</span>
                <span className={styles.offersToggle}>{showOffers ? '−' : '+'}</span>
              </div>
              {showOffers && (
                <div className={styles.offersList}>
                  {product.offers.map((offer, idx) => (
                    <div key={idx} className={styles.offerItem}>
                      {offer}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Delivery Check */}
            <div className={styles.deliverySection}>
              <div className={styles.deliveryHeader}>Check Delivery Availability</div>
              <p className={styles.deliverySubtext}>
                Enter the pincode of your area to check product availability and delivery options
              </p>
              <input
                type="text"
                placeholder="Enter Pincode"
                className={styles.pincodeInput}
              />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className={styles.tabsSection}>
          <div className={styles.tabHeaders}>
            <button
              className={`${styles.tabHeader} ${activeTab === 'description' ? styles.tabHeaderActive : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`${styles.tabHeader} ${activeTab === 'careGuide' ? styles.tabHeaderActive : ''}`}
              onClick={() => setActiveTab('careGuide')}
            >
              Care Guide
            </button>
            <button
              className={`${styles.tabHeader} ${activeTab === 'additionalInfo' ? styles.tabHeaderActive : ''}`}
              onClick={() => setActiveTab('additionalInfo')}
            >
              Addition Information
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'description' && (
              <div className={styles.description}>
                <p>{product.description}</p>
              </div>
            )}

            {activeTab === 'careGuide' && (
              <div className={styles.careGuide}>
                <pre>{product.careGuide}</pre>
              </div>
            )}

            {activeTab === 'additionalInfo' && (
              <div className={styles.additionalInfo}>
                <div className={styles.infoRow}>
                  <strong>Net Quantity:</strong> {product.additionalInfo.netQuantity}
                </div>
                <div className={styles.infoRow}>
                  <strong>Manufactured by:</strong><br />
                  {product.additionalInfo.manufacturer}<br />
                  {product.additionalInfo.address}
                </div>
                <div className={styles.infoRow}>
                  <strong>Country of Origin:</strong> {product.additionalInfo.country}
                </div>
                <div className={styles.infoRow}>
                  <strong>Customer Care Address:</strong><br />
                  {product.additionalInfo.manufacturer}<br />
                  {product.additionalInfo.address}
                </div>
                <div className={styles.infoRow}>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${product.additionalInfo.email}`} className={styles.link}>
                    {product.additionalInfo.email}
                  </a>
                </div>
                <div className={styles.infoRow}>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${product.additionalInfo.phone}`} className={styles.link}>
                    {product.additionalInfo.phone}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {/* <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      /> */}
      
    </>
  );
}