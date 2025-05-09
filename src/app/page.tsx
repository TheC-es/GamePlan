/* eslint-disable no-trailing-spaces */ 
import { Col, Container, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="px-0">
      <Row className="gx-0">
        <Col
          className="hero-overlay text-center text-dark d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="fw-bold display-3 mb-4">🏀 Welcome to GamePlan</h1>
          <p className="lead w-75 mx-auto">
            The Warrior Rec Center gets busy — especially after 5 PM. Finding court time can be a challenge.
          </p>
          <p className="w-75 mx-auto">
            GamePlan makes it easier. Reserve your court time, find teammates, and make the most of every game.
          </p>
          <a href="/schedule" className="btn btn-dark btn-lg mt-4 shadow">
            Reserve Your Spot
          </a>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
