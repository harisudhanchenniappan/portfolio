import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: '#121212',
        padding: '10px 20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center"
          style={{
            color: '#00d1ff',
            fontWeight: 'bold',
            fontSize: '24px',
            
          }}
        >
          <h1>Hari Sudhan A C</h1>
          
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: '#00d1ff' }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { label: 'Home', href: '#home', onClick: scrollToTop },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#work-experience' },
              { label: 'Education', href: '#education-and-training' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map((item, index) => (
              <Nav.Link
                key={index}
                href={item.href}
                onClick={item.onClick}
                style={{
                  color: '#f8f9fa',
                  fontWeight: 'bold',
                  margin: '0 10px',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = '#00d1ff')
                }
                onMouseOut={(e) => (e.target.style.color = '#f8f9fa')}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
