import React, { Component } from 'react';
import api from '../services/api';
import FormModal from '../components/formModal';
import { AiFillCloseCircle } from 'react-icons/ai';
import Form from '../components/Form';
import Search from '../components/Search';
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
    }

    async deleteId(id) {
        await api.delete(`delete/${id}`);
        this.componentDidMount();
        console.log("click");
    }

    async update() {
        this.componentDidMount();
    }



    render() {

        return (
            <Container fluid className="all">

                <Row className="search">
                    <Search />
                </Row>
                <Row className="contend">

                    <Col sm={3} className="form">
                        <Form update={this.update.bind(this)} />
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
                                    <img src={`https://lh3.google.com/u/0/d/${card.image}?${new Date().getTime()}`} alt="Card" />
                                </div>
                                <hr />
                                <footer>
                                    <div className="atributs">
                                        <div className="at1">{card.at1}</div>
                                        <div className="at2">{card.at2}</div>
                                        <div className="at3">{card.at3}</div>
                                    </div>
                                    <hr />
                                    <div className="effects">
                                        <div 
                                        className="affiliation">
                                            <h6><b>Filiação:</b> {card.affiliation}</h6></div>
                                        <FormModal card={card} update={this.update.bind(this)} />

                                    </div>
                                    <hr />

                                    <div className="spell">
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
