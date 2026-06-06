import "./Quantidade.css";
import { useEffect, useState } from "react";

export function Quantidade({ atualizar }) {
  const [total, setTotal] = useState(0);

  async function carregarTotal() {
    const resposta = await fetch("http://localhost:3000/lista");
    const dados = await resposta.json();

    let soma = 0;

    dados.forEach((item) => {
      soma += Number(item.valor) * Number(item.quantidade);
    });

    setTotal(soma);
  }

  useEffect(() => {
    carregarTotal();
  }, [atualizar]);

  return (
    <div className="Quantidade card">
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
      <h3>Total em Itens</h3>

      <p>
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}