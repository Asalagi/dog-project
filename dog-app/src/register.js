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
            <div class="form-column">
             <div class="form-cell"><p className="form-text">Name</p></div>
             <div class="form-cell">
                <input type="text" name="name"></input></div>
            </div>
            <div class="form-column">
             <div class="form-cell"><p className="form-text">Breed</p></div>
             <div class="form-cell">
                <input type="text" name="breed"></input></div>
            </div>
            <div class="form-column">
             <div class="form-cell"><p className="form-text">Color</p></div>
             <div class="form-cell">
                <input type="text" name="color"></input></div>
            </div>
            <div class="form-column">
             <div class="form-cell"><p className="form-text">Sex</p></div>
             <div class="form-cell">
                <select name="sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select></div>
            </div>
            <div class="form-column">
             <div class="form-cell"><p className="form-text">Birthday</p></div>
             <div class="form-cell">
                <input type="text" name="birthday" placeholder="YYYY/MM/DD"></input></div>
            </div>
            </div>
            </form>
             </div>
            </div>
    );
}

export default Register;