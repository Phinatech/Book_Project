import express,{Application,Request,Response} from "express";
require("../config/db")
import bookrouter from "../router/dataRouter";

const app:Application = express();
app.use(express.json());
const Port = 4000

app.use("/server",bookrouter)

app.get("/",(req:Request,res:Response):Response=>{
    return res.status(200).json({
        message:"Server is up and running"
    });
});



app.listen(Port,()=>{
    console.log(`Server is up and running on: ${Port}`)
});