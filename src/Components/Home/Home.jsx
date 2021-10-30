import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import teamPic from '../assets/TeamUp.png'
import image1 from '../assets/image1.png'
import styles from './home.module.css'

export default function Home() {
    return (
        <div>
            <Container className={styles.mainContainer}>
                <Row>
                    <Col className={styles.firstCol}>
                    <img src={image1}/>
                    <h2>Build your dream team</h2>
                    <h4>Start having fun.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam natus exercitationem neque perspiciatis aliquam minus corrupti, in necessitatibus quidem distinctio eius excepturi alias provident cumque assumenda, ratione iste perferendis.</p>
                    <button>Join Community</button>
                    </Col>
                    <Col className={styles.teamPic}>
                    <img src={teamPic}/>
                    </Col>

                </Row>
               
            </Container>
            
        </div>
    )
}
