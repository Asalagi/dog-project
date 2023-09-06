import React, { useEffect, useState } from 'react';
import dogImage from './dogdog.png';
import { Link, useParams} from 'react-router-dom';
import './dog-app.css';
import axios from 'axios';

function DogInfo() {
    const { id } = useParams();
    const [dog, setDog] = useState({});
    
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [color, setColor] = useState('');
    const [sex, setSex] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const handleUpdateDog = (e) => {
        e.preventDefault();
        const birthday = `${year}-${month}-${day}`;
        
        const updatedDog = {
            name,
            breed,
            color,
            sex,
            birthday,
        };
        
        axios.put(`http://localhost:3001/dogs/${id}`, updatedDog)
        .then(response => {
            console.log('Dog has been successfully updated', response.data)
            setDog(response.data);
        })
        .catch(error => {
            console.log("Error has occured when updating this dog");
        });
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/dogs/${id}`)
        .then(response => {
            console.log('Dog has succesfully been deleted', response.data);
        })
        .catch(error => {
            console.log('An error has occurred when trying to delete this dog', error);
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/dogs/${id}`)
        .then(response => {
            const dogData = response.data;
            setDog(dogData);
            setName(dogData.name);
            setBreed(dogData.breed);
            setColor(dogData.color);
            setSex(dogData.sex);

            const [year, month, day] = dogData.birthday.split("-");
            setYear(year);
            setMonth(month);
            setDay(day);
        })
        .catch(error => {
            console.error('oh no your dog got out and we can retrieve it', error);
        });
    }, [id]);

    const convertBirthday = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };



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
            <h1 className="center">{dog.name}!</h1>
                <p className="center">{dog.name} is a {dog.color} {dog.breed} {dog.sex} born on {convertBirthday(dog.birthday)}</p>   
                <div className="form-content">
          <form onSubmit={handleUpdateDog}>
            <div className="form-row">
              <div className="form-label"><label>Name </label></div>
              <div className="form-item"><input type="text" name="name" onChange={e => setName(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Breed </label></div>
              <div className="form-item"><input type="text" name="breed" onChange={e => setBreed(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Color </label></div>
              <div className="form-item"><input type="text" name="color" onChange={e => setColor(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Sex </label></div>
              <div className="form-item"><input type="text" name="sex" onChange={e => setSex(e.target.value)}/></div>
            </div>
            <div className="form-row">
              <div className="form-label"><label>Birthday </label></div>
              <div className="form-item">
                <input className="year-input" type="text" name="year" placeholder="YYYY" onChange={e => setYear(e.target.value)}/>
                <select name="month" onChange={e => setMonth(e.target.value)}>
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
              <div className="form-submit"><button className="reg-btn" type="submit">Update</button></div>
            </div>
          </form>
        </div>      
            </div>
            <div className="delete-container"> 
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default DogInfo;