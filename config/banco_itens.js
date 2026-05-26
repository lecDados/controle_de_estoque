import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/estoque1");

const item = new mongoose.Schema({
    nome: String,
    valor: Number,
    quantidade: Number,
    categoria: String,
    total_item: Number,
});

const Itens = mongoose.model("Itens", item);

export default Itens