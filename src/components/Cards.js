import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';
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
        colorcards: { Indigena: '#C9F2D5', Neutro: '#ECECEC', Africano: '#FAD9B2', Europeu: '#BFE5F3'   },
        affiliation: ['Indigena', 'Neutro', 'Africano', 'Europeu', ''],
        cards: [],
    };

    async componentDidMount() {
        this.registerToSocket();
        const response = await api.get('index');
        this.setState({ cards: response.data })
        this.setState({ baseCards: response.data })
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3030');

        socket.on('card', newcard => {
            console.log("Recebi uma nova carta")
            this.setState({ cards: [newcard, ...this.state.cards] });
        })

        socket.on('cardUpdate', updateCard => {
            this.setState({
                cards: this.state.cards.map(card =>
                    card._id === updateCard._id ? updateCard : card)
            });
        });

        socket.on('cardDelete', deleteCard => {
            this.setState({
                cards: this.state.cards.filter(card =>
                    card._id !== deleteCard._id
                )
            });
            console.log("deleteCard")
            console.log(this.state.cards)
        });

    }

    async deleteId(id) {
        await api.delete(`delete/${id}`);
        console.log("delete");
    }

    async update() {
        const response = await api.get('index');
        this.setState({ cards: response.data })
    }

    async search(tipo, check) {
        check === true ?
            this.setState({ affiliation: tipo }) :
            this.setState({ affiliation: ['Indigena', 'Neutro', 'Africano', 'Europeu', ''] })
    }

    async searchName(name) {
        const response = await api.post(`search/name/${name}`);
        this.setState({ cards: response.data })
    }

    render() {

        return (
            <Container fluid className="all">

                <Row className="search">
                    <Search
                        search={this.search.bind(this)}
                        searchName={this.searchName.bind(this)}
                        update={this.update.bind(this)}
                    />
                </Row>
                <Row className="contend">

                    <Col sm={3} className="form">
                        <Form />
                    </Col>

                    <Col sm={9}>
                        {this.state.cards
                            .filter(
                                (card) => {
                                    return this.state.affiliation.includes(card.affiliation)                                    
                                }
                            )
                            .map(card => (
                                
                                <article key={card._id} style={{ backgroundColor: this.state.colorcards[ card.affiliation ]}} >                                    

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
                                            <FormModal card={card} />
                                        </div>

                                        <hr />

                                        <div className="spell">
                                            <p >{card.spell}</p>
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
