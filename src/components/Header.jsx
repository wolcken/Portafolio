import React from 'react';
import '../styles/header.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-0">
                    <Container fluid>
                        <Navbar.Brand href="/">Wolcken</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="top"
                        >
                            <Offcanvas.Header closeButton closeVariant='white'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link> <NavLink to={'/'}>Home</NavLink> </Nav.Link>
                                    <Nav.Link> <NavLink to={'/projects'}>Projects</NavLink> </Nav.Link>
                                    <NavDropdown
                                        title="About"
                                        drop='start'
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item> <NavLink to={'/contact'}>Contact</NavLink> </NavDropdown.Item>
                                        <NavDropdown.Item disabled> <NavLink to={'/hobbies'}>Hobbies</NavLink> </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item >
                                            <NavLink to={'/studies'}>Studies</NavLink>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-secondary">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header
