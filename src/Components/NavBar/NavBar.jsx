import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import styles from './nav.module.css'
import fulteam from '../assets/fulteam.svg'

export default function NavBar() {
    return (
    <>
    <Navbar variant="light" className={styles.nav}>
        <Container>
        <Navbar.Brand href="/home"><img src={fulteam} alt="logo" style={{width:'140px',}} /> </Navbar.Brand>
        <Nav className={styles.links}>
        <Nav.Link href="/register" className={styles.links}>Sign up</Nav.Link>
        <Nav.Link href="/login" className={styles.links}>Log in</Nav.Link>
        <Nav.Link href="#pricing" className={styles.links}>About</Nav.Link>
        </Nav>
        </Container>
    </Navbar>

    </>
    )
}
