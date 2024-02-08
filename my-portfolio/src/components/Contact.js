import '../App.css';
import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactImage from '../assets/images/contact.jpg';

// const styles = `

// `;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xv7cv2f', 
      'template_dyq6x3p', 
      form.current, 
      'ywZGUsn2qOtNtJhJC'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
          form.current.reset();
        }, 
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact-section" id="letsconnect">
        <Container>
          <h2 className="connect">Let's Connect</h2>
          <Row className="contact-container">
            <Col>
              <figure className="position-relative">
                <img src={ContactImage} alt="background-img" className="img-fluid" style={{opacity:.5}} />
                <figcaption>
                  <h2 className="info-name">Kelsey M. O'Kelley</h2>
                    <ul className="unordered-list">
                      <li className="info-li">Location:<Nav.Link href="https://www.google.com/maps/place/Stanley,+ID+83278/@44.2158379,-114.970803,14z/data=!4m6!3m5!1s0x54a8f65559fd639b:0xb9c8c4a2fb0a918b!8m2!3d44.2155392!4d-114.9351998!16zL20vMHMxbHo?entry=ttu">Stanley, ID</Nav.Link></li>
                      <li className="info-li">Email:<br /><Nav.Link href="mailto:km.okelley89@gmail.com">km.okelley89@gmail.com</Nav.Link></li>
                      <li className="info-li">Phone Number:<br /><Nav.Link href="tel:+3854147831">+1 (385) 414-7831</Nav.Link></li> 
                      <li className="info-li"><Nav.Link href="https://www.linkedin.com/in/kelsey-o-kelley-23057a20b/">LinkedIn</Nav.Link></li>
                      <li className="info-li"><Nav.Link href="https://github.com/TheKelsenator">GitHub</Nav.Link></li>
                    </ul>
                </figcaption>
              </figure>
            </Col>
            <Col className="form">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
                </Form.Group>
               <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea"name="message" rows={5} placeholder="Enter your message" required />
                </Form.Group>
                <div className="button-container">
                  <Button variant="primary" type="submit" value="send">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;