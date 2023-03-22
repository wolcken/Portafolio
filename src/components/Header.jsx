import React from 'react';
import '../styles/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-0">
                    <Container fluid>
                        <Navbar.Brand> <NavLink to={'/'}>Wolcken</NavLink> </Navbar.Brand>
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
                                    <NavLink to={'/projects'}>Projects</NavLink>
                                    <NavLink to={'/studies'}>Studies</NavLink>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header
