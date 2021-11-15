import React from 'react'
import styles from './home.module.css'
import {Container, Col, Row, Modal, Button} from 'react-bootstrap'

export default function SingleGame() {
    return (
        <div>
            <div className={styles.inputPost}>
            <Row>
                <img src="https://picsum.photos/200" alt="" />
                <Col >
                <Row>
                <h6 className="flex-row">Game</h6>
                </Row>
                <Row className="justify-between">
                <div>Date: 10/10/2021 
                    <span className="px-2">Location: ...</span>
                    <span>Players: ?/10</span>
                </div>
                    
                </Row>
                </Col>
                <button>Join</button>
            </Row>
        </div>
        </div>
    )
}
