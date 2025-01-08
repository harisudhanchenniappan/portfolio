import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa'; // Import the Font Awesome download icon
import logo from '../assets/logo2.jpeg';
import resume from '../assets/Resume_Hari (1).pdf';

const AboutUs = () => {
  return (
    <Container
      id="about"
      className="my-5"
      style={{
        backgroundColor: '#000', // Set the background to black
        padding: '50px 20px',
        borderRadius: '8px',
        color: '#fff', // Change text color to white
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add subtle shadow for depth
      }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        {/* Image Column */}
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={logo}
            alt="GV Plots Logo"
            width="220"
            height="270"
            style={{
              borderRadius: '50%',
             
            }}
          />
        </Col>

        {/* Content Column */}
        <Col md={8}>
          <h2
            className="mb-4"
            style={{
              color: '#00d1ff', // Accent color for the heading
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            About Me
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
            Dynamic and adaptable Full Stack Developer with a background in Mechanical Engineering
            from Anna University, Chennai. I bring strong communication skills, creativity, and a
            drive for continuous learning to every project. Skilled in both frontend and backend
            development, with hands-on experience in JavaScript, React.js, and Node.js, alongside
            foundational expertise in HTML, CSS, and various digital tools. I am passionate about
            leveraging my technical and team-oriented skills to create impactful solutions in a
            collaborative environment.
          </p>

          <h4 style={{ color: '#00d1ff', fontWeight: 'bold' }}>Personal Information</h4>
          <ul
            style={{
              listStyleType: 'none',
              paddingLeft: '0',
              fontSize: '18px',
              lineHeight: '1.8',
            }}
          >
            <li>
              <strong>Gender:</strong> Male
            </li>
            <li>
              <strong>Date of Birth:</strong> 16/11/2000
            </li>
            <li>
              <strong>Nationality:</strong> Indian
            </li>
          </ul>
          <a href={resume} download="Resume_Hari (1).pdf">
            <Button
              variant="primary"
              className="mt-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: '#00d1ff',
                border: 'none',
                color: '#000',
                fontWeight: 'bold',
                padding: '10px 20px',
              }}
            >
              <FaDownload className="me-2" />
              Download Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
