
import { useState } from "react";
import styles from "./LoginModal.module.css";
import { FiX } from "react-icons/fi";

export default function LoginSignupModal({ open, onClose }) {
  const [showSignup, setShowSignup] = useState(false);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FiX className={styles.closeBtn} onClick={onClose} />

        {!showSignup ? (
          /* ---------------- LOGIN FORM ---------------- */
          <div className={styles.formBox}>
            <h2 className={styles.title}>Welcome Back</h2>
            <p className={styles.sub}>Login to continue</p>

            <input
              type="text"
              placeholder="Mobile Number"
              className={styles.input}
            />

            <button className={styles.primaryBtn}>Continue with OTP</button>

            <p className={styles.switchText}>
              New here?{" "}
              <span onClick={() => setShowSignup(true)}>Create Account</span>
            </p>
          </div>
        ) : (
          /* ---------------- SIGNUP FORM ---------------- */
          <div className={styles.formBox}>
            <h2 className={styles.title}>Create Account</h2>
            <p className={styles.sub}>Join our ethnic fashion family</p>

            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className={styles.input}
            />

            <button className={styles.primaryBtn}>Sign Up</button>

            <p className={styles.switchText}>
              Already have an account?{" "}
              <span onClick={() => setShowSignup(false)}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

