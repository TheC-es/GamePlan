import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">
        <Image src="WarriorCourts2.jpg" fluid className="w-100" alt="Courts Image" />
      </Row>
      <Row>
        <Container fluid className="py-3">
          <Col className="text-center">
            <h2>About</h2>
            <p>
              At the Warrior Rec Center, there is limited space and many people who want to
              use the courts to play basketball or volleyball.
            </p>
            <p>
              This gets especially bad after 5 pm, when it can be hard to get a spot on the court
              with so many people competing. This web app seeks to solve this problem
              by allowing students to reserve time on the courts for their groups,
              and to look for groups to join.
            </p>
          </Col>
        </Container>
      </Row>
    </Container>
  </main>
);

export default Home;
