import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const EducationAndTraining = () => {
  return (
    <Container
      id="education-and-training"
      className="my-5 py-4"
      style={{
        backgroundColor: '#121212',
        color: '#f8f9fa',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h2
        className="text-center mb-5"
        style={{
          color: '#00d1ff',
          fontSize: '36px',
          fontWeight: 'bold',
          
        }}
      >
        Education and Training
      </h2>
      <Row className="g-4">
        {/* Full Stack Development Certification */}
        <Col md={6}>
          <Card
            style={{
              backgroundColor: '#1c1c1c',
              color: '#f8f9fa',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  color: '#00d1ff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                [ 2024 ] Full Stack Development Certification
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '16px' }}>
                GUVI (Grab Ur Vernacular Imprint)
              </Card.Subtitle>
              <Card.Text style={{ fontSize: '16px', lineHeight: '1.8' }}>
                An online learning platform offering courses in IT and computer programming in Indian languages. 
                This intensive program focused on:
                <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                  <li>Modern web technologies</li>
                  <li>Best practices in full-stack development</li>
                  <li>Real-world application development</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* B.E. Mechanical Engineering */}
        <Col md={6}>
          <Card
            style={{
              backgroundColor: '#1c1c1c',
              color: '#f8f9fa',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  color: '#00d1ff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                [ 2018 - 2022 ] B.E. Mechanical Engineering
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '16px' }}>
                College of Engineering, Guindy - Chennai, India
              </Card.Subtitle>
              <Card.Text style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <strong>CGPA:</strong> 8.02
                <br />
                Gained a wide knowledge of:
                <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                  <li>Engineering Management</li>
                  <li>Entrepreneurship Development</li>
                  <li>Engineering Graphics</li>
                  <li>Programming</li>
                  <li>Mechanical Concepts</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* High School - Class 12 */}
        <Col md={6}>
          <Card
            style={{
              backgroundColor: '#1c1c1c',
              color: '#f8f9fa',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  color: '#00d1ff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                [ 2017 – 2018 ] High School - Class 12
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '16px' }}>
                Bharathi Vidya Bhavan HSC - Erode, India
              </Card.Subtitle>
              <Card.Text style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <strong>State Board Examination:</strong> 1165/1200 (97%)
                <br />
                Exceptional performance in:
                <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Computer Science</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Middle School - Class 10 */}
        <Col md={6}>
          <Card
            style={{
              backgroundColor: '#1c1c1c',
              color: '#f8f9fa',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  color: '#00d1ff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                [ 2015 – 2016 ] Middle School - Class 10
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '16px' }}>
                The BVB CBSE School - Erode, India
              </Card.Subtitle>
              <Card.Text style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <strong>CBSE Board Examination:</strong> 10 CGPA
                <br />
                Demonstrated strong academic performance with a focus on key foundational subjects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationAndTraining;
