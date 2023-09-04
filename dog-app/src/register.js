import React from 'react';
import { Link } from 'react-router-dom';
import './dog-app.css';
import dog from './dogdog.png';

function Register() {
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
        <h1 className="center">Register Your Dog!</h1>
          <form>
            <lable className="reg-label">Name </lable><input type="text" name="name" required /><br />
            <lable className="reg-label">Breed </lable><input type="text" name="breed" required /><br />
            <lable className="reg-label">Color </lable><input type="text" name="color" required /><br />
            <lable className="reg-label">Sex </lable><input type="text" name="sex" required /><br />
            <lable className="reg-label">Birthday </lable><input type="text" name="birthday" placeholder="YYYY/MM/DD" required /><br />
            <button type="submit">Register</button>
          </form>
        </div>
        </div> 
        <footer>Here is a happy little footer</footer>
    </div>
    );
}

export default Register;