import React, { Component } from 'react';

import Cards from '../components/Cards';



import './body.css';


class Home extends Component {
    render() {
        return (
            <section className="home">                
                <Cards />                
            </section>
        );
    }
}

export default Home;