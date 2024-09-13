import React from 'react';
import '../App.css'; // Import your CSS file
import ai from "../assets/artificial-intelligence.png"
import lang from "../assets/language.png"
import voice from "../assets/voice.png"
import compost from "../assets/compost.png"

const ContainerSection = () => {
  return (
    <section className="container">
      <div className="container-box">
        <div className="container-img">
          <img src={ai} alt="AI" />
        </div>
        <div className="container-text">
          <h4>AI</h4>
          <p>Powered recipe</p>
        </div>
      </div>
      <div className="container-box">
        <div className="container-img" >
          <img src={lang} alt="Multilingual" />
        </div>
        <div className="container-text">
          <h4>Multilingual</h4>
          <p>support</p>
        </div>
      </div>
      <div className="container-box">
        <div className="container-img">
          <img src={voice} alt="Voice" />
        </div>
        <div className="container-text">
          <h4>Voice-Activated</h4>
          <p>Search</p>
        </div>
      </div>
      <div className="container-box">
        <div className="container-img">
          <img src={compost} alt="Smart Bites" />
        </div>
        <div className="container-text">
          <h4>Smart Bites</h4>
          <p>Waste to</p>
        </div>
      </div>
    </section>
  );
};

export default ContainerSection;
