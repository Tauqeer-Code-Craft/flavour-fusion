import React from 'react';
import '../App.css'; // Import your CSS file
import chef from "../assets/chef.png"

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h6>Explore our curated collection of recipes that bring flavors together.</h6>
        <h1>Flavor Fusion offers unique and delicious culinary experiences at your fingertips.</h1>
        <p>Discover the chef in you—where cooking and creativity connect.</p>
      </div>
      <div className="home-img">
        <img src={chef} alt="Chef" />
      </div>
    </section>
  );
};

export default HomeSection;
