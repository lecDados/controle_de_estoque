import Itens from "../config/estoque.js";

async function criarItem(req, res){

    console.log("BACKEND RECEBEU");


    console.log(req.body);

    const { nome, valor } = req.body;

    await Itens.create({
        nome,
        valor
    });

    res.json({
        mensagem: "salvo"
    });

}

async function listarItens(req, res){

    const itens = await Itens.find();

    res.json(itens);

}

export {listarItens, criarItem}