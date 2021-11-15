import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image1 from '../assets/image1.png'
import { useState } from 'react'

import styles from './register.module.css'

export default function Register() {

    const [user, setUser] = useState({
        username : "",
        name : "",
        email: "",
        password : ""
      })
    
      const changeData = (id, value) => {
        const newUser = { ...user, [id]: value }
        setUser(newUser)
      }
    
  const postUser = async (e) => {
    e.preventDefault()
    const result = await fetch(
      "http://localhost:3020/users/register" ,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (result.ok) {
      console.log("successfully posted user")
      console.log(result)
      setUser()
    } else {
      console.log("error with posting user")
    }
  }
    return (
        <div>
            <Row className={styles.mainRow}>
                <Col className={styles.imageCol} >
                <img src={image1}/>
                </Col>
                <Col className={styles.formCol} >
                <form onSubmit={(e) => postUser(e)}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" id="username" className="form-control" placeholder="Enter email" onChange={(e) => changeData(e.target.id, e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Name Surname</label>
                    <input type="name" id="name" className="form-control" placeholder="Enter email" onChange={(e) => changeData(e.target.id, e.target.value)}/>
                </div>
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
