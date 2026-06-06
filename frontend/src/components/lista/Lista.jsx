import { useEffect, useState } from "react";
import { Delet } from "../botoes/Delet";

export default function Lista({ atualizar }) {
  const [dados, setDados] = useState([]);

  async function buscar() {
    const res = await fetch("http://localhost:3000/lista");
    const data = await res.json();
    setDados(data);
  }

  useEffect(() => {
  buscar();
}, [atualizar]);


  return (
    <div className="">
        <div className="barra_lista">
            <p>Nome</p>
            <p>Preço</p>
            <p>Quantidade</p>
        </div>
      {dados.map((item) => (
        <fieldset key={item._id}>
          <p>{item.nome.toUpperCase()}</p>
          <p>R$ {item.valor}</p>
          <p> {item.quantidade}</p>

          <Delet id={item._id} onDelete={buscar} />
        </fieldset>
      ))}
      
    </div>
  );
}