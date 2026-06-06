import { useState } from "react";
import "./Formulario.css";
import { Enviar } from "../botoes/Enviar.jsx";

export function Formulario({ atualizarLista }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");

    async function enviarFormulario(event) {
        event.preventDefault();

        const dados = {
            nome,
            valor: Number(preco),
            quantidade: Number(quantidade)
        };

        const resposta = await fetch("http://localhost:3000/criar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();
        console.log(resultado);

        atualizarLista(); 

        setNome("");
        setPreco("");
        setQuantidade("");
    }

    return (
        <form
            className="formulario card"
            onSubmit={enviarFormulario}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                alignItems: "flex-start"
            }}
        >
            <label htmlFor="nome">Nome</label>
            <input
                id="nome"
                type="text"
                placeholder="Insira o nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="preco">Preço</label>
            <input
                id="preco"
                type="number"
                placeholder="Insira o preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />

            <label htmlFor="quantidade">Quantidade</label>
            <input
                id="quantidade"
                type="number"
                placeholder="Insira a quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
            />

            <Enviar texto="Enviar" />
        </form>
    );
}