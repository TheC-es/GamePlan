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
          <h2>Meet The Members</h2>
        </Col>
      </Row>

      {/* Custom 5-column layout using flexbox */}
      <Row className="d-flex justify-content-center text-center mt-4" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h3>Alan Reeves</h3>
          <p>Major: Computer Science</p>
          <p>Contact: alandr@hawaii.edu</p>
          Github:
          {' '}
          <a href="https://github.com/AlanDReeves" target="_blank" rel="noopener noreferrer">
            https://github.com/AlanDReeves
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Anthony Nguyen</h3>
          <p>Major: Computer Science</p>
          <p>Contact: an34@hawaii.edu</p>
          Github:
          {' '}
          <a href="https://github.com/anthonyn1023" target="_blank" rel="noopener noreferrer">
            https://github.com/anthonyn1023
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Simon Lin</h3>
          <p>Major: Computer Science</p>
          <p>Contact: slin4@hawaii.edu</p>
          Github:
          {' '}
          <a href="https://github.com/simonwlin" target="_blank" rel="noopener noreferrer">
            https://github.com/simonwlin
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Angelo Rosal</h3>
          <p>Major: Computer Science</p>
          <p>Contact: arosal@hawaii.edu</p>
          Github:
          {' '}
          <a href="https://github.com/Angelo-Rosal" target="_blank" rel="noopener noreferrer">
            https://github.com/Angelo-Rosal
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Maya Buchanan</h3>
          <p>Major: Computer Science</p>
          <p>Contact: maya26@hawaii.edu</p>
          Github:
          {' '}
          <a href="https://github.com/mayabuchanan27" target="_blank" rel="noopener noreferrer">
            https://github.com/mayabuchanan27
          </a>
        </div>
      </Row>
    </Container>
  </main>
);

export default AboutUs;
