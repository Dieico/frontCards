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
                    <article>

                        <header>{card.name}</header>

                        <img src={`http://localhost:3030/files/${card.image}`} alt="Card" />

                        <footer>
                            <div className="atributs">
                                <spam className="at1">{card.at1}</spam>
                                <spam className="at2">{card.at2}</spam>
                                <spam className="at3">{card.at3}</spam> </div>
                            <spam className="affiliation">{card.affiliation}</spam>
                            <spam className="spell">{card.spell}</spam>
                            <spam className="description">{card.description}</spam>
                        </footer>

                    </article>
                )

                )}
            </section>
        )
    }
}

export default Cards;