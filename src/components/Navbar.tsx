/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

// These imports will be used for future functionality
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
// import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  // The following constants are left in for future use.
  const { data: session } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const role = userWithRole?.randomKey;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathName = usePathname();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Image src="/dummyLogo.png" width="150px" alt="Logo" className="p-2" />
        <Navbar.Brand href="/">GamePlan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
          <Nav.Link href="">
            Games
          </Nav.Link>
          <Nav.Link href="\basketball">
            Basketball
          </Nav.Link>
          <Nav.Link href="\volleyball">
            Volleyball
          </Nav.Link>
          <Nav.Link href="">
            Schedule Game
          </Nav.Link>
          <Nav.Link href="/schedule">
            Basketball Schedule
          </Nav.Link>
          <Nav.Link href="/schedule2">
            Volleyball Schedule
          </Nav.Link>
          <Nav.Link href="/aboutus">
            About Us
          </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/auth/signin">
            Sign In
          </Nav.Link>
          <Nav.Link href="/auth/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link href="/auth/signout">
            Sign Out
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
