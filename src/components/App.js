import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {

  function CreateText() {
    let p = document.createElement('p')
    // let p = document.querySelector('p')
    p.setAttribute('id', 'para')
    p.innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    // p.classList.remove('d-none')
    // p.classList.add('show')
    
  }

  return (
    <div id="main">
      <button id='click' onClick={CreateText}>Click</button>
      {/* <p className='d-none'></p> */}
    </div>
  );
}


export default App;
