import React, { Component } from 'react';
import { Form, Card, Button, Container, Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            redirect: false,
        };
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state.password);
    }

    handleSubmit = async (e) => {
        // await api.post('login', this.state.password)
        if (this.state.password === '1234')
            this.setState({ redirect: true })
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to="/home" />
        } else {
            return (
                <section className="login">
                    <Container >
                        <Row className="justify-content-md-center">
                            <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Header>
                                    <Card.Title>
                                        Digite a senha aqui
                                </Card.Title>
                                </Card.Header>
                                <Card.Body>

                                    <Form.Control
                                        id="password"
                                        // type="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        placeholder="Digite a senha aqui" />


                                    <Card.Footer>
                                        <Button
                                            type="submit"
                                            variant="secundary"
                                            onClick={() => this.handleSubmit()}>Entrar</Button>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </section>
            );
        };
    }
}

export default Home;