import { useEffect, useState } from "react"
import "./App.css"

// ✅ CORREÇÃO 1: URL em um único lugar.
// Quando for para produção, muda só aqui.
const BASE_URL = "http://localhost:3000"

function App() {

  const [dados, setDados] = useState([])
  
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [categoria, setCategoria] = useState("acessorio")
  const [erro, setErro] = useState("") // ✅ CORREÇÃO 2: estado para mostrar erros ao usuário

  async function buscar() {

    try { // ✅ CORREÇÃO 3: try/catch em todas as funções async

      const resposta = await fetch(`${BASE_URL}/lista`)

      const itens = await resposta.json()

      setDados(itens)

    } catch {
      setErro("Erro ao buscar itens. Verifique se o servidor está rodando.")
    }
  }

  useEffect(() => { //“Quando o componente(function App()) abrir pela primeira vez, execute buscar().”
    buscar()
  }, []);




  async function enviar() {
    // ✅ CORREÇÃO 4: validação antes de enviar
    if (!nome || !valor || !quantidade) {
      setErro("Preencha todos os campos antes de enviar.")
      return
    }

    setErro("")
    const total_item = Number(valor) * Number(quantidade)

    try {
      await fetch(`${BASE_URL}/criar`, {

        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          valor: Number(valor),
          quantidade: Number(quantidade),
          categoria,
          total_item
        })
      })

      setNome("") //está limpando os estados depois do envio
      setValor("")
      setQuantidade("")
      await buscar()
    } catch {
      setErro("Erro ao criar item.")
    }
  }

  async function deletar(id) {
    try {
      await fetch(`${BASE_URL}/lista/${id}`, { method: "DELETE" })
      await buscar()
    } catch {
      setErro("Erro ao deletar item.")
    }
  }

  async function filtrar(url) {

    try {
      const resposta = await fetch(url)

      const itens = await resposta.json()

      setDados(itens)
      
    } catch {
      setErro("Erro ao filtrar itens.")
    }
  }

  const total = dados.reduce((acc, item) => acc + item.total_item, 0)
  const quantidadeTotal = dados.reduce((acc, item) => acc + item.quantidade, 0)

  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px"
        }}
      >
        <fieldset>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "200px",
              gap: "4px"
            }}
          >
            <p>Novo item</p>

            {/* ✅ Exibe o erro na tela quando ocorre */}
            {erro && <p style={{ color: "red", fontSize: "0.85rem" }}>{erro}</p>}

            <label>Nome:</label>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>R$:</label>
            <input
              type="number"
              placeholder="Valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />

            <label>Quantidade:</label>
            <input
              type="number"
              placeholder="Quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />

            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="acessorio">Acessórios</option>
              <option value="objeto">Objetos</option>
              <option value="roupa">Roupas</option>
            </select>

            <button type="button" onClick={enviar}>
              Enviar
            </button>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <p>Valor em Produto:</p>
            <p>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </p>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <p>Quantidade:</p>
            <p>Itens: {quantidadeTotal}</p>
          </div>
        </fieldset>
      </section>

      <main style={{ flexWrap: "wrap", paddingTop: "40px" }}>
        <button onClick={() => filtrar(`${BASE_URL}/acessorios`)}>Acessórios</button>
        <button onClick={() => filtrar(`${BASE_URL}/objeto`)}>Objetos</button>
        <button onClick={() => filtrar(`${BASE_URL}/roupa`)}>Roupas</button>
        <button onClick={() => filtrar(`${BASE_URL}/repor`)}>Reposição</button>
        <button onClick={buscar}>Mostrar Todos</button>
      </main>

      <hr />

      <div>
        {dados.map((item) => (
          
          <fieldset key={item._id}>

            <p>Nome: {item.nome}</p>
            <p>Valor cada: R$ {item.valor}</p>
            <p>Quantidade: {item.quantidade}</p>
            <p>Valor total: R$ {item.total_item.toFixed(2)}</p>
            <button type="button" onClick={() => deletar(item._id)}>
              deletar
            </button>
          </fieldset>

        ))}
      </div>
    </div>
  )
}

export default App