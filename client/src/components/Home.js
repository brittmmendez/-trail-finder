import React from 'react';
import pic from '../Capture1.JPG';


const Home = props => {
  return (
    <div>
      <h1>Happy Summer Running!!</h1>
       <img src={pic} alt="logo" />
      <h3>Welcome to your Trail Finder!  This page allows you to track the trails you run and to be able to keep count of how many times you run them!</h3>
    </div>
  );
}

export default Home;
