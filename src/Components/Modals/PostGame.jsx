import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default function PostGame({show, handleClose}) {
    return (
        
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
       
    )
}
