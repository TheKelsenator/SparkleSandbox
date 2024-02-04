import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headshot from '../assets/images/PortfolioHeadShotBlur.png';
import Arrow from '../assets/images/arrow.jpg'

function About() {
  const [activeLink, setActiveLink] = useState('about');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const AnimatedHeader = () => {
    const [text, setText] = useState('');
    const phrase = "Full-Stack Web Developer";
    const interval = 200; 
  
    useEffect(() => {
      const timer = setTimeout(() => {
        startAnimation();
      }, interval); 
      return () => clearTimeout(timer); 
    }, []); 
  
    const startAnimation = () => {
      setText(''); 
      animateText(0); 
    };
  
    const animateText = (index) => {
      if (index === phrase.length) {
        setTimeout(startAnimation, 1000); 
        return;
      }
      setTimeout(() => {
        setText(prevText => prevText + phrase[index]); 
        animateText(index + 1);
      }, interval);
    };
  
    return (
      <Container style={{ minHeight: '4em' }}>
        <p className="developer">{text}</p>
      </Container>
    );
  }
  
  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <Row>
            <Col>
              <p className="welcome">Welcome to my portfolio</p>
            </Col>
          </Row>
          <Row>
            <Col className="name-developer">
              <p className="name">Hi! I'm Kelsey</p>
              <AnimatedHeader />
              <p className="about-paragraph">As a recent graduate of a Full-Stack Bootcamp 
                through the University of Utah, I'm excited to start
                my journey as a junior developer. During my studies I have gained hands-on 
                experience in front-end and back-end technologies, including HTML, CSS, 
                API's, JavaScript, React, Node.js and SQL. Beyond coding I am a curious 
                learner who ejoys whitewater rafting, carpentry/woodworking, sewing, playing 
                guitar and volunteering within my community in beautiful Stanley, Idaho. I am excited to 
                contribute my enthusiasm, techical skills, and passion for learning to a 
                dynamic development team. I am ready to take on new challenges and collaborate 
                with fellow developers to create solutions that drive results.</p>
            </Col>
            <Col className="headshot">
              <Image src={Headshot} roundedCircle alt="cartoon headshot" height="500" />
            </Col>
          </Row>
          <Row>
            <Col>
            <Nav.Link href="#letsconnect" className={activeLink === 'letsconnect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('letsconnect')}>
              <p className="lets-connect">Let's Connect <Image src={Arrow} alt="right facing arrow" height="50" /></p>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;