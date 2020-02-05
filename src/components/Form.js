import React, { Component } from 'react';

import './css/form.css';

class Form extends Component {
    render() {
        return (
            <form id="new-card">
                <input type="file" />

                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                />
                <div className="atributs">
                    <input
                        type="number"
                        name="at1"
                        placeholder="Atributo 1"
                    />

                    <input
                        type="number"
                        name="at2"
                        placeholder="Atributo 2"
                    />

                    <input
                        type="number"
                        name="at3"
                        placeholder="Atributo 3"
                    />

                </div>

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição"
                />

                <input
                    type="text"
                    name="affiliation"
                    placeholder="Afiliação"
                />

                <input
                    type="text"
                    name="spell"
                    placeholder="Habilidades"
                />

                <input
                    type="text"
                    name="tag"
                    placeholder="tags"
                />

            </form>
        )
    }
}

export default Form;