import { useState } from 'react'; 
import { Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../assets/images/LogoYellow.jpg';
import logo2 from '../assets/images/LogoYellow(2).jpg'
import navIcon from '../assets/images/icons8-linkedin-144.png';
import navIcon2 from '../assets/images/icons8-github-100.png';

function NavBar() {
  const [activeLink, setActiveLink] = useState('letsconnect');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className="" fixed="top">
    <style>{styles}</style>
      <Container>
        <Navbar.Brand className="logo">
          <img className="sun-logo" src={logo2} alt="Logo" height="60" />
          <img className="name-logo" src={logo} alt="Logo" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-text">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('about')}}>about</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('skills')}}>skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('projects')}}>projects</Nav.Link>
            <Nav.Link href="#letsconnect" className={activeLink === 'letsconnect' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('letsconnect')}}>let's connect</Nav.Link>
          </Nav>
          <Navbar.Brand className="link-icons">
            <Nav.Link href="https://www.linkedin.com/in/kelsey-o-kelley-23057a20b/">
              <img src={navIcon} alt="LinkedIn" height="50" />
            </Nav.Link>
            <Nav.Link href="https://github.com/TheKelsenator">
              <img src={navIcon2} alt="GitHub" height="45" />
            </Nav.Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = `
  nav.navbar { 
    background-color: #d3a15e !important;
    /* background-color: #c88a36 !important; */
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 0;
  }

  .logo {
    display: flex;
    justify-content: left;
  }

  img.sun-logo {
    padding-right: 3%;
  }

  .navbar-text {
    width: 100%;
    justify-content: right;
  }

  .nav-link {
    color: #764b36 !important;
    font-size: 20px !important;
    padding-left: 5% !important;
  }

  .nav-link:hover {
    color: #462e20 !important;
    font-weight: 500 !important;
  }

  .link-icons {
    display: flex;
    width: 25%;
    justify-content: right;
  }

  @media screen and (max-width: 400px) {
    nav.navbar { 
      background-color: #d3a15e !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      padding: 0;
    }
    
    .logo {
      display: flex;
      justify-content: left;
    }
    
    img.sun-logo {
      padding-right: 3%;
    }
    
    .navbar-text {
      width: 100%;
      justify-content: right;
    }
    
    .nav-link {
      color: #764b36 !important;
      font-size: 20px !important;
      padding-left: 5% !important;
    }
    
    .nav-link:hover {
      color: #462e20 !important;
      font-weight: 500 !important;
    }
    
    .link-icons {
      display: flex;
      width: 25%;
      justify-content: right;
    }
  }
  
  @media screen and (min-width: 401px) and (max-width: 720px) {
    nav.navbar { 
      background-color: #d3a15e !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      padding: 0;
    }
    
    .logo {
      display: flex;
      justify-content: left;
    }
    
    img.sun-logo {
      padding-right: 3%;
    }
    
    .navbar-text {
      width: 100%;
      justify-content: right;
    }
    
    .nav-link {
      color: #764b36 !important;
      font-size: 20px !important;
      padding-left: 5% !important;
    }
    
    .nav-link:hover {
      color: #462e20 !important;
      font-weight: 500 !important;
    }
    
    .link-icons {
      display: flex;
      width: 25%;
      justify-content: right;
    }
  }
  
  @media screen and (min-width: 721px) and (max-width: 1280px) {
    nav.navbar { 
      background-color: #d3a15e !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      padding: 0;
    }
    
    .logo {
      display: flex;
      justify-content: left;
    }
    
    img.sun-logo {
      padding-right: 3%;
    }
    
    .navbar-text {
      width: 100%;
      justify-content: right;
    }
    
    .nav-link {
      color: #764b36 !important;
      font-size: 20px !important;
      padding-left: 5% !important;
    }
    
    .nav-link:hover {
      color: #462e20 !important;
      font-weight: 500 !important;
    }
    
    .link-icons {
      display: flex;
      width: 25%;
      justify-content: right;
    }
  }
  
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    nav.navbar { 
      background-color: #d3a15e !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      padding: 0;
    }
    
    .logo {
      display: flex;
      justify-content: left;
    }
    
    img.sun-logo {
      padding-right: 3%;
    }
    
    .navbar-text {
      width: 100%;
      justify-content: right;
    }
    
    .nav-link {
      color: #764b36 !important;
      font-size: 20px !important;
      padding-left: 5% !important;
    }
    
    .nav-link:hover {
      color: #462e20 !important;
      font-weight: 500 !important;
    }
    
    .link-icons {
      display: flex;
      width: 25%;
      justify-content: right;
    }
  }
  
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    nav.navbar { 
      background-color: #d3a15e !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      padding: 0;
    }
    
    .logo {
      display: flex;
      justify-content: left;
    }
    
    img.sun-logo {
      padding-right: 3%;
    }
    
    .navbar-text {
      width: 100%;
      justify-content: right;
    }
    
    .nav-link {
      color: #764b36 !important;
      font-size: 20px !important;
      padding-left: 5% !important;
    }
    
    .nav-link:hover {
      color: #462e20 !important;
      font-weight: 500 !important;
    }
    
    .link-icons {
      display: flex;
      width: 25%;
      justify-content: right;
    }
  }
  
  @media screen and (min-width: 1921px) {
    nav.navbar { 
      background-color: #d3a15e !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      padding: 0;
    }
    
    .logo {
      display: flex;
      justify-content: left;
    }
    
    img.sun-logo {
      padding-right: 3%;
    }
    
    .navbar-text {
      width: 100%;
      justify-content: right;
    }
    
    .nav-link {
      color: #764b36 !important;
      font-size: 20px !important;
      padding-left: 5% !important;
    }
    
    .nav-link:hover {
      color: #462e20 !important;
      font-weight: 500 !important;
    }
    
    .link-icons {
      display: flex;
      width: 25%;
      justify-content: right;
    }
  }
`;

export default NavBar;