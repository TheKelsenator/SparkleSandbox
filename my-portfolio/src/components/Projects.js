import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import PlaceholderImage from '../assets/images/image-placeholder.jpg';
import JavaScriptQuiz from '../assets/images/CodingQuizScreenshot.png';
import WeatherDashboard from '../assets/images/ServerSideWeatherDashboardScreenshot.png';
import NoteTaker from '../assets/images/ExpressjsNoteTakerScreenshot.png';

function Projects() {
  return (
    <>  
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
                      <p>A weather dashboard that will run in the browswer
                      and feature dynamically updated HTML and CSS.
                      </p>
                    </div>
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
                        A note taker app that can create, 
                        store and delete notes.
                      </p>
                    </div>
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

export default Projects;