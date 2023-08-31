import React from 'react';
import dog from './dogdog.png';
import './dog-app.css';

function Home() {
    return (
        <div className="container">
            <div className="link-content">
                <img src={dog} alt="dog" /><br/>
                <h2>DogDog Registry</h2><br/>
                    Home<br/>
                    Register<br/>
                    Registered<br/>
            </div>
        </div>
    );
}

export default Home;