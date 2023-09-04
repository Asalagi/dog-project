import React from 'react';
import dog from './dogdog.png';
import { Link } from 'react-router-dom';
import './dog-app.css';

function Success() {
    return (
        <div className="flex-container">
            <div className="header-content">
                <h3 className="head-bold">Register in the month of September and receive a special gift!</h3></div>
            <div className="link-content">
                <img src={dog} alt="dog" />
                <h2>DogDog Registry</h2><br/>
                    <Link to="/home">Home</Link><br/>
                    <Link to="/register">Register</Link><br/>
                    Registered<br/>
            </div>
            <div className="main-content">
              <div className="inner-content"> 
            <h1 className="center">Success!</h1>
                <p>Youre dog was successfully registered!</p>         
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default Success;