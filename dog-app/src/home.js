import React from 'react';
import dogImage from './dogdog.png';
import { Link } from 'react-router-dom';
import './dog-app.css';

function Home() {
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
            <h1 className="center">Welcome!</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Eget velit aliquet sagittis id. Quam nulla porttitor massa id neque aliquam. Viverra adipiscing at in tellus. Vivamus at augue eget arcu dictum. Suscipit tellus mauris a diam maecenas sed enim. Pulvinar mattis nunc sed blandit libero volutpat sed. Ut faucibus pulvinar elementum integer enim neque. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.</p>
             <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget. Aliquet porttitor lacus luctus accumsan. Odio facilisis mauris sit amet massa. Odio tempor orci dapibus ultrices in. Nunc lobortis mattis aliquam faucibus purus in. Sollicitudin tempor id eu nisl nunc mi. Lectus quam id leo in vitae. Enim nec dui nunc mattis. Mauris ultrices eros in cursus turpis. Elementum integer enim neque volutpat ac tincidunt. Metus aliquam eleifend mi in. Nisi quis eleifend quam adipiscing vitae. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Sit amet mauris commodo quis imperdiet. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Est velit egestas dui id ornare arcu odio ut sem.</p>
             <p>Torta non pulvinar neque laoreet suspendisse interdum consectetur libero. Arcu dui vivamus arcu felis bibendum ut. Ut tellus elementum sagittis vitae et leo. Donec et odio pellentesque diam volutpat commodo sed egestas. Ut pharetra sit amet aliquam id. Mauris in aliquam sem fringilla ut morbi tincidunt. Eget magna fermentum iaculis eu non. Nunc scelerisque viverra mauris in. Dui vivamus arcu felis bibendum ut tristique et egestas. Nullam vehicula ipsum a arcu cursus vitae congue. Gravida neque convallis a cras. Consectetur adipiscing elit duis tristique sollicitudin nibh. Faucibus scelerisque eleifend donec pretium vulputate sapien. Vitae purus faucibus ornare suspendisse.</p>
            </div>
            </div> 
            <footer>Here is a happy little footer</footer>
        </div>
    );
}

export default Home;