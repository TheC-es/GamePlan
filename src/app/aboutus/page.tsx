import { Col, Container, Image, Row } from 'react-bootstrap';

/** The About Us page. */
const AboutUs = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">
        <Image src="/WarriorCourts2.jpg" fluid className="w-100" alt="Courts Image" />
      </Row>

      <Row className="text-center mt-4">
        <Col>
          <h2>Meet The Memebers</h2>
        </Col>
      </Row>

      {/* Custom 5-column layout using flexbox */}
      <Row className="d-flex justify-content-center text-center mt-4" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h3>Alan Reeves</h3>
          <p>hi</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Anthony Nguyen</h3>
          <p>hi</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Simon Lin</h3>
          <p>hi</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Angelo Rosal</h3>
          <p>hi</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Maya Buchanan</h3>
          <p>hi</p>
        </div>
      </Row>
    </Container>
  </main>
);

export default AboutUs;
