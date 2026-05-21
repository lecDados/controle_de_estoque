import Itens from "../config/estoque.js";
import total from "./total.js";

async function criarItem(req, res){

    console.log("BACKEND RECEBEU");


    console.log(req.body);

    const { nome, valor, quantidade, } = req.body;

    await Itens.create({
        nome,
        valor,
        quantidade
    });

    res.json({
        mensagem: "salvo"
    });

}

async function listarItens(req, res){

    const itens = await Itens.find();

    res.json(itens);

}

async function mostrar_total(req, res){
    res.json({
        mostra_total: total
    });
}

export {listarItens, criarItem, mostrar_total}