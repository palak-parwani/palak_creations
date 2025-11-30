import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductSection from "../../components/ProductSection/ProductSection";
import TopNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function CategoryPage() {
  const router = useRouter();


  if (!router.isReady) return null;

  const { slug } = router.query;

  const category = slug?.[0] || null;
  const subcategory = slug?.[1] || null;

  return (
    <Container fluid className="pt-4  pageWithFixedNavbar">
      <main className="pageWithFixedNavbar">
        <TopNavbar />
        {/* <h2 className="text-capitalize">
          {subcategory
            ? subcategory.replaceAll("-", " ")
            : category?.replaceAll("-", " ")}
        </h2> */}

        <Row className="px-5">
          <Col md={3}>
            <FilterSidebar category={category} subcategory={subcategory} />
          </Col>

          <Col md={9}>
            <ProductSection category={category} subcategory={subcategory} />
          </Col>
        </Row>
        <Footer />
      </main>
    </Container>
  );
}
