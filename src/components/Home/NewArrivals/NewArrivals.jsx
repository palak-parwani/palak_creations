import styles from "./NewArrivals.module.css";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";

export default function NewArrivals() {
  const arrivals = [
    {
      id: 1,
      name: "Pink Floral Print Kurta Set",
      price: "₹1,299",
      save: "15% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 2,
      name: "Wine Embroidered Suit Set",
      price: "₹1,999",
      save: "15% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 3,
      name: "Beige Cotton Straight Kurta",
      price: "₹899",
      save: "16% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 4,
      name: "Sky Blue Printed Kurta Set",
      price: "₹1,499",
      save: "20% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 5,
      name: "Red Organza Suit Set",
      price: "₹2,299",
      save: "15% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 6,
      name: "Yellow Block Print Kurta",
      price: "₹799",
      save: "18% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 7,
      name: "Mustard Anarkali Suit Set",
      price: "₹2,499",
      save: "17% OFF",
      img: "/assets/suit5.jpg",
    },
    {
      id: 8,
      name: "Teal Printed Kurta Set",
      price: "₹1,299",
      save: "15% OFF",
      img: "/assets/suit5.jpg",
    },
  ];

  return (
    <section className="standard-padding">
      <div className="container">
        <h2 className={styles.heading}>New Arrivals</h2>
        <p className={styles.subheading}>Fresh styles added just for you.</p>

        <div className={styles.grid}>
          {arrivals.map((item) => (
            <div key={item.id} className={styles.card}>
             <div className={styles.imgWrap}>
  <img src={item.img} alt={item.name} className={styles.img} />

  {/* NEW TAG */}
  <span className={styles.tag}>NEW</span>

  {/* WISHLIST */}
  <button className={styles.wishlist}>
    <FaRegHeart size={16} />
  </button>

  {/* ADD TO BAG */}
  <div className={styles.addToBag}>
    <RiShoppingBagLine size={17} />
  </div>

  {/* SIZE OVERLAY ON HOVER */}
  <div className={styles.sizesWrap}>
    {["XS", "S", "M", "L", "XL", "2XL"].map((size, i) => (
      <span key={i} className={styles.sizeBox}>
        {size}
      </span>
    ))}
  </div>
</div>


              <p className={styles.name}>{item.name}</p>
              <div className="d-flex justify-content-start align-items-center gap-2">
                <p className={styles.strikeprice}>{item.price}</p>
                <p className={styles.price}>{item.price}</p>
                <p className={styles.save}>{item.save}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center">
           
      <button className={styles.btnText}>VIEW ALL
      </button>
    
        </div>
      </div>
    </section>
  );
}
