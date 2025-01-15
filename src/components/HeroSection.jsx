import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import a1 from '../assets/aa1.png';
import a2 from '../assets/aa2.png';
import a3 from '../assets/aa3.png';
import a4 from '../assets/aa4.png';
import a5 from '../assets/aa5.png';

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#121212', color: '#f8f9fa', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Title Section */}
      <Container id="projects" fluid className="text-center py-5" style={{ backgroundColor: '#1c1c1c' }}>
        <Row>
          <Col>
            <h1 style={{ color: '#00d1ff', fontWeight: 'bold', fontSize: '40px' }}>My Projects</h1>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="my-5">
        <Row className="g-4">
          {/* Project 1 */}
          <Col lg={4} md={6} sm={12}>
            <Card style={{ backgroundColor: '#1c1c1c', color: '#f8f9fa' }} className="h-100">
              <Card.Img variant="top" src={a1} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ color: '#00d1ff', fontWeight: 'bold' }}>Wedding Planner Website</Card.Title>
                <Card.Text>
                  Developed a wedding planner web application to manage venues, guest lists, and vendor coordination.
                  Features include user authentication and dynamic event calendars.
                </Card.Text>
                <a href="https://weddingwise009.netlify.app/" className="btn btn-outline-primary me-2"
                target="_blank"
                rel="noopener noreferrer">
                  View Project
                </a>
                <a href="https://github.com/harisudhanchenniappan/wedding-planner" className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer">
                  View Source Code
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 2 */}
          <Col lg={4} md={6} sm={12}>
            <Card style={{ backgroundColor: '#1c1c1c', color: '#f8f9fa' }} className="h-100">
              <Card.Img variant="top" src={a2} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ color: '#00d1ff', fontWeight: 'bold' }}>Google Forms Clone</Card.Title>
                <Card.Text>
                  Built a Google Forms-inspired application for creating, customizing, and analyzing surveys. Included
                  real-time previews, multiple question types, and analytics dashboards.
                </Card.Text>
                <a href="https://reactforms1611.netlify.app/" className="btn btn-outline-primary me-2"
                target="_blank"
                rel="noopener noreferrer">
                  View Project
                </a>
                <a href="https://github.com/harisudhanchenniappan/react-forms" className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer">
                  View Source Code
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 3 */}
          <Col lg={4} md={6} sm={12}>
            <Card style={{ backgroundColor: '#1c1c1c', color: '#f8f9fa' }} className="h-100">
              <Card.Img variant="top" src={a3} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ color: '#00d1ff', fontWeight: 'bold' }}>Billing Web App</Card.Title>
                <Card.Text>
                  Developed a billing application for small businesses to efficiently manage and generate invoices. It
                  simplifies the billing process with real-time updates and easy access to past invoices.
                </Card.Text>
                <a href="https://react-billing-1611.netlify.app/" className="btn btn-outline-primary me-2"
                target="_blank"
                rel="noopener noreferrer">
                  View Project
                </a>
                <a href="https://github.com/harisudhanchenniappan/react-billing" className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer">
                  View Source Code
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 4 */}
          <Col lg={4} md={6} sm={12}>
            <Card style={{ backgroundColor: '#1c1c1c', color: '#f8f9fa' }} className="h-100">
              <Card.Img variant="top" src={a4} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ color: '#00d1ff', fontWeight: 'bold' }}>E-Commerce Bookstore Website</Card.Title>
                <Card.Text>
                  Developed an e-commerce platform for an online bookstore, offering a smooth, user-friendly browsing
                  experience and efficient shopping cart functionality.
                </Card.Text>
                <a href="https://bookhaven1611.netlify.app/" className="btn btn-outline-primary me-2"
                target="_blank"
                rel="noopener noreferrer">
                  View Project
                </a>
                <a href="https://github.com/harisudhanchenniappan/e-commerce" className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer">
                  View Source Code
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 5 */}
          <Col lg={4} md={6} sm={12}>
            <Card style={{ backgroundColor: '#1c1c1c', color: '#f8f9fa' }} className="h-100">
              <Card.Img variant="top" src={a5} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ color: '#00d1ff', fontWeight: 'bold' }}>Real Estate Website</Card.Title>
                <Card.Text>
                  Developed a real estate website to showcase plots and homes with an interactive layout and detailed
                  property descriptions.
                </Card.Text>
                <a href="https://gvplotsandhomes.netlify.app/" className="btn btn-outline-primary me-2"
                target="_blank"
                rel="noopener noreferrer">
                  View Project
                </a>
                <a href="https://github.com/harisudhanchenniappan/GV-Plots" className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer">
                  View Source Code
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
