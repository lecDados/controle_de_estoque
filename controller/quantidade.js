import Itens from "../config/banco_itens.js";

async function quantidade(req, res) {


    const item = Itens.find();

    res.json(item);

    
}
export default quantidade