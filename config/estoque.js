import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/estoque");

const item = new mongoose.Schema({
    nome: String,
    valor: Number,
    quantidade: Number,
});

export const Itens = mongoose.model("Itens", item);

export default Itens