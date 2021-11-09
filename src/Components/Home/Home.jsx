import React from 'react'
import {Col, Container, Row, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Feed from './Feed.jsx'
import styles from './home.module.css'

export default function Home() {
    return (
        <div>
            <Container className={styles.home}>
                <Row>
                    <Col lg={1}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Username</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col lg={6} className="offset-2">
                        <Feed/>
                    </Col>

                    <Col lg={4}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
