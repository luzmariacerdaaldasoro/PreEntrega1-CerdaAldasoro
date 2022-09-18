
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget.js";
import './CartWidget.css'

const NavBar = () => {
    return ( 
      <NavBar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            AlCe Sound and Lightning
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Luz y Sonido</Nav.Link>
            <Nav.Link href="#pricing">Brincolines</Nav.Link>
            <Nav.Link href="#muebles">Muebles y Toldos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </NavBar>
    
    )   
}
export default NavBar;
