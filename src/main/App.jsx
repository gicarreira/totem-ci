import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
        <h2>Escreva seu nome sem abreviações</h2>
        <br />
        <br />
        <h1>Qual o seu nome completo?</h1>
        <p><label></label></p>
        <input type="text" name="nome"></input>
        <a href="#" class="myButton">Próximo</a>
    </div>
  );
}

function header(){
  return (
    <div className="header">
      
    </div>
  )
}

export default App;
