import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import styles from './nav.module.css'

export default function NavBar() {
    return (
    <>
    <Navbar variant="light" className={styles.nav}>
        <Container>
        <Navbar.Brand href="#home">TeamUp</Navbar.Brand>
        <Nav>
        <Nav.Link href="#home">Sign up</Nav.Link>
        <Nav.Link href="#features">Log in</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        </Container>
    </Navbar>

    </>
    )
}
