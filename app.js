import express from "express"
import router from "./routes/routes.js"
import cors from "cors"

const app = express()

app.use(express.json());



app.use(cors());

app.use(express.static("public"));

app.use(router);



export default app