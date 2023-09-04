import React from 'react';
import dog from './dogdog.png';
import { Link } from 'react-router-dom';
import './dog-app.css';

function RegisteredDogs() {
    return (
        <div className="flex-container">
            <div className="header-content">
                <h3 className="head-bold">Register in the month of September and receive a special gift!</h3></div>
            <div className="link-content">
                <img src={dog} alt="dog" />
                <h2>DogDog Registry</h2><br/>
                <Link className="main-links" to="/home">Home</Link>
                <Link className="main-links" to="/register">Register</Link> 
                <Link className="main-links" to="/reg-dogs">Registered</Link>
            </div>
            <div className="main-content">
              <div className="inner-content"> 
            <h1 className="center">Registered Dogs!</h1>       
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default RegisteredDogs;