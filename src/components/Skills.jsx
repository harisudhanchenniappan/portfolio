import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
    { name: 'Express.js', icon: faServer, color: '#000000' },
    { name: 'MongoDB', icon: faDatabase, color: '#47A248' },
    { name: 'GitHub', icon: faGithub, color: '#181717' },
    { name: 'Bootstrap', icon: faBootstrap, color: '#7952B3' },
  ];

  return (
    <Container
      id="skills"
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
        Skills
      </h2>
      <Row className="g-4">
        {skills.map((skill, index) => (
          <Col key={index} md={4} sm={6} className="text-center">
            <Card
              className="h-100 border-0 shadow-sm"
              style={{
                backgroundColor: '#1c1c1c',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Card.Body>
                <FontAwesomeIcon
                  icon={skill.icon}
                  size="3x"
                  color={skill.color}
                  style={{
                    marginBottom: '15px',
                    
                  }}
                />
                <Card.Title
                  style={{
                    color: '#f8f9fa',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  {skill.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
