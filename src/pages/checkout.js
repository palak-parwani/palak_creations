// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from './Checkout.module.css';

// export default function Checkout() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     state: 'Rajasthan',
//     pincode: '',
//     phone: '',
//     emailOffers: false,
//     shippingMethod: 'standard',
//     sameAsShipping: true
//   });

//   // Get cart items from localStorage or context
//   const [cartItems] = useState([
//     {
//       id: 1,
//       name: 'Emily Cotton Suit Set',
//       price: 2399,
//       quantity: 1,
//       image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=100&h=100&fit=crop'
//     }
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const calculateTotal = () => {
//     const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const shipping = 0; // Free shipping
//     return subtotal + shipping;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare order details
//     const orderDetails = {
//       ...formData,
//       items: cartItems,
//       total: calculateTotal(),
//       orderDate: new Date().toISOString()
//     };

//     // Create WhatsApp message
//     const whatsappMessage = `
// 🛍️ *NEW ORDER*

// *Customer Details:*
// Name: ${formData.firstName} ${formData.lastName}
// Email: ${formData.email}
// Phone: ${formData.phone}

// *Shipping Address:*
// ${formData.address}
// ${formData.apartment ? formData.apartment + '\n' : ''}${formData.city}, ${formData.state} - ${formData.pincode}

// *Order Items:*
// ${cartItems.map(item => `- ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`).join('\n')}

// *Total Amount:* ₹${calculateTotal().toFixed(2)}
//     `.trim();

//     // Send to WhatsApp (replace with your number)
//     const phoneNumber = '918800174972'; // Your WhatsApp number
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
//     // Send email (you'll need to implement backend API for this)
//     try {
//       await fetch('/api/send-order-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(orderDetails)
//       });
//     } catch (error) {
//       console.error('Email send failed:', error);
//     }

//     // Open WhatsApp
//     window.open(whatsappUrl, '_blank');
    
//     // Redirect to thank you page
//     setTimeout(() => {
//       router.push('/order-success');
//     }, 1000);
//   };

//   return (
//     <div className={styles.checkoutWrapper}>
//       <div className={styles.container}>
//         {/* Left Side - Contact & Delivery */}
//         <div className={styles.leftSection}>
//           <h1 className={styles.mainTitle}>Contact</h1>
          
//           <form onSubmit={handleSubmit}>
//             {/* Contact Section */}
//             <div className={styles.section}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={styles.input}
//                 required
//               />
//               <label className={styles.checkbox}>
//                 <input
//                   type="checkbox"
//                   name="emailOffers"
//                   checked={formData.emailOffers}
//                   onChange={handleInputChange}
//                 />
//                 <span>Email me with news and offers</span>
//               </label>
//             </div>

//             {/* Delivery Section */}
//             <h2 className={styles.sectionTitle}>Delivery</h2>
//             <div className={styles.section}>
//               <select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 className={styles.select}
//               >
//                 <option value="Rajasthan">Rajasthan</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Maharashtra">Maharashtra</option>
//               </select>

//               <div className={styles.row}>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First name"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={styles.input}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last name"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={styles.input}
//                   required
//                 />
//               </div>

//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className={styles.input}
//                 required
//               />

//               <input
//                 type="text"
//                 name="apartment"
//                 placeholder="Apartment, suite, etc."
//                 value={formData.apartment}
//                 onChange={handleInputChange}
//                 className={styles.input}
//               />

//               <div className={styles.row}>
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   className={styles.input}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="pincode"
//                   placeholder="PIN code"
//                   value={formData.pincode}
//                   onChange={handleInputChange}
//                   className={styles.input}
//                   required
//                 />
//               </div>

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className={styles.input}
//                 required
//               />

//               <label className={styles.checkbox}>
//                 <input
//                   type="checkbox"
//                   name="sameAsShipping"
//                   checked={formData.sameAsShipping}
//                   onChange={handleInputChange}
//                 />
//                 <span>Text me with news and offers</span>
//               </label>
//             </div>

//             {/* Shipping Method */}
//             <h2 className={styles.sectionTitle}>Shipping method</h2>
//             <div className={styles.shippingInfo}>
//               Enter your shipping address to view available shipping methods.
//             </div>

//             {/* Payment */}
//             <h2 className={styles.sectionTitle}>Payment</h2>
//             <div className={styles.section}>
//               <div className={styles.paymentInfo}>
//                 All transactions are secure and encrypted.
//               </div>
//               <div className={styles.paymentMethod}>
//                 <label className={styles.radio}>
//                   <input type="radio" name="payment" value="razorpay" defaultChecked />
//                   <span>Razorpay Secure (UPI, Cards, Net Banking, Wallets)</span>
//                 </label>
//                 <div className={styles.paymentLogos}>
//                   <img src="/payment-icons.png" alt="Payment methods" />
//                 </div>
//               </div>
//               <div className={styles.paymentNote}>
//                 After clicking "Pay now", you will be redirected to Razorpay Secure (UPI, Cards, Net Banking, Wallets) to complete your purchase securely.
//               </div>
//             </div>

//             {/* Billing Address */}
//             <h2 className={styles.sectionTitle}>Billing address</h2>
//             <div className={styles.section}>
//               <label className={styles.radio}>
//                 <input
//                   type="radio"
//                   name="billingAddress"
//                   value="same"
//                   defaultChecked
//                 />
//                 <span>Same as shipping address</span>
//               </label>
//               <label className={styles.radio}>
//                 <input
//                   type="radio"
//                   name="billingAddress"
//                   value="different"
//                 />
//                 <span>Use a different billing address</span>
//               </label>
//             </div>

//             <button type="submit" className={styles.payNowBtn}>
//               Pay now
//             </button>
//           </form>
//         </div>

//         {/* Right Side - Order Summary */}
//         <div className={styles.rightSection}>
//           <div className={styles.orderSummary}>
//             {cartItems.map(item => (
//               <div key={item.id} className={styles.orderItem}>
//                 <div className={styles.orderItemImage}>
//                   <img src={item.image} alt={item.name} />
//                   <span className={styles.orderItemQty}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.orderItemDetails}>
//                   <h4>{item.name}</h4>
//                   <p>SKU_SIZE-M | WOMEN | COTTON</p>
//                 </div>
//                 <div className={styles.orderItemPrice}>
//                   ₹{(item.price * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}

//             <div className={styles.discountCode}>
//               <input
//                 type="text"
//                 placeholder="Discount code or gift card"
//                 className={styles.discountInput}
//               />
//               <button className={styles.applyBtn}>Apply</button>
//             </div>

//             <div className={styles.orderTotals}>
//               <div className={styles.totalRow}>
//                 <span>Subtotal {cartItems.length} items</span>
//                 <span>₹{calculateTotal().toFixed(2)}</span>
//               </div>
//               <div className={styles.totalRow}>
//                 <span>Shipping</span>
//                 <span>Free shipping</span>
//               </div>
//               <div className={`${styles.totalRow} ${styles.grandTotal}`}>
//                 <span>Total</span>
//                 <span>₹{calculateTotal().toFixed(2)}</span>
//               </div>
//               <div className={styles.savingsInfo}>
//                 TOTAL SAVINGS ₹185.00
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }