import React, { Component } from "react";
import NumerosSorteados from "./NumerosSorteados";

class Sorteador extends Component {
  constructor() {
    super();

    this.state = {
      valorMinimo: 0,
      valorMaximo: 0,
      quantidadeDeSorteios: 0,
      resultado: []
    };
  }

  sorteiaUmNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sorteiaPelaQuantidade(quantidade, min, max) {
    const resultado = [];
    for (let i = 0; i < quantidade; i++) {
      resultado.push(this.sorteiaUmNumero(min, max))
    }
    return this.setState({resultado: resultado})
  }

  render() {
    return (
      <div>
        <p>Sortear</p>
        <input
          type="number"
          onChange={(event) => {
            this.setState({ quantidadeDeSorteios: event.target.value });
          }}
        ></input>
        <p>Números entre</p>
        <input
          type="number"
          onChange={(event) => {
            this.setState({ valorMinimo: event.target.value });
          }}
        ></input>
        <p>e</p>
        <input
          type="number"
          onChange={(event) => {
            this.setState({ valorMaximo: event.target.value });
          }}
        ></input>
        <button
          onClick={(event) => {
            this.setState(
              /* {
              resultado: this.sorteiaUmNumero(
                this.state.valorMinimo,
                this.state.valorMaximo
              ),
            } */
              this.sorteiaPelaQuantidade(
                this.state.quantidadeDeSorteios,
                this.state.valorMinimo,
                this.state.valorMaximo
              )
            );
          }}
        >
          Sortear
        </button>
        <NumerosSorteados resultado={this.state.resultado}/>
      </div>
    );
  }
}

export default Sorteador;
