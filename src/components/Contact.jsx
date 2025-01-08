import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center mb-4" style={{ color: '#0056b3' }}>Contact Me</h2>
      <Row className="text-center d-flex align-items-center justify-content-center">
        {/* Email */}
        <Col md={3} className="mb-3">
          <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#0056b3' }} />
          <p>
            <a href="mailto:harisudhanchenniappan@gmail.com" style={{ textDecoration: 'none', color: '#000' }}>
              harisudhanchenniappan@gmail.com
            </a>
          </p>
        </Col>

        {/* Phone */}
        <Col md={3} className="mb-3">
          <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#0056b3' }} />
          <p>
            <a href="tel:+7339459340" style={{ textDecoration: 'none', color: '#000' }}>
              (+91) 73394-59340 / 76395-49340
            </a>
          </p>
        </Col>

        {/* LinkedIn */}
        <Col md={3} className="mb-3">
          <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0A66C2' }} />
          <p>
            <a
              href="https://www.linkedin.com/in/hari-sudhan-chenniappan-a50127236/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              linkedin.com
            </a>
          </p>
        </Col>

        {/* GitHub */}
        <Col md={3} className="mb-3">
          <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#181717' }} />
          <p>
            <a
              href="https://github.com/harisudhanchenniappan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              github.com/harisudhanchenniappan
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
