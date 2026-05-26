import Itens from "../config/banco_itens.js";

async function repo(req, res) {

    const dados = await Itens.find()

    const baixo = dados.filter(item=> item.total_item <= 10);
    
    res.json(baixo)
}

export default repo;