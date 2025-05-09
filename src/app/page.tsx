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
          <h1 className="fw-bold">Welcome To Game Plan</h1>
          <p>
            At the Warrior Rec Center, there is limited space and many people who want to use the courts
            to play basketball or volleyball.
          </p>
          <p>
            This gets especially bad after 5 pm, when it can be hard to get a spot on the court 
            with so many people competing. This web app seeks to solve this problem by allowing 
            students to reserve time on the courts for their groups, and to look for groups to join.
          </p>
        </Col>
      </Row>

    </Container>
  </main>
);

export default Home;
