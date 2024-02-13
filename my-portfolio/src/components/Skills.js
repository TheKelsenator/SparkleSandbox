import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import CodingIcon from '../assets/images/coding(3).png';
// import Arrow from '../assets/images/arrow.jpg';

function Skills() {

  return (
    <>
    <style>{styles}</style>
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

const styles= `
  .skills-section {
    background-color: #efe7dd !important;
    padding-top: 95px;
  }

  p.skills-title {
    display: flex;
    justify-content: center;
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 2%;
  }

  div.skills-card-column.col {
    display: flex;
    justify-content: center;
  }

  div.skills-card.card {
    color: #9b4922;
    background-color: #dedad5;
    border: none;
    border-radius: 10px;
  }

  div.sub-card.card {
    color: #9b4922;
    background-color: #efe7dd;
    border: none;
    margin-bottom: 2%;
  }

  div.card-title.h5 {
    display: flex;
    justify-content: center;
    color: #9b4922;
    font-size: 22px;
    font-weight: bold;
  }

  p.card-text {
    display: flex;
    font-size: 20px;
    font-weight: 400;
  }

  ul.skills-unordered-list {
    list-style: none;
  }

  li.coding-icon {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15%;
    margin-left: 20%
  }

  p.lets-connect {
    color: #9b4922;
    font-size: 40px;
    font-weight: bold;
    margin: 2% 0 0 30%;
  }

  @media screen and (max-width: 400px) {
    .skills-section {
      background-color: #efe7dd !important;
      padding-top: 95px;
    }
    
    p.skills-title {
      display: flex;
      justify-content: center;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    div.skills-card-column.col {
      display: flex;
      justify-content: center;
    }
    
    div.skills-card.card {
      color: #9b4922;
      background-color: #dedad5;
      border: none;
      border-radius: 10px;
    }
    
    div.sub-card.card {
      color: #9b4922;
      background-color: #efe7dd;
      border: none;
      margin-bottom: 2%;
    }
    
    div.card-title.h5 {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 22px;
      font-weight: bold;
    }
    
    p.card-text {
      display: flex;
      font-size: 20px;
      font-weight: 400;
    }
    
    ul.skills-unordered-list {
      list-style: none;
    }
    
    li.coding-icon {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15%;
      margin-left: 20%
    }
    
    p.lets-connect {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 2% 0 0 30%;
    }
  }
  
  @media screen and (min-width: 401px) and (max-width: 720px) {
    .skills-section {
      background-color: #efe7dd !important;
      padding-top: 95px;
    }
    
    p.skills-title {
      display: flex;
      justify-content: center;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    div.skills-card-column.col {
      display: flex;
      justify-content: center;
    }
    
    div.skills-card.card {
      color: #9b4922;
      background-color: #dedad5;
      border: none;
      border-radius: 10px;
    }
    
    div.sub-card.card {
      color: #9b4922;
      background-color: #efe7dd;
      border: none;
      margin-bottom: 2%;
    }
    
    div.card-title.h5 {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 22px;
      font-weight: bold;
    }
    
    p.card-text {
      display: flex;
      font-size: 20px;
      font-weight: 400;
    }
    
    ul.skills-unordered-list {
      list-style: none;
    }
    
    li.coding-icon {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15%;
      margin-left: 20%
    }
    
    p.lets-connect {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 2% 0 0 30%;
    }
  }
  
  @media screen and (min-width: 721px) and (max-width: 1280px) {
    .skills-section {
      background-color: #efe7dd !important;
      padding-top: 95px;
    }
    
    p.skills-title {
      display: flex;
      justify-content: center;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    div.skills-card-column.col {
      display: flex;
      justify-content: center;
    }
    
    div.skills-card.card {
      color: #9b4922;
      background-color: #dedad5;
      border: none;
      border-radius: 10px;
    }
    
    div.sub-card.card {
      color: #9b4922;
      background-color: #efe7dd;
      border: none;
      margin-bottom: 2%;
    }
    
    div.card-title.h5 {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 22px;
      font-weight: bold;
    }
    
    p.card-text {
      display: flex;
      font-size: 20px;
      font-weight: 400;
    }
    
    ul.skills-unordered-list {
      list-style: none;
    }
    
    li.coding-icon {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15%;
      margin-left: 20%
    }
    
    p.lets-connect {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 2% 0 0 30%;
    }
  }
  
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    .skills-section {
      background-color: #efe7dd !important;
      padding-top: 95px;
    }
    
    p.skills-title {
      display: flex;
      justify-content: center;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    div.skills-card-column.col {
      display: flex;
      justify-content: center;
    }
    
    div.skills-card.card {
      color: #9b4922;
      background-color: #dedad5;
      border: none;
      border-radius: 10px;
    }
    
    div.sub-card.card {
      color: #9b4922;
      background-color: #efe7dd;
      border: none;
      margin-bottom: 2%;
    }
    
    div.card-title.h5 {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 22px;
      font-weight: bold;
    }
    
    p.card-text {
      display: flex;
      font-size: 20px;
      font-weight: 400;
    }
    
    ul.skills-unordered-list {
      list-style: none;
    }
    
    li.coding-icon {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15%;
      margin-left: 20%
    }
    
    p.lets-connect {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 2% 0 0 30%;
    }
  }
  
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    .skills-section {
      background-color: #efe7dd !important;
      padding-top: 95px;
    }
    
    p.skills-title {
      display: flex;
      justify-content: center;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    div.skills-card-column.col {
      display: flex;
      justify-content: center;
    }
    
    div.skills-card.card {
      color: #9b4922;
      background-color: #dedad5;
      border: none;
      border-radius: 10px;
    }
    
    div.sub-card.card {
      color: #9b4922;
      background-color: #efe7dd;
      border: none;
      margin-bottom: 2%;
    }
    
    div.card-title.h5 {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 22px;
      font-weight: bold;
    }
    
    p.card-text {
      display: flex;
      font-size: 20px;
      font-weight: 400;
    }
    
    ul.skills-unordered-list {
      list-style: none;
    }
    
    li.coding-icon {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15%;
      margin-left: 20%
    }
    
    p.lets-connect {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 2% 0 0 30%;
    }
  }
  
  @media screen and (min-width: 1921px) {
    .skills-section {
      background-color: #efe7dd !important;
      padding-top: 95px;
    }
    
    p.skills-title {
      display: flex;
      justify-content: center;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    div.skills-card-column.col {
      display: flex;
      justify-content: center;
    }
    
    div.skills-card.card {
      color: #9b4922;
      background-color: #dedad5;
      border: none;
      border-radius: 10px;
    }
    
    div.sub-card.card {
      color: #9b4922;
      background-color: #efe7dd;
      border: none;
      margin-bottom: 2%;
    }
    
    div.card-title.h5 {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 22px;
      font-weight: bold;
    }
    
    p.card-text {
      display: flex;
      font-size: 20px;
      font-weight: 400;
    }
    
    ul.skills-unordered-list {
      list-style: none;
    }
    
    li.coding-icon {
      display: flex;
      justify-content: space-evenly;
      margin-top: 15%;
      margin-left: 20%
    }
    
    p.lets-connect {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 2% 0 0 30%;
    }
  }
`;

export default Skills;
