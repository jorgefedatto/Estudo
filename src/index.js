import express from "express";
import cors from "cors";
import { executeQuery } from "./config/database.js";

const app = express();

//JSON
app.use(express.json());

//JSON CORS
app.use(cors());

//get

app.get("/Clientes", function(req,res){

        executeQuery('select * from teste', [], function(err, result){           
        if (err){
            return res.status(500).json(err);
        } else {
            return res.status(200).json(result);
        }
        })
    });

//POST

app.post("/Clientes", function(req,res){
    
    let sql = "INSERT INTO TESTE (DESCRICAO,VALOR) VALUES (?,?) RETURNING ID ";
    
    executeQuery(sql, [req.body.descricao, req.body.nome], function(err, result){
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    })
})

app.listen(3000,function(){
    console.log("Servidor Running");
});