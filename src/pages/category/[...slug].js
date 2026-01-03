import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductSection from "../../components/ProductSection/ProductSection";
import TopNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from './category.module.css';

export default function CategoryPage() {
  const router = useRouter();

  if (!router.isReady) return null;

  const { slug } = router.query;

  const category = slug?.[0] || null;
  const subcategory = slug?.[1] || null;

  const pageTitle = subcategory || category;

  const formatText = (text) =>
    text?.replaceAll("-", " ");

  return (
    <div className={`${styles.pageWrapper}`}>
      <main className={styles.pageWrapper}>
        <TopNavbar />

        {/*  Breadcrumb */}
        <div className="standard-padding pb-0">
          <Breadcrumbs
            category={category}
            subcategory={subcategory}
          />
        </div>

        {/* 🔹 Center Heading */}
        <div className={styles.categoryHeading}>
          <h1>{formatText(pageTitle)}</h1>
          
        </div>

        {/* 🔹 Filters + Products */}
        <Row className={styles.contentPadding}>
          <div className={styles.filterbox}>
            <FilterSidebar
              category={category}
              subcategory={subcategory}
            />
          </div>

          <div className={styles.productbox}>
            <ProductSection
              category={category}
              subcategory={subcategory}
            />
          </div>
        </Row>

        <Footer />
      </main>
    </div>
  );
}
