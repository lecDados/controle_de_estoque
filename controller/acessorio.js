import Itens from "../config/banco_itens.js";

async function acessorio(req, res) {
    
    const dados = await Itens.find()

    const acessorios = dados.filter(item=> item.categoria === "acessorio");

    res.json(acessorios);
  
}

export default acessorio;