import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from '../assets/images/LogoYellow.jpg';
import logo2 from '../assets/images/LogoYellow(2).jpg'
import navIcon from '../assets/images/icons8-linkedin-144.png';
import navIcon2 from '../assets/images/icons8-github-100.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="logo">
          <img className="sun-logo" src={logo2} alt="Logo" height="60" />
          <img className="name-logo" src={logo} alt="Logo" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-text">
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#letsconnect">let's connect</Nav.Link>
          </Nav>
          <Navbar.Brand className="link-icons">
            <Nav.Link href="https://www.linkedin.com/in/kelsey-o-kelley-23057a20b/">
              <img src={navIcon} alt="LinkedIn" width="50" height="50" />
            </Nav.Link>
            <Nav.Link href="https://github.com/TheKelsenator">
              <img src={navIcon2} alt="GitHub" width="50" height="50" />
            </Nav.Link>
          </Navbar.Brand>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default NavBar;