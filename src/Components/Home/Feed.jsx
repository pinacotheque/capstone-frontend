import React from 'react'
import styles from './home.module.css'
import {Container, Col, Row, Modal, Button} from 'react-bootstrap'
import { useState } from 'react';

export default function Feed() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className={styles.inputDiv}>
            <img src="https://picsum.photos/200" alt="" />
            <input className={styles.postInput} placeholder="Create your team.." onClick={handleShow}/>
        </div>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Create a team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                <label htmlFor="">Event Name</label>
                <input type="text" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>


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
        </>
    )
}
