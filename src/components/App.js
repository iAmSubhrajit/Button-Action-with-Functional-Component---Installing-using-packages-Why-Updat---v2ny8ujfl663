import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {

  function CreateText() {
    // let p = document.createElement('p');
    // p.setAttribute('id', 'para')
    // p.innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy "
    // document.getElementById('main').appendChild(p)
    
    let p = document.getElementById('para')
    p.classList.remove('d-none')
    p.classList.add('show')
  }

  return (
    <div id="main">
      <button id='click' onClick={CreateText}>Click</button>
      <p id='para' className='d-none'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}


export default App;
