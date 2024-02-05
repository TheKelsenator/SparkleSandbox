import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import CodingIcon from '../assets/images/coding(3).png';
// import Arrow from '../assets/images/arrow.jpg';

function Skills() {

  return (
    <>
      <section className="skills-section" id="skills">
        <Container>
          <Card className="skills-card">
            <Card.Body className="card-body">
              <Row>
                <Col>
                    <p className="skills-title">My Skills</p>
                </Col>
              </Row>
              <Row>
                <Col className="skills-card-column">
                  <Card className="sub-card" style={{ width: '18rem' }}>
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">Frontend Development</Card.Title>
                      <Card.Text className="card-text">
                        <ul className="skills-unordered-list">
                          <li>- HTML</li>
                          <li>- Advanced CSS</li>
                          <li>- JavaScript</li>
                          <li>- jQuery</li>
                          <li>- React.js</li>
                          <li>- Progressive Web Application</li>
                          <li>- State Management</li>
                          <li>- MVC (Model View Controller)</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>    
                <Col className="skills-card-column">
                  <Card className="sub-card" style={{ width: '18rem' }}>
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">Backend Development</Card.Title>
                      <Card.Text className="card-text">
                        <ul className="skills-unordered-list">
                          <li>- Node.js</li>
                          <li>- Express.js</li>
                          <li>- Web API's</li>
                          <li>- Third-Party API's</li>
                          <li>- Server-Side API's</li>
                          <li className="coding-icon"><img src={CodingIcon} alt="coding icon" width="120"></img></li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> 
                <Col className="skills-card-column">
                  <Card className="sub-card" style={{ width: '18rem' }}>
                    <Card.Body className="card-body">
                    <Card.Title className="card-title">Databases</Card.Title>
                      <Card.Text className="card-text">
                        <ul className="skills-unordered-list">
                          <li>- MySQL</li>
                          <li>- MongoDB</li>
                          <li>- NoSQL</li>
                          <li>- Object-Relational Mapping</li>
                        </ul>
                      </Card.Text>
                      <Card.Title className="card-title">Version Control & Tools</Card.Title>
                      <Card.Text className="card-text">
                        <ul className="skills-unordered-list">
                          <li>- Git</li>
                          <li>- Insomnia</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> 
                <Col className="skills-card-column">
                  <Card className="sub-card" style={{ width: '18rem' }}>
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">Soft Skills</Card.Title>
                      <Card.Text className="card-text">
                        <ul className="skills-unordered-list">
                          <li>- Effective Communication</li>
                          <li>- Team Collabroation</li>
                          <li>- Problem-Solving</li>
                          <li>- Organization</li>
                          <li>- Adaptability</li>
                          <li>- Time Management</li>
                          <li>- Reliability</li>
                          <li>- Attention to Detail</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> 
              </Row>
            </Card.Body>
          </Card>
          {/* <Row>
            <Col>
              <p className="lets-connect">View Full Resume <Image src={Arrow} alt="right facing arrow" height="50" /></p>
            </Col>
          </Row> */}
        </Container>    
      </section>
    </>
  );
}

export default Skills;
