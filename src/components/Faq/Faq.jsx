import React, { useState } from "react";
import TopNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "What types of ethnic wear do you offer?",
    answer:
      "We offer Kurtis, Suit Sets, Co-ords, Festive Wear, Wedding Wear, Office Wear, and Daily Wear for women.",
  },
  {
    question: "Are your outfits suitable for daily wear?",
    answer:
      "Yes, we have breathable cotton kurtis and comfortable daily wear options designed for all-day comfort.",
  },
  {
    question: "Do you provide festive and wedding collections?",
    answer:
      "Absolutely. Our festive and wedding collections include lehenga choli, gharara sets, and embellished suit sets.",
  },
  {
    question: "What sizes are available?",
    answer:
      "We offer sizes from XS to XXL. Size availability may vary depending on the product.",
  },
  {
    question: "Do you offer returns or exchanges?",
    answer:
      "Yes, we offer easy returns and exchanges as per our return policy.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <TopNavbar />

      <div className={`${styles.wrapper} standard-padding`}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>

        <div className={styles.accordion}>
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className={styles.answer}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
