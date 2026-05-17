
import Itens from "./estoque.js";


export async function criar(req, res){
    
    try{

            const novoItem = await Itens.create(req.body)

            return res.status(201).json(novoItem);

    } catch (error){

            return res.status(500).json({

            erro: error.message

        });
    }
}