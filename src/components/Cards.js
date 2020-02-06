import React, { Component } from 'react';
import api from '../services/api';

import './css/cards.css';

class Cards extends Component {

    state = {
        cards: [],
    };

    async componentDidMount() {
        const response = await api.get('index');
        this.setState({ cards: response.data })
    }

    render() {
        return (
            <section>
                {this.state.cards.map(card => (
                    <article key={card._id}>

                        <header><h1>{card.name}</h1></header>


                        <img src={`https://formcards.herokuapp.com/files/${card.image}`} alt="Card" />

                        <footer>
                            <div className="atributs">
                                <div className="at1">{card.at1}</div>
                                <div className="at2">{card.at2}</div>
                                <div className="at3">{card.at3}</div>
                            </div>
                            <div className="effects">
                                <div className="affiliation">{card.affiliation}</div>
                                <button type="button">Descrição</button>
                                <div className="description">{card.description}</div>
                            </div>

                            <div className="spell">{card.spell}</div>

                        </footer>

                    </article>
                )

                )
                }
            </section>
        )
    }
}

export default Cards;