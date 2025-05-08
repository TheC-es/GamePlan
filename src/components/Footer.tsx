import { Col, Container, Row, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row>
        <Col>
          <Image src="/logo.jpg" width={100} className="p-2" />
          <a href="https://thec-es.github.io/" style={{ color: 'inherit', textDecoration: 'none' }}>The C+es website</a>
        </Col>
        <Col>
          <h5>Contributors</h5>
          <ul>
            <li>Alan Reeves</li>
            <li>Anthony Nguyen</li>
            <li>Simon Lin</li>
            <li>Angelo Rosal</li>
            <li>Maya Buchanan</li>
          </ul>
        </Col>
        <Col>
          <h5>Contact Information</h5>
          <p>Phone: (808) 888-8888</p>
          <p>Email: changeme@hawaii.edu</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
