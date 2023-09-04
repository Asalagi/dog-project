import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './dog-app.css';
import dog from './dogdog.png';

function Register() {
    const navigate = useNavigate();

    const handleCreate = (newDog) => {
        console.log("New dog data:", newDog);
        axios.post('http://localhost:3001/register', newDog)
        .then(response => {
            console.log("Response:", response);
            if(response.data.success) {
                navigate('/reg-success');
            }
        })
        .catch(error => console.log(`There was an error creating this dog ${error}`));       
    };

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
        <div className="form-content">
          <form onSubmit={e => {
            e.preventDefault();
            handleCreate({
                name: e.target.elements.name.value,
                breed: e.target.elements.breed.value,
                color: e.target.elements.color.value,
                sex: e.target.elements.sex.value,
                brithday: e.target.elements.birthday.value,
            });
          }}>
            <div className="form-row">
              <div className="form-label"><label className="reg-label">Name </label></div>
              <div className="form-item"><input type="text" name="name" required /></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label className="reg-label">Breed </label></div>
              <div className="form-item"><input type="text" name="breed" required /></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label className="reg-label">Color </label></div>
              <div className="form-item"><input type="text" name="color" required /></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label className="reg-label">Sex </label></div>
              <div className="form-item"><input type="text" name="sex" required /></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label className="reg-label">Birthday </label></div>
              <div className="form-item"><input type="text" name="birthday" placeholder="YYYY/MM/DD" required /></div>
            </div>
            <div className="form-row">
              <div className="form-submit"><button type="submit">Register</button></div>
            </div>
          </form>
        </div>
        </div> 
        </div>
        <footer>Here is a happy little footer</footer>
    </div>
    );
}

export default Register;