import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import PlaceholderImage from '../assets/images/image-placeholder.jpg';
import MyMenu from '../assets/images/MyMenuScreenshot.png';
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
                      src={MyMenu}
                      alt="First slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <div className="carousel-caption">
                      <h5>My Menu Recipe Saver</h5>
                      <p>A searchable site to help you find and save meals specific to your preferences, 
                        allergies, number of calories and/or your specific dietetary needs. Nutritional 
                        information, helping you utilize food for growth, health and medicine. 
                      </p>
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