import Itens from "../config/banco_itens.js";
import { ObjectId } from "mongodb";

async function deletar(req, res) {


    try {
        const id = req.params._id

        await Itens.deleteOne({

        _id: new ObjectId(id)
        
    });
        res.send("Item deletado");

    } catch(erro){


        res.status(500).json({
            mensagem:"erro:"+erro
        });
    }
}

export default deletar