import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceHolderImage from '../assets/images/image-placeholder.avif';
// import Arrow from '../assets/images/arrow.jpg';
import '../App.css';

function Projects() {

  return (
    <>
      <section className="projects-section" id="projects">
        <Container>
          <Row>
            <Col>
              <p className="projects-title">My Projects</p>
            </Col> 
          </Row>
          <Row>
            <Col>
              <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Subtitle className="project-description mb-2 text-muted">Short Project Description</Card.Subtitle>
                    <Image className="project-img" src={PlaceHolderImage} alt="place holder" height="250" />
                  <a className="link-line">
                    <Card.Link className="link" href="#">Project Link</Card.Link>
                    <Card.Link className="link" href="#">Github Link</Card.Link>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Subtitle className="project-description mb-2 text-muted">Short Project Description</Card.Subtitle>
                    <Image className="project-img" src={PlaceHolderImage} alt="place holder" height="250" />
                  <a className="link-line">
                    <Card.Link className="link" href="#">Project Link</Card.Link>
                    <Card.Link className="link" href="#">Github Link</Card.Link>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Subtitle className="project-description mb-2 text-muted">Short Project Description</Card.Subtitle>
                    <Image className="project-img" src={PlaceHolderImage} alt="place holder" height="250" />
                  <a className="link-line">
                    <Card.Link className="link" href="#">Project Link</Card.Link>
                    <Card.Link className="link" href="#">Github Link</Card.Link>
                  </a>  
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Subtitle className="project-description mb-2 text-muted">COMING SOON.....</Card.Subtitle>
                    <Image className="project-img" src={PlaceHolderImage} alt="place holder" height="250" />
                  <a className="link-line">
                    <Card.Link className="link" href="#">Project Link</Card.Link>
                    <Card.Link className="link" href="#">Github Link</Card.Link>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            {/* <Row>
            <Col>
              <p className="view-all-projects">View All Projects <Image src={Arrow} alt="right facing arrow" height="50" /></p>
            </Col>
          </Row> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;