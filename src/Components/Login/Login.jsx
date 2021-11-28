import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image1 from '../assets/image1.png'
import image3 from '../assets/image3.png'
import styles from './login.module.css'
import { useState } from 'react'


export default function Login() {
  
  const BACKEND_URL = "http://localhost:3020"

    const [user, setUser] = useState({
        email: "",
        password : ""
      })
      const changeData = (id, value) => {
        const newUser = { ...user, [id]: value }
        setUser(newUser)
      }
    
  const getUser = async (e) => {
    e.preventDefault()
    const result = await fetch(
      BACKEND_URL + "/users/login" ,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (result.ok) {
      console.log("Successfully signed in!")
      console.log(result)
    } else {
      console.log("Error with signing in")
    }
  }

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
                    <input type="email" id="email" className="form-control" placeholder="Enter email" onChange={(e) => changeData(e.target.id, e.target.value)}/>
                </div>

                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter password" onChange={(e) => changeData(e.target.id, e.target.value)}/>
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
