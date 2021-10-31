import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

import styles from './register.module.css'

export default function Register() {
    return (
        <div>
            <Row>
                <Col className={styles.imageCol} >
                <img src={image2}/>
                </Col>

                <Col className={styles.formCol} >

                <form >
                <img src={image3} className={styles.image3}/>
                <img src={image4} className={styles.image4}/>

                
                <h3>Register</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="name" className="form-control" placeholder="Enter email" />
                </div>

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
