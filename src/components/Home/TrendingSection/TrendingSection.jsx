import Slider from "react-slick";
import styles from "./TrendingSection.module.css";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Image from "next/image";

export default function TrendingSection() {
  const products = [
    {
      id: 1,
      name: "Orange Tissue Embroidered Suit Set With Sequins",
      strikeprice: "₹9,998",
      price: "₹9,998",
      sizes: ["S", "M"],
      img: "/assets/suitsets5.jpg",
    },
    {
      id: 2,
      name: "Wine Chinon Embroidered Suit Set With Zari",
      strikeprice: "₹9,998",
      price: "₹7,998",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      img: "/assets/suitsets2.jpg",
    },
    {
      id: 3,
      name: "Black Dola Silk Woven Design Suit Set With Mirror Work",
      strikeprice: "₹9,998",
      price: "₹8,998",
      sizes: ["S/M", "L/XL"],
      img: "/assets/suitsets5.jpg",
    },
    {
      id: 4,
      name: "Fuchsia Organza Zari Suit Set With Zardosi",
      strikeprice: "₹9,998",
      price: "₹9,998",
      sizes: ["XS", "S", "L", "XL"],
      img: "/assets/suitsets1.jpg",
    },
    {
      id: 5,
      name: "Fuchsia Organza Zari Suit Set With Zardosi",
      strikeprice: "₹9,998",
      price: "₹9,998",
      sizes: ["XS", "S", "L", "XL"],
      img: "/assets/suitsets6.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 800);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const PrevArrow = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={onClick}>
      <GrFormPrevious size={18} />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={onClick}>
      <MdNavigateNext size={18} />
    </div>
  );

  const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  arrows: true,
  beforeChange: (_, next) => setCurrentSlide(next),
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  slidesToShow: 4, // ONLY for very large screens

  responsive: [
    {
      breakpoint: 1400, // 👈 MacBook, 1280px, 1366px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // 👈 iPad landscape / small laptop
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800, // 👈 mobile handled separately
      settings: "unslick",
    },
  ],
};


  return (
    <section className="standard-padding">

      <div className={styles.wrapper}>

        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={`${styles.heading} heading`}>Trending Styles You’ll Love</h2>
          <p className="desc">
            Your most-loved outfits, refreshed for the season.
          </p>

          {/* Desktop button */}
          <div className={styles.models}>
            <button className={styles.btn}>SHOP NOW</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>

          {/* DESKTOP SLIDER */}
          {!isMobile && (
            <Slider {...sliderSettings}>
              {products.map((p) => (
                <div key={p.id} className={styles.card}>
                  <ProductCard product={p} />
                </div>
              ))}
            </Slider>
          )}

          {/* MOBILE SCROLL */}
          {isMobile && (
            <div className={styles.mobileScroll}>
              {products.map((p) => (
                <div key={p.id} className={styles.mobileCard}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE SHOP BUTTON */}
      {isMobile && (
        <div className={styles.mobileShopBtn}>
          <button className={styles.btn}>SHOP NOW</button>
        </div>
      )}

    </section>
  );
}

/* ================= CARD COMPONENT ================= */

const ProductCard = ({ product }) => (
  <>
    <div className={styles.imgWrap}>
      <Image
        src={product.img}
        alt={product.name}
        fill
        className={styles.productImg}
        sizes="(max-width: 768px) 80vw, 25vw"
      />

      <button className={styles.wishlistBtn}>
        <FaRegHeart size={16} />
      </button>

      <span className={styles.badge}>Save 40%</span>

      <div className={styles.cartCircle}>
        <RiShoppingBagLine size={16} />
      </div>
    </div>

    <p className={styles.productName}>{product.name}</p>

    <div className={styles.priceRow}>
      <span className={styles.strikeprice}>{product.strikeprice}</span>
      <span className={styles.price}>{product.price}</span>
    </div>

    <div className={styles.sizeList}>
      {product.sizes.map((s, i) => (
        <span key={i} className={styles.sizeItem}>{s}</span>
      ))}
    </div>
  </>
);
