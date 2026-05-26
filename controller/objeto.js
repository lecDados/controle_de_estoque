import Itens from "../config/banco_itens.js";

async function objeto(req, res) {
    
    const dados = await Itens.find()

    const objetos = dados.filter(item => item.categoria === "objeto");

    res.json(objetos)
}

export default objeto;