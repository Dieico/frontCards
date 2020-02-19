import React, { Component } from 'react';
import api from "../services/api"

import './css/form.css';

class Form extends Component {
    state = {
        name: '',
        at1: 0,
        at2: 0,
        at3: 0,
        description: '',
        affiliation: '',
        spell: '',
        tag: '',
        image: null,
    }

    handleSubmit = async e => {
        e.preventDefault();       
        const data = new FormData();

        data.append('name', this.state.name);
        data.append('image', this.state.image);
        data.append('at1', this.state.at1);
        data.append('at2', this.state.at2);
        data.append('at3', this.state.at3);
        data.append('description', this.state.description);
        data.append('affiliation', this.state.affiliation);
        data.append('spell', this.state.spell);
        data.append('tag', this.state.tag);

        await api.post('create', data); 
        console.log("envio");
        this.props.update();   
    }

    handleImageChange = e => {
        console.log( e.target.files[0] )
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form id="new-card"
                className="Neumorphism"
                onSubmit={this.handleSubmit}
            >
                <input type="file" onChange={this.handleImageChange} />

                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <div className="atributs">
                    <input
                        type="number"
                        name="at1"
                        placeholder="Atributo 1"
                        onChange={this.handleChange}
                        value={this.state.at1}
                    />

                    <input
                        type="number"
                        name="at2"
                        placeholder="Atributo 2"
                        onChange={this.handleChange}
                        value={this.state.at2}
                    />

                    <input
                        type="number"
                        name="at3"
                        placeholder="Atributo 3"
                        onChange={this.handleChange}
                        value={this.state.at3}
                    />

                </div>

                <select
                    type="text"
                    name="affiliation"
                    placeholder="Afiliação"
                    onChange={this.handleChange}
                    value={this.state.affiliation} >
                    <option value="Selecione">Selecione</option>
                    <option value="Indígena">Indígena</option>
                    <option value="Africano">Africano</option>
                    <option value="Europeia">Europeia</option>
                    <option value="Neutro">Neutro</option>

                </select>

                <input
                    type="text"
                    name="tag"
                    placeholder="tags"
                    onChange={this.handleChange}
                    value={this.state.tag}
                />

                <textarea
                    type="text"
                    name="spell"
                    placeholder="Habilidades"
                    onChange={this.handleChange}
                    value={this.state.spell}

                />

                <textarea
                    type="text"
                    name="description"
                    placeholder="Descrição"
                    onChange={this.handleChange}
                    value={this.state.description}

                />

                <button type="submit">Enivar</button>
            </form>
        )
    }
}

export default Form;