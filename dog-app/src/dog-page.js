import React, { useEffect, useState } from 'react';
import dogImage from './dogdog.png';
import { Link, useParams} from 'react-router-dom';
import './dog-app.css';
import axios from 'axios';

function DogInfo() {
    const { id } = useParams();
    const [dog, setDog] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/dogs/${id}`)
        .then(response => {
            setDog (response.data);
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
                <p className="center">{dog.name} is a {dog.colo} {dog.breed} {dog.sex} born on {convertBirthday(dog.birthday)}</p>         
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default DogInfo;