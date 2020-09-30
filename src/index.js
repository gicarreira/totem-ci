import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/App.jsx'

class Input extends React.Component {
  constructor(){
    super();
    this.state = {
      nome: "",
      celular: ""
    };
    this.onChange = (evento) => {
    const state = Object.assign({}, this.state);
    const campo = evento.target.name;
    state[campo] = evento.target.value;
    this.setState(state); 
    };
  }
  render() {
    return (
    <div>
        Nome: <input name="nome" value={this.state.nome} onChange={this.onChange} type="text" /><br />
        Celular: <input name="celular" value={this.state.celular} onChange={this.onChange} type="text" /><br />
    </div>
    );
  }
}

ReactDOM.render(
   <App />, <Input/>,
    document.getElementById('root')
)