import { Col, Container, Row, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 custom-footer">
    <Container className="text-center">
      <Row>
        <Col>
          <Image src="/logo.jpg" width={100} className="p-2" />
          <a href="https://thec-es.github.io/" style={{ color: 'inherit', textDecoration: 'none' }}>The C+es website</a>
        </Col>
        <Col>
          <h5>Contributors</h5>
          <p>Alan Reeves, Anthony Nguyen, Simon Lin, Angelo Rosal, Maya Buchanan</p>
        </Col>
        <Col>
          <h5>Contact Information</h5>
          <p>Phone: (808) 956-5490</p>
          <p>Email: wrcsuprt@hawaii.edu</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
