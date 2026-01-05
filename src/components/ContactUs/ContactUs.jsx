import React from "react";
import TopNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./ContactUs.module.css";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <TopNavbar />

      <div className={`standard-padding ${styles.wrapper}`}>
        <div className={styles.container}>

          {/* LEFT FORM */}
          <div className={styles.formCard}>
            <h2>Get In Touch</h2>
            <p className={styles.subText}>
              Have a question or need help? We’re here for you.
            </p>

            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email *</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone Number *</label>
            <input type="tel" placeholder="Enter phone number" />

            <label>Message</label>
            <textarea rows="4" placeholder="Write your message" />

            <button>Send Message</button>
          </div>

          {/* RIGHT INFO */}
          <div className={styles.infoSection}>
            <h2>Support</h2>

            <div className={styles.infoCard}>
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+91 8800174972</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>orders@yourbrand.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FiMapPin />
              <div>
                <h4>Address</h4>
                <p>
                  3rd Floor, Industrial Area,<br />
                  Jaipur, Rajasthan – 302001
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FiClock />
              <div>
                <h4>Operating Hours</h4>
                <p>
                  Mon – Sat<br />
                  10:00 AM – 8:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
