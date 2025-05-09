/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

// These imports will be used for future functionality
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, Image, DropdownButton, NavDropdown } from 'react-bootstrap';
import { PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
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
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container fluid>
        <a href="/">
          <Image src="/logo.jpg" width="200" alt="Logo" className="p-2" />
        </a>
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
        <Nav.Link href="/schedulegame">
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
          <Nav className="ms-auto pe-3">
            <DropdownButton
              size="lg"
              align="end"
              className="rounded-0"
              variant="none"
              style={{ backgroundColor: '#4f764a', border: 'none' }}
              title="Login"
              id="login-dropdown"
            >
                  <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                    <PersonFill />
                    {' '}
                    Sign In
                  </NavDropdown.Item>
                  <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                    <PersonPlusFill />
                    {' '}
                    Sign Up
                  </NavDropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
