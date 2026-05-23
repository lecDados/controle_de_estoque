import { criar_item } from "../model/criar_item.js";


export async function criar(req, res){

    try {

        const dados = req.body

        const item = await criar_item(dados)
        
        res.status(201).json({

            mensagem: "Item criado com sucesso!", item
        });
        

    } catch(erro){

        res.status(500).json({
            erro: "Nao foi possivel enviar os dados"
        });
    }
    
}
