import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/" as={Link}>Cart 0</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;