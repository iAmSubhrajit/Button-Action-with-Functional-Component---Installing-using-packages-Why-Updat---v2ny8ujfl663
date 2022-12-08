import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  function para(){
      let p = document.createElement('p');
      p.id = 'para'
      p.innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"

      document.getElementById('main').appendChild(p)
      
    }
  return (
    <div id="main">
      <button onClick={para}>Click</button>

    </div>
  );
}


export default App;
