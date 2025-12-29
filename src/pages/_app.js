import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsappButton />
    </>
  );
}
