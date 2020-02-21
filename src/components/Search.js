import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';


export default function Search() {
    return (
        <Container >
            <Form.Group  s={Row} controlId="search">
                <Form.Row className="align-items-center">
                    <Col lg="2">
                        <Form.Label column sm="2" >Fitro:</Form.Label>
                    </Col>

                    <Col lg="5">
                        <Form.Control type="text" placeholder="Pesquisa com uma palavra chave" />
                    </Col>

                    <Col sm="5">                        
                            <Form.Check inline label="Africano" type="radio" id="Africano" />
                            <Form.Check inline label="Europeu" type="radio" id="Europeu" />
                            <Form.Check inline label="Indígena" type="radio" id="Indígena" />
                            <Form.Check inline label="Neutro" type="radio" id="Neutro" />                        
                    </Col>                    
                </Form.Row>
            </Form.Group>
        </Container>
    );
}