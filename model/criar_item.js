import Itens from "../config/banco_itens.js";



export async function criar_item(dados){

        const {nome, valor, quantidade, categoria} =  dados;

        const item = await Itens.create({
            nome:nome,
            valor: valor,
            quantidade:quantidade,
            categoria: categoria,
            
        });
        
        console.log("Item criado com sucesso!" + item)
        
        return item;
  
}