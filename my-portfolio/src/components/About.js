import React, { useEffect, useState } from 'react';
import { Container, Nav, Row, Col, Image } from 'react-bootstrap';
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
    <style>{styles}</style>
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
              <p className="about-paragraph">A dedicated Web Developer nestled in the breathtaking 
                wilderness of Stanley, Idaho. With my faithful four-legged friend by my side, I 
                find solace in exploring the great outdoors, whether it's hiking through rugged 
                terrain or navigating the rapids of our local rivers. As an active member of my community, I proudly volunteer as an EMT with our local 
                ambulance service. After a decade of embracing seasonal work — a way of life that served me 
                well — I have transitioned away from this transient lifestyle and discovered a profound 
                passion for coding and web development. This newfound enthusiasm is not a fleeting interest; 
                it signifies a deliberate career shift. I'm eager to dive deep into the world of coding 
                and make a lasting impact. Join me in this exciting journey as we navigate the fast-paced 
                world of technology together!</p>
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

const styles = `
  .about-section {
    color: #9b4922;
    background-color: #efe7dd !important;
    padding-top: 2%;
  }

  img.rounded-circle {
    border: 5px solid #d3a15e;
    margin-left: 5%;
    margin-top: 10%
  }

  p.welcome {
    font-size: 30px;
    border: 4px solid #9b4922;
    border-radius: 7px;
    width: fit-content;
    padding: 0 1% 0 1%;
    margin: 8% 0 0 10%;
  }

  div.name-developer.col {
    width: fit-content;
    margin-left: 13%;
  }

  p.name {
    font-size: 75px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  p.developer {
    font-size: 42px;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  p.about-paragraph {
    font-size: 18px;
    margin: 3% 3% 3% 3% ;
  }

  p.lets-connect {
    font-size: 40px;
    font-weight: bold;
    margin: 2% 0 0 25%;
  }

  @media screen and (max-width: 400px) {
    .about-section {
        color: #9b4922;
        background-color: #efe7dd !important;
        padding-top: 2%;
      }
    
      img.rounded-circle {
        border: 5px solid #d3a15e;
        margin-left: 5%;
        margin-top: 10%
      }
    
      p.welcome {
        font-size: 30px;
        border: 4px solid #9b4922;
        border-radius: 7px;
        width: fit-content;
        padding: 0 1% 0 1%;
        margin: 8% 0 0 10%;
      }
    
      div.name-developer.col {
        width: fit-content;
        margin-left: 13%;
      }
    
      p.name {
        font-size: 75px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }
    
      p.developer {
        font-size: 42px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    
      p.about-paragraph {
        font-size: 18px;
        margin: 3% 3% 3% 3% ;
      }
    
      p.lets-connect {
        font-size: 40px;
        font-weight: bold;
        margin: 2% 0 0 25%;
      }
  }
  
  @media screen and (min-width: 401px) and (max-width: 720px) {
    .about-section {
        color: #9b4922;
        background-color: #efe7dd !important;
        padding-top: 2%;
      }
    
      img.rounded-circle {
        border: 5px solid #d3a15e;
        margin-left: 5%;
        margin-top: 10%
      }
    
      p.welcome {
        font-size: 30px;
        border: 4px solid #9b4922;
        border-radius: 7px;
        width: fit-content;
        padding: 0 1% 0 1%;
        margin: 8% 0 0 10%;
      }
    
      div.name-developer.col {
        width: fit-content;
        margin-left: 13%;
      }
    
      p.name {
        font-size: 75px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }
    
      p.developer {
        font-size: 42px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    
      p.about-paragraph {
        font-size: 18px;
        margin: 3% 3% 3% 3% ;
      }
    
      p.lets-connect {
        font-size: 40px;
        font-weight: bold;
        margin: 2% 0 0 25%;
      }
  }
  
  @media screen and (min-width: 721px) and (max-width: 1280px) {
    .about-section {
        color: #9b4922;
        background-color: #efe7dd !important;
        padding-top: 2%;
      }
    
      img.rounded-circle {
        border: 5px solid #d3a15e;
        margin-left: 5%;
        margin-top: 10%
      }
    
      p.welcome {
        font-size: 30px;
        border: 4px solid #9b4922;
        border-radius: 7px;
        width: fit-content;
        padding: 0 1% 0 1%;
        margin: 8% 0 0 10%;
      }
    
      div.name-developer.col {
        width: fit-content;
        margin-left: 13%;
      }
    
      p.name {
        font-size: 75px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }
    
      p.developer {
        font-size: 42px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    
      p.about-paragraph {
        font-size: 18px;
        margin: 3% 3% 3% 3% ;
      }
    
      p.lets-connect {
        font-size: 40px;
        font-weight: bold;
        margin: 2% 0 0 25%;
      }
  }
  
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    .about-section {
        color: #9b4922;
        background-color: #efe7dd !important;
        padding-top: 2%;
      }
    
      img.rounded-circle {
        border: 5px solid #d3a15e;
        margin-left: 5%;
        margin-top: 10%
      }
    
      p.welcome {
        font-size: 30px;
        border: 4px solid #9b4922;
        border-radius: 7px;
        width: fit-content;
        padding: 0 1% 0 1%;
        margin: 8% 0 0 10%;
      }
    
      div.name-developer.col {
        width: fit-content;
        margin-left: 13%;
      }
    
      p.name {
        font-size: 75px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }
    
      p.developer {
        font-size: 42px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    
      p.about-paragraph {
        font-size: 18px;
        margin: 3% 3% 3% 3% ;
      }
    
      p.lets-connect {
        font-size: 40px;
        font-weight: bold;
        margin: 2% 0 0 25%;
      }
  }
  
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    .about-section {
        color: #9b4922;
        background-color: #efe7dd !important;
        padding-top: 2%;
      }
    
      img.rounded-circle {
        border: 5px solid #d3a15e;
        margin-left: 5%;
        margin-top: 10%
      }
    
      p.welcome {
        font-size: 30px;
        border: 4px solid #9b4922;
        border-radius: 7px;
        width: fit-content;
        padding: 0 1% 0 1%;
        margin: 8% 0 0 10%;
      }
    
      div.name-developer.col {
        width: fit-content;
        margin-left: 13%;
      }
    
      p.name {
        font-size: 75px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }
    
      p.developer {
        font-size: 42px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    
      p.about-paragraph {
        font-size: 18px;
        margin: 3% 3% 3% 3% ;
      }
    
      p.lets-connect {
        font-size: 40px;
        font-weight: bold;
        margin: 2% 0 0 25%;
      }
  }
  
  @media screen and (min-width: 1921px) {
    .about-section {
        color: #9b4922;
        background-color: #efe7dd !important;
        padding-top: 2%;
      }
    
      img.rounded-circle {
        border: 5px solid #d3a15e;
        margin-left: 5%;
        margin-top: 10%
      }
    
      p.welcome {
        font-size: 30px;
        border: 4px solid #9b4922;
        border-radius: 7px;
        width: fit-content;
        padding: 0 1% 0 1%;
        margin: 8% 0 0 10%;
      }
    
      div.name-developer.col {
        width: fit-content;
        margin-left: 13%;
      }
    
      p.name {
        font-size: 75px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }
    
      p.developer {
        font-size: 42px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    
      p.about-paragraph {
        font-size: 18px;
        margin: 3% 3% 3% 3% ;
      }
    
      p.lets-connect {
        font-size: 40px;
        font-weight: bold;
        margin: 2% 0 0 25%;
      }
  }
`;

export default About;