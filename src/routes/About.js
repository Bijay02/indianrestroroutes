import React from 'react';
import './rstyles.css';
import Malasa from "../assets/masala.jpg";

const About = () => {
  return (
    <div>
      <img src={Malasa} alt='foodimage' className='about-image' />
      <div className='heading'>About Us</div>
      <div className='text'>
        <p>The main aim is to provide customers with authentic Indian food laced with the captivating taste and nutritional values of traditional Indian herbs and spices served in a traditional Indian (Punjabi) sitting to give the complete feel of incredible India, at the prices which don’t make people think twice. The target customers are large number of Indian student and families in the area with the aim of taking locals into our food by capitalizing on the growing popularity of traditional Indian food.</p>
        <p>The main focus of our mission statement is to satisfy our customer by offering traditional Indian food and also provide quality service in the form quick home delivery service. Being a high class community, most of the people in Hatfield are working in offices from 9 to 5. In order to attract these customers we will provide competitive prices to attract customers from competitors.</p>
      </div>
    </div>
  )
}

export default About