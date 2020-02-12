import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './css/modal.css';

function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" size="sm" onClick={handleShow}>
                Editar
            </Button>

            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Modal.Title>{props.card.name}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col><img src={`http://formcards.herokuapp.com/files/${props.card.image}`} alt="Card" /></Col>
                            <Col>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Nome:
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext defaultValue={props.card.name} />
                                    </Col>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>At1</Form.Label>
                                            <Form.Control as="number" defaultValue={props.card.at1} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>At2</Form.Label>
                                            <Form.Control defaultValue={props.card.at2} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>At3</Form.Label>
                                            <Form.Control defaultValue={props.card.at3} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Col sm="10">
                                        <Form.Row number defaultValue={props.card.at1} />
                                        <Form.Row number defaultValue={props.card.at2} />
                                        <Form.Row number defaultValue={props.card.at3} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>



                    </Container>
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
        </>
    );
}

export default Example;