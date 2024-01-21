import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css';
import Headshot from '../assets/images/PortfolioHeadShotBlur.png';
import Arrow from '../assets/images/arrow.jpg'

function About() {
  return (
    <>
      <section className="about-section">
        <Container>
          <Row>
            <Col>
              <p className="welcome">Welcome to my portfolio</p>
            </Col>
          </Row>
          <Row>
            <Col className="name-developer">
              <p className="name">Hi! I'm Kelsey</p>
              <p className="developer">Full-Stack Web Developer</p>
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
              <p className="lets-connect">Let's Connect <Image src={Arrow} alt="right facing arrow" height="50" /></p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;