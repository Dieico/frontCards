import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
import Form from '../components/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
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
                            <Col><Form /></Col>
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