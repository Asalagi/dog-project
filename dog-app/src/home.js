import React from 'react';
import dog from './dogdog.png';
import { Link } from 'react-router-dom';
import './dog-app.css';

function Home() {
    return (
        <div className="container">
            <div className="link-content">
                <img src={dog} alt="dog" /><br/>
                <h2>DogDog Registry</h2><br/>
                    <Link to="/home">Home</Link><br/>
                    <Link to="/register">Register</Link><br/>
                    Registered<br/>
            </div>
        </div>
    );
}

export default Home;