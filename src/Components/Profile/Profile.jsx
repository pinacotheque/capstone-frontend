import React from 'react'
import styles from './profile.module.css'
import {Container, Col, Row} from 'react-bootstrap'
import GameCard from './GameCard'
import MainButton from '../layout/Button'

export default function Profile() {
    return (
        <Container className="mt-5" >
            <Row>
            <Col md={8}>
            <GameCard/>
            </Col>
            

            <Col md={4}>
              <div className={styles.card}>
                <div className="card-body">
                  <div className="avatar">
                    <img
                     
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                   name
                  </h5>
                  <p className="card-text">
                   location
                    <br />
                    <span className="phone">phone</span>
                  </p>
                </div>
                <MainButton title={'Edit Profile'}/>

              </div>
            
            </Col>

            </Row>
        </Container>
    )
}
