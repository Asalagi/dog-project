import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './dog-app.css';
import dog from './dogdog.png';

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [color, setColor] = useState('');
    const [sex, setSex] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();
        const birthday = `${year}-${month}-${day}`;
        const newDog = {
            name,
            breed,
            color,
            sex,
            birthday,
        };

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
                <Link className="main-links" to="/home">Home</Link>
                <Link className="main-links" to="/register">Register</Link> 
                <Link className="main-links" to="/reg-dogs">Registered</Link>
        </div>
        <div className="main-content">
          <div className="inner-content"> 
        <h1 className="center">Register Your Dog!</h1>
        <div className="form-content">
          <form onSubmit={handleCreate}>
            <div className="form-row">
              <div className="form-label"><label>Name </label></div>
              <div className="form-item"><input type="text" name="name" required onChange={e => setName(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Breed </label></div>
              <div className="form-item"><input type="text" name="breed" required onChange={e => setBreed(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Color </label></div>
              <div className="form-item"><input type="text" name="color" required onChange={e => setColor(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Sex </label></div>
              <div className="form-item"><input type="text" name="sex" required onChange={e => setSex(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Birthday </label></div>
              <div className="form-item">
                <input className="year-input" type="text" name="year" placeholder="YYYY" required onChange={e => setYear(e.target.value)}/>
                <select name="month" required onChange={e => setMonth(e.target.value)}>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
                <select name="day" required onChange={e => setDay(e.target.value)}>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                </div>
            </div>
            <div className="form-row">
              <div className="form-submit"><button className="reg-btn" type="submit">Register</button></div>
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