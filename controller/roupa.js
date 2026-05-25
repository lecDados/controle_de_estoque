import Itens from "../config/banco_itens.js";

async function roupa(req, res) {
    
    const dados = await Itens.find()

    const roupas = dados.filter(item => item.categoria === "roupa");

    res.json(roupas)
}

export default roupa;