import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../../assets/images/GD.png";


export default function NavbarComponent() {
  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary navbar justify-content-between">
        <Nav>
          <img src={process.env.PUBLIC_URL + logo} className="App-logo" alt="logo" />  
          <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
          <Nav.Link className="nav-link" href="#about">About</Nav.Link>
          <Nav.Link className="nav-link" href="#services">Our Services</Nav.Link>
          <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
