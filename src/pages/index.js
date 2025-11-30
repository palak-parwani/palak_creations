import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Homepage from "../components/Homepage/Homepage";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pageWithFixedNavbar">
        <Homepage />
        {/* <Container fluid className="py-4">
        <Row>
          <Col md={3}>
            <FilterSidebar />
          </Col>
          <Col md={9}>
            <ProductSection />
          </Col>
        </Row>
      </Container> */}

        <Footer />
      </main>
    </>
  );
}
