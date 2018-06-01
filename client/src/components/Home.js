import React from 'react';
import pic from '../circle-tree-logo_354988.png';


const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Happy Summer Running!!</h1>
       <img src={pic} width="30%" height="50%" alt="logo" />
      <h3>Welcome to your Trail Finder!  This page allows you to track the trails you run and to be able to keep count of how many times you run them!</h3>
    </div>
  );
}

export default Home;
