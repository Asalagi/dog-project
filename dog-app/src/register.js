import React from 'react';
import { Link } from 'react-router-dom';
import './dog-app.css';
import dog from './dogdog.png';

function Register() {
    return (
        <div className="container">
            <div className="link-content">
                <img src={dog} alt="dog" /><br/>
                <h2>DogDog Registry</h2><br/>
                    <Link to="/home">Home</Link><br/>
                    <Link to="/register">Register</Link><br/>
                    Registered<br/>
            </div>
            <div className="main-content">
            <form>
            <div class="form-content">
            <h1>Register your dog!</h1><br/>
            <div class="form-column">
             <div class="form-cell">Name</div>
             <div class="form-cell">
                <input type="text" name="name"></input></div>
            </div>
            <div class="form-column">
             <div class="form-cell">Data 1</div>
             <div class="form-cell">Data 2</div>
            </div>
            </div>
            </form>
             </div>
            </div>
    );
}

export default Register;