import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image1 from '../assets/image1.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

import styles from './login.module.css'

export default function Login() {
    return (
        <div>
            <Row>
                <Col className={styles.imageCol} >
                <img src={image1}/>
                </Col>

                <Col className={styles.formCol} >

                <form >

                
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                    </div>
                </div>

                <button type="submit" className={styles.button}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
                </Col>
            </Row>
        </div>
    )
}
