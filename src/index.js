import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/App.jsx'

class Input extends React.Component {
  constructor(){
    super();
    this.state = {
      nome: "",
      celular: "",
      documento: ""
    };
    this.onChange = (evento) => {
    const state = Object.assign({}, this.state);
    const campo = evento.target.name;
    state[campo] = evento.target.value;
    this.setState(state); 
    };
    this.onSubmit = (evento) => {
        evento.preventDefault();
        console.log(this.state);
    };
  }
  
  render() {
    return (
    <div>
        Nome: <input name="nome" value={this.state.nome} onChange={this.onChange} type="text" /><br />
        Celular: <input name="celular" value={this.state.celular} onChange={this.onChange} type="text" /><br />
        Documento: <select name="documento" onChange={this.onChange} value={this.state.documento}>
                    <option value="">Selecione</option>
                    <option value="1">RNE</option>
                    <option value="2">CPF</option>
                    <option value="3">PROTOC</option>
                  </select>
        Numero: <input name="numero" value={this.state.numero} onChange={this.onChange} type="text" /><br />
        <button onClick={this.onSubmit}>Enviar</button>
    </div>
    );
  }
}

ReactDOM.render(
   <App />, <Input/>,
    document.getElementById('root')
)