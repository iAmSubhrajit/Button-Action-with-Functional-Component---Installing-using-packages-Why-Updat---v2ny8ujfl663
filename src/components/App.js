import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  function text(){
      let p = document.querySelector('p');
      p.id = 'para'
      p.innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"      
    }

  return (
    <div id="main">
      <button id='click' onClick={text}>Click</button>
      <p></p>
    </div>
  );
}


export default App;
