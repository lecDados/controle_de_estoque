import Itens from "../config/estoque.js";

const itens = await Itens.find();

let total = 0;

itens.forEach(item => {
   total += Number(item.quantidade || 0)
});
console.log(total)

export default total;
