import React from 'react';

import { Form, Row, Col, Container } from 'react-bootstrap';


export default function Search(props) {



    const handleChange = e => {
        if (e.target.checked) {
            props.search(e.target.value)
        } else {
            props.update()
        }
    }

    const handleChangeName = e => {
        if (e.target.value !== "") {
            props.searchName(e.target.value)
        } else {
            props.update()
        }

    }


    return (
        <Container >
            <Form.Group s={Row} controlId="search">
                <Form.Row className="align-items-center">
                    <Col lg="2">
                        <Form.Label column sm="2" >Fitro:</Form.Label>
                    </Col>

                    <Col lg="5">
                        <Form.Control type="text" onChange={handleChangeName} placeholder="Pesquisa com uma palavra chave" />
                    </Col>

                    <Col sm="5">
                        <Form.Check inline label="Africano" onChange={handleChange} type="checkbox" value="Africano" id="Africano" />
                        <Form.Check inline label="Europeu" onChange={handleChange} type="checkbox" value="Europeu" id="Europeu" />
                        <Form.Check inline label="Indígena" onChange={handleChange} type="checkbox" value="Indígena" id="Indígena" />
                        <Form.Check inline label="Neutro" onChange={handleChange} type="checkbox" value="Neutro" id="Neutro" />
                    </Col>
                </Form.Row>
            </Form.Group>
        </Container>
    );
}