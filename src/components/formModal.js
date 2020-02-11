import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button  as="animate" variant="secondary" size="sm" onClick={handleShow}>
                Editar
            </Button>

            <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Editor de Cartas</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <code>.col-xs-12 .col-md-8</code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
                            </Col>
                            <Col xs={6} md={4}>
                                <code>.col-xs-6 .col-md-4</code>
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