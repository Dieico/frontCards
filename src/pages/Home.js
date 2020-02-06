import React from 'react';
import Cards from '../components/Cards';
import Form from '../components/Form';

import './body.css';


function Home() {
    return (
        <section className="home">
            <Form/>
            <Cards/>
        </section>
    );
}

export default Home;