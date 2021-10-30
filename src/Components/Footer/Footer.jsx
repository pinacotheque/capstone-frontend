import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from './footer.module.css'


export default function Footer() {
    return (
    <Nav className={styles.footer}>
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link >Link</Nav.Link>
            <Nav.Link >Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link >
            Disabled
            </Nav.Link>
        </Nav.Item>
    </Nav>
    )
}
