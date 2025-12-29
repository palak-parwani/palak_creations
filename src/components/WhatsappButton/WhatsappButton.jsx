import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
