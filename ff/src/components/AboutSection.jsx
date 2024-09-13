import React from 'react';
import '../App.css'; // Import your CSS file\
import about from "../assets/about-us-page.png"

const AboutSection = () => {
  return (
    <section id="about">
      <div className="about-img">
        <img src={about} alt="About" />
      </div>
      <div className="text">
        <h2>About Us</h2>
        <p>At Flavor Fusion, our mission is to revolutionize culinary experiences by providing an accessible, engaging, and comprehensive recipe platform. We believe that cooking is an art and a science, and our team is dedicated to creating a seamless experience that caters to food enthusiasts of all skill levels. With a rich collection of recipes, interactive tools, and a supportive community, Flavor Fusion empowers users to explore their culinary creativity and achieve their cooking goals.</p>
      </div>
    </section>
  );
};

export default AboutSection;
