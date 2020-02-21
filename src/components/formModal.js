import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
import api from "../../src/services/api"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Button, ToggleButtonGroup, ToggleButton, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



import './css/modal.css';

function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = new FormData();

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;


        data.append('name', form.name.value);
        data.append('image', form.image.value);
        data.append('imagem', form.imagem.files[0]);
        data.append('at1', form.at1.value);
        data.append('at2', form.at2.value);
        data.append('at3', form.at3.value);
        data.append('description', form.description.value);
        // data.append('affiliation', form.affiliation.value);
        data.append('spell', form.spell.value);
        // data.append('tag', form.tag.value);  
        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        await api.put(`update/${form.id.value}`, data);
        props.update();
    };

    const handleImageChange = e => {
        var preview = document.getElementById("imageshow");
        var file = document.getElementById("imagem").files[0];
        var reader = new FileReader();

        reader.onloadend = () => { preview.src = reader.result; }

        file ? reader.readAsDataURL(file) : preview.src = "";
    }

    const handleChangeRadio = val => {
        data.append('affiliation', val);
        console.log(val);
    }

    return (
        <>
            <Button variant="outline-dark" size="sm" onClick={handleShow}>
                Editar
            </Button>

            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Editor de Carta</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <Container fluid>
                            <Row className="Modal">

                                <Col id="first">

                                    <Form.Group controlId="name">
                                        <Form.Control
                                            plaintext
                                            defaultValue={props.card.name} />
                                    </Form.Group>

                                    <Form.Control type="hidden" id="id" defaultValue={props.card._id} />
                                    <Form.Control id="image" type="hidden" defaultValue={props.card.image} />

                                    <Container>
                                        <Image id="imageshow"
                                            src={`https://lh3.google.com/u/0/d/${props.card.image}?${new Date().getTime()}`}
                                            alt="Card"
                                            fluid  />
                                    </Container>

                                    
                                        <Form.Control id="imagem" type="file" onChange={handleImageChange} />
                                    

                                    <Form.Row >
                                        <Form.Group as={Col} controlId="at1">
                                            <Form.Label>At1</Form.Label>
                                            <Form.Control size="sm" type="number" plaintext defaultValue={props.card.at1} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="at2">
                                            <Form.Label>At2</Form.Label>
                                            <Form.Control size="sm" plaintext defaultValue={props.card.at2} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="at3">
                                            <Form.Label >At3</Form.Label>
                                            <Form.Control size="sm" plaintext defaultValue={props.card.at3} />
                                        </Form.Group>
                                    </Form.Row>

                                    <ToggleButtonGroup
                                        type="radio"
                                        defaultValue={props.card.affiliation}
                                        name="options"
                                        onChange={handleChangeRadio}>
                                        <ToggleButton variant="light" value={"Africano"}>Africano</ToggleButton>
                                        <ToggleButton variant="light" value={"Indígena"}>Indígena</ToggleButton>
                                        <ToggleButton variant="light" value={"Europeu"}>Europeu</ToggleButton>
                                        <ToggleButton variant="light" value={"Neutro"}>Neutro</ToggleButton>
                                    </ToggleButtonGroup>

                                    <Form.Group controlId="spell">
                                        <Form.Label>
                                            Magias:
                                        </Form.Label>
                                        <hr />
                                        <Form.Control
                                            as="textarea"
                                            rows="5"
                                            cols="12"
                                            plaintext
                                            defaultValue={props.card.spell} />
                                    </Form.Group>
                                </Col>


                                <Col>

                                    <Form.Group controlId="description">
                                        <Form.Label column sm="5">
                                            Descrição:
                                            </Form.Label>
                                        <hr />
                                        <Form.Control
                                            as="textarea"
                                            rows="20"
                                            plaintext
                                            defaultValue={props.card.description} />

                                    </Form.Group>

                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleClose}>Fechar</Button>
                        <Button type="submit">Salvar</Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default Example;