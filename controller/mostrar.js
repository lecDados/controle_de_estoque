import Itens from "../config/banco_itens.js";

export async function mostrar(req, res) {
    const itens = await Itens.find()

    res.json(itens)
}