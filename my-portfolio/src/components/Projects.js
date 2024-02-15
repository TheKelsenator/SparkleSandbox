import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import JavaScriptQuiz from '../assets/images/CodingQuizScreenshot.png';
import WeatherDashboard from '../assets/images/WeatherDashboardScreenShot.png';
import NoteTaker from '../assets/images/ExpressjsNoteTakerScreenshot.png';

function Projects() {
  return (
    <>  
    <style>{styles}</style>
      <section className="projects-section" id="projects">
        <Container className="projects-container">
          <Row>
            <Col>
              <p className="projects-title">My Projects</p>
            </Col> 
          </Row>
          <Row>
            <Col>
              <Carousel className="projects-carousel" fade>
                <Carousel.Item>
                  <div className="carousel-image">
                    <img
                      className="image"
                      style={{height: 350}}
                      src={JavaScriptQuiz}
                      alt="First slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className="carousel-caption">
                      <h5>Web API Coding Quiz</h5>
                      <p>Welcome to the Web API Quiz! This interactive quiz is designed for 
                        coding and web development students to test their knowledge in a fun
                        and engaging way. With 10 thought-provoking questions, test your knowledge
                        against the clock. This quiz is timed to subtract 10 seconds for every
                        wrong answer, adding an extra layer of excitement and challenge! This quiz 
                        will keep track of your high scores, but if you think you can do better 
                        you can always go back and retake the quiz to improve your score and climb 
                        up the leaderboard.</p>
                    </div>
                    <Button variant="light" href="https://thekelsenator.github.io/Web-API-Quiz-04/" className="quizButton">Take Quiz</Button>
                    <Button variant="light" href="https://github.com/TheKelsenator/Web-API-Quiz-04" className="quizButton">Github Repo</Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-image">
                    <img
                      className="image"
                      style={{height: 350}}
                      src={WeatherDashboard}
                      alt="Second slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className="carousel-caption">
                      <h5>Weather Dashboard</h5>
                      <p>My Weather Dashboard project delivers real-time weather forecasts for cities 
                        worldwide. Developed as part of a Server-Side APIs challenge, this web application 
                        offers user-friendly navigation, dynamic updates, and search history. It empowers 
                        users to make informed decisions and stay ahead of changing weather conditions. 
                        Explore the project for accurate and up-to-date weather forecasts, and plan your 
                        next adventure confidently.
                      </p>
                    </div>
                    <Button variant="light" href="https://thekelsenator.github.io/Server-Side-API-Weather-Dashboard-06/" className="quizButton">Get Forecast</Button>
                    <Button variant="light" href="https://github.com/TheKelsenator/Server-Side-API-Weather-Dashboard-06" className="quizButton">Github Repo</Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-image">
                    <img
                      className="image"
                      style={{height: 350}}
                      src={NoteTaker}
                      alt="Third slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className="carousel-caption">
                      <h5>Express.js Note Taker</h5>
                      <p>
                      The Note Taker App is a simple yet powerful tool for creating, storing, and managing 
                      notes. Users can easily create new notes, view existing ones, and delete notes they 
                      no longer need. The app utilizes a JSON database to ensure data persistence and 
                      accessibility across sessions. With its user-friendly design and practical functionality, 
                      the Express.js Note Taker App streamlines the process of note-taking for users.
                      </p>
                    </div>
                    <Button variant="light" href="https://express-note-taker-kelsenator-5c092f71d434.herokuapp.com/" className="quizButton">Take Notes</Button>
                    <Button variant="light" href="https://github.com/TheKelsenator/Express.js-Note-Taker-11" className="quizButton">Github Repo</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

const styles= `
  .projects-section {
    background-color: #efe7dd !important;
    justify-content: space-evenly;
    padding-top: 80px;
  }

  div.project-card.card {
    background-color: #d8a790;
    border: 2px solid #9b4922;
    border-radius: 8px;
  }

  p.projects-title {
    display: flex;
    justify-content: center;
    color: #9b4922;
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 2%;
  }

  img.project-img {
    display: flex;
    justify-content: center;
    border-radius: 20px;
    padding: 5%;
  }

  div.project-description.mb-2.text-muted {
    display: flex;
    justify-content: center;
    color: #9b4922 !important;
    font-size: 20px;
    font-weight: 400;
  }

  a.link-line {
    display: flex;
    justify-content: center;
    font-size: 18px;
  }

  p.view-all-projects {
    color: #9b4922;
    font-size: 40px;
    font-weight: bold;
    margin: 3% 0 0 30%;
  }

  div.projects-container.container{
    background-color: #e4dbd7;
    border: none;
    border-radius: 10px;
    padding-bottom: 2%;
  }

  div.projects-carousel.carousel.slide.carousel-fade {
    display: flex;
    padding: 1%
  }

  div.active.carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1% 0 3% 0;
  }

  img.image {
    display: flex;
    border-radius: 8px;
  }

  div.carousel-image {
    display: flex;
    margin-right: 3%;
    border-radius: 8px;
    margin-left: 10%;
  }

  div.carousel-caption {
    position: static;
    color: #9b4922;
    margin-right: 7%;
  }

  a.quizButton.btn.btn-light {
    color: #9b4922;
    background-color: #d3d4d5;
    border: 1px solid #949495;
    margin: 0 2% 0 2%;
  }

  @media screen and (max-width: 400px) {
    .projects-section {
      background-color: #efe7dd !important;
      justify-content: space-evenly;
      padding-top: 80px;
    }
    
    div.project-card.card {
      background-color: #d8a790;
      border: 2px solid #9b4922;
      border-radius: 8px;
    }
    
    p.projects-title {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    img.project-img {
      display: flex;
      justify-content: center;
      border-radius: 20px;
      padding: 5%;
    }
    
    div.project-description.mb-2.text-muted {
      display: flex;
      justify-content: center;
      color: #9b4922 !important;
      font-size: 20px;
      font-weight: 400;
    }
    
    a.link-line {
      display: flex;
      justify-content: center;
      font-size: 18px;
    }
    
    p.view-all-projects {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 3% 0 0 30%;
    }
    
    div.projects-container.container{
      background-color: #e4dbd7;
      border: none;
      border-radius: 10px;
      padding-bottom: 2%;
    }
    
    div.projects-carousel.carousel.slide.carousel-fade {
      display: flex;
      padding: 1%
    }
    
    div.active.carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1% 0 3% 0;
    }
    
    img.image {
      display: flex;
      border-radius: 8px;
    }
    
    div.carousel-image {
      display: flex;
      margin-right: 3%;
      border-radius: 8px;
      margin-left: 10%;
    }
    
    div.carousel-caption {
      position: static;
      color: #9b4922;
      margin-right: 7%;
    }
    
    a.quizButton.btn.btn-light {
      color: #9b4922;
      background-color: #d3d4d5;
      border: 1px solid #949495;
      margin: 0 2% 0 2%;
    }
  }
  
  @media screen and (min-width: 401px) and (max-width: 720px) {
    .projects-section {
      background-color: #efe7dd !important;
      justify-content: space-evenly;
      padding-top: 80px;
    }
    
    div.project-card.card {
      background-color: #d8a790;
      border: 2px solid #9b4922;
      border-radius: 8px;
    }
    
    p.projects-title {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    img.project-img {
      display: flex;
      justify-content: center;
      border-radius: 20px;
      padding: 5%;
    }
    
    div.project-description.mb-2.text-muted {
      display: flex;
      justify-content: center;
      color: #9b4922 !important;
      font-size: 20px;
      font-weight: 400;
    }
    
    a.link-line {
      display: flex;
      justify-content: center;
      font-size: 18px;
    }
    
    p.view-all-projects {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 3% 0 0 30%;
    }
    
    div.projects-container.container{
      background-color: #e4dbd7;
      border: none;
      border-radius: 10px;
      padding-bottom: 2%;
    }
    
    div.projects-carousel.carousel.slide.carousel-fade {
      display: flex;
      padding: 1%
    }
    
    div.active.carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1% 0 3% 0;
    }
    
    img.image {
      display: flex;
      border-radius: 8px;
    }
    
    div.carousel-image {
      display: flex;
      margin-right: 3%;
      border-radius: 8px;
      margin-left: 10%;
    }
    
    div.carousel-caption {
      position: static;
      color: #9b4922;
      margin-right: 7%;
    }
    
    a.quizButton.btn.btn-light {
      color: #9b4922;
      background-color: #d3d4d5;
      border: 1px solid #949495;
      margin: 0 2% 0 2%;
    }
  }
  
  @media screen and (min-width: 721px) and (max-width: 1280px) {
    .projects-section {
      background-color: #efe7dd !important;
      justify-content: space-evenly;
      padding-top: 80px;
    }
    
    div.project-card.card {
      background-color: #d8a790;
      border: 2px solid #9b4922;
      border-radius: 8px;
    }
    
    p.projects-title {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    img.project-img {
      display: flex;
      justify-content: center;
      border-radius: 20px;
      padding: 5%;
    }
    
    div.project-description.mb-2.text-muted {
      display: flex;
      justify-content: center;
      color: #9b4922 !important;
      font-size: 20px;
      font-weight: 400;
    }
    
    a.link-line {
      display: flex;
      justify-content: center;
      font-size: 18px;
    }
    
    p.view-all-projects {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 3% 0 0 30%;
    }
    
    div.projects-container.container{
      background-color: #e4dbd7;
      border: none;
      border-radius: 10px;
      padding-bottom: 2%;
    }
    
    div.projects-carousel.carousel.slide.carousel-fade {
      display: flex;
      padding: 1%
    }
    
    div.active.carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1% 0 3% 0;
    }
    
    img.image {
      display: flex;
      border-radius: 8px;
    }
    
    div.carousel-image {
      display: flex;
      margin-right: 3%;
      border-radius: 8px;
      margin-left: 10%;
    }
    
    div.carousel-caption {
      position: static;
      color: #9b4922;
      margin-right: 7%;
    }
    
    a.quizButton.btn.btn-light {
      color: #9b4922;
      background-color: #d3d4d5;
      border: 1px solid #949495;
      margin: 0 2% 0 2%;
    }
  }
  
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    .projects-section {
      background-color: #efe7dd !important;
      justify-content: space-evenly;
      padding-top: 80px;
    }
    
    div.project-card.card {
      background-color: #d8a790;
      border: 2px solid #9b4922;
      border-radius: 8px;
    }
    
    p.projects-title {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    img.project-img {
      display: flex;
      justify-content: center;
      border-radius: 20px;
      padding: 5%;
    }
    
    div.project-description.mb-2.text-muted {
      display: flex;
      justify-content: center;
      color: #9b4922 !important;
      font-size: 20px;
      font-weight: 400;
    }
    
    a.link-line {
      display: flex;
      justify-content: center;
      font-size: 18px;
    }
    
    p.view-all-projects {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 3% 0 0 30%;
    }
    
    div.projects-container.container{
      background-color: #e4dbd7;
      border: none;
      border-radius: 10px;
      padding-bottom: 2%;
    }
    
    div.projects-carousel.carousel.slide.carousel-fade {
      display: flex;
      padding: 1%
    }
    
    div.active.carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1% 0 3% 0;
    }
    
    img.image {
      display: flex;
      border-radius: 8px;
    }
    
    div.carousel-image {
      display: flex;
      margin-right: 3%;
      border-radius: 8px;
      margin-left: 10%;
    }
    
    div.carousel-caption {
      position: static;
      color: #9b4922;
      margin-right: 7%;
    }
    
    a.quizButton.btn.btn-light {
      color: #9b4922;
      background-color: #d3d4d5;
      border: 1px solid #949495;
      margin: 0 2% 0 2%;
    }
  }
  
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    .projects-section {
      background-color: #efe7dd !important;
      justify-content: space-evenly;
      padding-top: 80px;
    }
    
    div.project-card.card {
      background-color: #d8a790;
      border: 2px solid #9b4922;
      border-radius: 8px;
    }
    
    p.projects-title {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    img.project-img {
      display: flex;
      justify-content: center;
      border-radius: 20px;
      padding: 5%;
    }
    
    div.project-description.mb-2.text-muted {
      display: flex;
      justify-content: center;
      color: #9b4922 !important;
      font-size: 20px;
      font-weight: 400;
    }
    
    a.link-line {
      display: flex;
      justify-content: center;
      font-size: 18px;
    }
    
    p.view-all-projects {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 3% 0 0 30%;
    }
    
    div.projects-container.container{
      background-color: #e4dbd7;
      border: none;
      border-radius: 10px;
      padding-bottom: 2%;
    }
    
    div.projects-carousel.carousel.slide.carousel-fade {
      display: flex;
      padding: 1%
    }
    
    div.active.carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1% 0 3% 0;
    }
    
    img.image {
      display: flex;
      border-radius: 8px;
    }
    
    div.carousel-image {
      display: flex;
      margin-right: 3%;
      border-radius: 8px;
      margin-left: 10%;
    }
    
    div.carousel-caption {
      position: static;
      color: #9b4922;
      margin-right: 7%;
    }
    
    a.quizButton.btn.btn-light {
      color: #9b4922;
      background-color: #d3d4d5;
      border: 1px solid #949495;
      margin: 0 2% 0 2%;
    }
  }
  
  @media screen and (min-width: 1921px) {
    .projects-section {
      background-color: #efe7dd !important;
      justify-content: space-evenly;
      padding-top: 80px;
    }
    
    div.project-card.card {
      background-color: #d8a790;
      border: 2px solid #9b4922;
      border-radius: 8px;
    }
    
    p.projects-title {
      display: flex;
      justify-content: center;
      color: #9b4922;
      font-size: 70px;
      font-weight: bold;
      margin-bottom: 2%;
    }
    
    img.project-img {
      display: flex;
      justify-content: center;
      border-radius: 20px;
      padding: 5%;
    }
    
    div.project-description.mb-2.text-muted {
      display: flex;
      justify-content: center;
      color: #9b4922 !important;
      font-size: 20px;
      font-weight: 400;
    }
    
    a.link-line {
      display: flex;
      justify-content: center;
      font-size: 18px;
    }
    
    p.view-all-projects {
      color: #9b4922;
      font-size: 40px;
      font-weight: bold;
      margin: 3% 0 0 30%;
    }
    
    div.projects-container.container{
      background-color: #e4dbd7;
      border: none;
      border-radius: 10px;
      padding-bottom: 2%;
    }
    
    div.projects-carousel.carousel.slide.carousel-fade {
      display: flex;
      padding: 1%
    }
    
    div.active.carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1% 0 3% 0;
    }
    
    img.image {
      display: flex;
      border-radius: 8px;
    }
    
    div.carousel-image {
      display: flex;
      margin-right: 3%;
      border-radius: 8px;
      margin-left: 10%;
    }
    
    div.carousel-caption {
      position: static;
      color: #9b4922;
      margin-right: 7%;
    }
    
    a.quizButton.btn.btn-light {
      color: #9b4922;
      background-color: #d3d4d5;
      border: 1px solid #949495;
      margin: 0 2% 0 2%;
    }
  }
`;

export default Projects;