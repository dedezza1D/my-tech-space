import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to My Tech Space!</h2>
      <p>This is a tech blog where we delve into topics like coding challenges, data structures, graph theory, and REST APIs. Join us as we explore the fascinating world of tech!</p>
      
      <Navbar />
    </div>
  );
}

export default Home;
