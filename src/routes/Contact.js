import React from 'react';
import './contactstyle.css';

const Contact = () => {
  return (
<div className='contact-body'>
<div class="wrapper">
  <div class="title">
    <h1>contact us form</h1>
  </div>
  <div class="contact-form">
    <div class="input-fields">
      <input type="text" class="input" placeholder="Name" />
      <input type="text" class="input" placeholder="Email Address" />
      <input type="text" class="input" placeholder="Phone" />
      <input type="text" class="input" placeholder="Subject" />
    </div>
    <div class="msg">
      <textarea placeholder="Message"></textarea>
      <div class="btn">send</div>
    </div>
  </div>
</div>
</div> 
)
}

export default Contact