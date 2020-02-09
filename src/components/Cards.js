import React, { Component } from 'react';
import api from '../services/api';
import Modal from '../components/modal';
import { AiFillCloseCircle } from 'react-icons/ai';
import Form from '../components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/cards.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';





class Cards extends Component {

    state = {
        cards: [],
    };

    async componentDidMount() {
        const response = await api.get('index');
        this.setState({ cards: response.data })
        console.log("update");
    }

    async deleteId(id) {
        await api.delete(`delete/${id}`);
        this.componentDidMount();
        console.log("click");
    }

    render() {

        return (
            <Container fluid className="all">

                <Row className="search">
                    <h4>Pesquise aqui</h4>
                </Row>
                <Row className="contend">

                    <Col sm={3} className="form">
                        <Form update={this.componentDidMount.bind(this)} />
                    </Col>

                    <Col sm={9}>
                        {this.state.cards.map(card => (

                            <article key={card._id}>

                                <header>
                                <h5>{card.name}</h5>
                                    <button type="button" onClick={() => { this.deleteId(card._id) }}>
                                        <AiFillCloseCircle size={20} />
                                    </button>
                                </header>

                                <div className="img">
                                    <img src={`http://localhost:3030/files/${card.image}`} alt="Card" />
                                </div>

                                <footer>
                                    <div className="atributs">
                                        <div className="at1">{card.at1}</div>
                                        <div className="at2">{card.at2}</div>
                                        <div className="at3">{card.at3}</div>
                                    </div>
                                    <div className="effects">
                                        <div className="affiliation">{card.affiliation}</div>
                                        <Modal description={card.description} />
                                    </div>

                                    <div style={{ maxWidth: "260px", }} className="spell">
                                        <p>{card.spell}</p>
                                    </div>

                                </footer>
                            </article>

                        )
                        )
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cards;