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
            <label className="reg-label">Name </label><input type="text" name="name" required /><br />
            <label className="reg-label">Breed </label><input type="text" name="breed" required /><br />
            <label className="reg-label">Color </label><input type="text" name="color" required /><br />
            <label className="reg-label">Sex </label><input type="text" name="sex" required /><br />
            <label className="reg-label">Birthday </label><input type="text" name="birthday" placeholder="YYYY/MM/DD" required /><br />
            <button type="submit">Register</button>
          </form>
        </div>
        </div> 
        <footer>Here is a happy little footer</footer>
    </div>
    );
}

export default Register;