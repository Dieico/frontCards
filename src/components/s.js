import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


import './css/modal.css';

function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form);        

        const data = new FormData();

        /**
         * data.append('name', form.name.value);
        data.append('image', form.image.value;
        data.append('at1', form.at1.value);
        data.append('at2', form.at2.value);
        data.append('at3', form.at3.value);
        data.append('description', form.description.value);
        data.append('affiliation', form.affiliation.value);
        data.append('spell', form.spell.value);
        data.append('tag', form.tag.value);
        **/

        
    };


    return (
        <>
            <Button variant="outline-dark" size="sm" onClick={handleShow}>
                Editar
            </Button>

            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Editor de Carta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form onSubmit={handleSubmit} >
                            <Row className="Modal">

                                <Col sm="6">

                                    <Form.Group controlId ="name">
                                        <Form.Control                                            
                                            plaintext
                                            defaultValue={props.card.name} />
                                    </Form.Group>

                                    <Container>
                                        <img src={`http://formcards.herokuapp.com/files/${props.card.image}`} alt="Card" />
                                    </Container>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId ="at1">
                                            <Form.Label>At1</Form.Label>
                                            <Form.Control plaintext defaultValue={props.card.at1} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId ="at2">
                                            <Form.Label>At2</Form.Label>
                                            <Form.Control plaintext defaultValue={props.card.at2} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId ="at3">
                                            <Form.Label >At3</Form.Label>
                                            <Form.Control plaintext defaultValue={props.card.at3} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Row>
                                        <Form.Label column sm="2">
                                            Filiação:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                plaintext
                                                defaultValue={props.card.affiliation}
                                                sm="5">
                                                <option>Africano</option>
                                                <option>Indigena</option>
                                                <option>Europeu</option>
                                                <option>Neutro</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId ="spell">
                                        <Form.Label>
                                            Magias:
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="5"
                                            cols="12"
                                            plaintext
                                            defaultValue={props.card.spell} />
                                    </Form.Group>
                                </Col>


                                <Col sm="6">

                                    <Form.Group controlId ="description">
                                        <Form.Label column sm="5">
                                            Descrição:
                                            </Form.Label>
                                        <Col >
                                            <Form.Control
                                                as="textarea"
                                                rows="20"
                                                plaintext
                                                defaultValue={props.card.description} />
                                        </Col>
                                    </Form.Group>

                                </Col>
                            </Row>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Container>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button type="submit" variant="primary" onClick={handleClose}>
                        Save Changes
                     </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Example;