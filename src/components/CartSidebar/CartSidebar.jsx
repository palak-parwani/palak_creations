// import styles from "./CartSidebar.module.css";
// import { FiX } from "react-icons/fi";
// import Image from "next/image";

// export default function CartSidebar({ open, onClose }) {
//   const cartItem = {
//     title: "Off White Polka Kurta Set",
//     size: "XS",
//     delivery: "Nov 25 - Nov 26",
//     price: 999,
//     img: "/assets/dress1.webp"
//   };

//   return (
//     <>
//       {/* Overlay */}
//       {open && (
//         <div className={styles.overlay} onClick={onClose}></div>
//       )}

//       {/* Right drawer */}
//       <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
//         <div className={styles.header}>
//           <h4>CART</h4>
//           <FiX className={styles.closeBtn} onClick={onClose} />
//         </div>

//         <hr />

//         {/* Cart Item */}
//         <div className={styles.cartItem}>
//           <Image
//             src={cartItem.img}
//             width={95}
//             height={120}
//             alt="cart img"
//             className={styles.itemImg}
//           />

//           <div className={styles.itemInfo}>
//             <h5>{cartItem.title}</h5>
//             <p><strong>Size:</strong> {cartItem.size}</p>
//             <p><strong>Estimated Delivery:</strong> {cartItem.delivery}</p>

//             {/* Quantity */}
//             <div className={styles.qtyBox}>
//               <button>-</button>
//               <span>1</span>
//               <button>+</button>
//             </div>

//             <p className={styles.price}>₹ {cartItem.price}.00</p>
//           </div>
//         </div>

//         {/* BEST OFFERS */}
//         <h6 className="mt-4">BEST OFFERS</h6>

//         <div className={styles.offerBox}>
//           <strong>EXTRA 20% OFF – BUY ANY 3 | EXPLORE</strong>
//           <small>LIMITED TIME DEAL | AUTO-APPLIES AT CHECKOUT</small>
//         </div>

//         <div className={styles.offerText}>
//           <strong>Get Extra 5% Off on Prepaid Order</strong>
//           <p>Avail this in Cashfree Offers section after checkout</p>
//         </div>

//         {/* Bottom Section */}
//         <div className={styles.bottom}>
//           <div className={styles.subtotalRow}>
//             <span>SUBTOTAL</span>
//             <span>₹ 999.00</span>
//           </div>

//           <p className="text-muted">
//             Shipping, taxes, and discount codes calculated at checkout.
//           </p>

//           <button className={styles.checkoutBtn}>CHECK OUT</button>
//         </div>
//       </div>
//     </>
//   );
// }



'use client';

import { X, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/router';
import styles from './CartSidebar.module.css';

export default function CartSidebar({ isOpen, onClose, cartItems, setCartItems }){
  const router = useRouter();

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleBookNow = () => {
    onClose();
    router.push('/checkout');
  };

  if (!isOpen) return null;

  

  return (
    <>
     <div className={styles.overlay} onClick={onClose} />
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Shopping Cart</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemSize}>Size: {item.size}</p>
                  <p className={styles.itemPrice}>₹ {item.price.toFixed(2)}</p>
                  
                  <div className={styles.quantityControl}>
                    <button
                      className={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      className={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotal}>
              <span>Subtotal ({cartItems.length} items)</span>
              <span className={styles.subtotalAmount}>₹ {calculateSubtotal().toFixed(2)}</span>
            </div>
            <button className={styles.bookNowBtn} onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        )}
      </div>
    </>
  );
}