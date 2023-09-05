import React, { useState, useEffect } from 'react';
import dogImage from './dogdog.png';
import { Link } from 'react-router-dom';
import './dog-app.css';
import axios from 'axios';

function RegisteredDogs() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetchDogs();
    }, []);

    const fetchDogs = () => {
        axios.get('http://localhost:3001/dogs')
        .then(response => {
            if(Array.isArray(response.data)) {
                setDogs(response.data);
            } else {
                console.error('The server response was not an arrau');
            }
        })
        .catch(error => console.error(`You let go of the leash now your dog ran away: ${error}`))
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
            <h1 className="center">Registered Dogs!</h1>  
            <div className="reg-container">
                <div className="reg-row">
                    <div className="reg-category"><h3>Name</h3></div>
                    <div className="reg-category"><h3>Breed</h3></div>
                    <div className="reg-category"><h3>Color</h3></div>
                    <div className="reg-category"><h3>Sex</h3></div>
                    <div className="reg-category"><h3>Controls</h3></div>
                </div>
                {dogs.map(dogs => (
                <div className="reg-row" key={dogs.id}>
                    <div className="reg-item">{dogs.name}</div>
                    <div className="reg-item">{dogs.breed}</div>
                    <div className="reg-item">{dogs.color}</div>
                    <div className="reg-item">{dogs.sex}</div>
                    <div className="reg-item"><Link className="reg-btn center" to={`/dogs/${dogs.id}`}>View Page</Link></div>
                </div>
                ))}
            </div>     
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default RegisteredDogs;