import React from 'react';
import dogImage from './dogdog.png';
import { Link } from 'react-router-dom';
import './dog-app.css';

function DeleteSuccess() {
    return (
        <div className="flex-container">
            <div className="header-content">
                <h3 className="head-bold">Register in the month of September and receive a special gift!</h3></div>
            <div className="link-content">
                <img src={dogImage} alt="dog" />
                <h2>DogDog Registry</h2><br/>
                <Link className="main-links" to="/home">Home</Link>
                <Link className="main-links" to="/register">Register</Link> 
                <Link className="main-links" to="/reg-dogs">Registered</Link>
            </div>
            <div className="main-content">
              <div className="inner-content"> 
            <h1 className="center">Dog Deleted</h1>
                <p className="center">You're dog was successfully deleted.</p> <br/>
              <div className="link-container">
                <Link to="/register">
                    <button className="link-btn center">Register A Dog</button>  
                </Link>  
                <Link to="/reg-dogs">
                    <button className="link-btn center">View Registered Dogs</button>  
                </Link>  
                </div>
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default DeleteSuccess;