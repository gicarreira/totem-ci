import React from 'react';
import './Home.css'
import logo from './topo_totem.svg'

function Home() {

    return (
      <div className="Home">
          <img src={logo} alt="logo"/>
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

export default Home;