import { useState } from "react";
import { Formulario } from "./components/superior/Inseri";
import { Quantidade } from "./components/superior/Quantidade";
import Lista from "./components/lista/Lista";
import "./App.css";
import "./grafico_faker.css"

export default function App() {
  const [atualizar, setAtualizar] = useState(0);

  function recarregar() {
    setAtualizar((v) => v + 1);
  }

  return (
    <div>
      <h1>Hello, Estoque!</h1>

      <div className="topo ">
        <Formulario atualizarLista={recarregar} />
        <div className="quantidadeValor">
          <Quantidade atualizar={atualizar} />
          <div className="quant_item card">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <p>Quantidade de itens</p>
            <h2>+18</h2>
          </div>
        </div>
        <div class="grafico">
    <div class="barra barra1"></div>
    <div class="barra barra2"></div>
    <div class="barra barra3"></div>
    <div class="barra barra4"></div>
    <div class="barra barra5"></div>
</div>
      </div>

      <div className="lista card">
        <Lista atualizar={atualizar} />
      </div>
      
    </div>
  );
}