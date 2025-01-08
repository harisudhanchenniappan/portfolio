import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WorkExperience = () => {
  return (
    <Container
      id="work-experience"
      className="my-5 py-4"
      style={{ backgroundColor: '#121212', color: '#f8f9fa', borderRadius: '8px', padding: '40px' }}
    >
      <h2
        className="text-center mb-5"
        style={{
          color: '#00d1ff',
          fontSize: '36px',
          fontWeight: 'bold',
          
        }}
      >
        Work Experience
      </h2>

      {/* AI Model Trainer - OutlierAI */}
      <Row className="mb-4">
        <Col md={12}>
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
                  fontSize: '24px',
                  fontWeight: 'bold',
                  
                }}
              >
                AI Model Trainer
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '16px' }}>
                OutlierAI | July 2024 - Present
              </Card.Subtitle>
              <Card.Text>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', fontSize: '18px', lineHeight: '1.8' }}>
                  <li>Designed, trained, and optimized machine learning models to improve predictive accuracy and performance.</li>
                  <li>Processed and labelled large datasets to ensure high-quality training inputs for AI models.</li>
                  <li>Conducted regular performance evaluations and implemented improvements to enhance model outcomes.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Freelance Web Developer */}
      <Row>
        <Col md={12}>
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
                  fontSize: '24px',
                  fontWeight: 'bold',
                  
                }}
              >
                Freelance Web Developer
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '16px' }}>
                November 2024 - Present
              </Card.Subtitle>
              <Card.Text>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', fontSize: '18px', lineHeight: '1.8' }}>
                  <li>Developing and maintaining websites using modern web technologies like React, Node.js, and Express.js.</li>
                  <li>Collaborating with clients to gather requirements and deliver tailored web applications.</li>
                  <li>Ensuring cross-browser compatibility and optimizing website performance for enhanced user experience.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkExperience;
