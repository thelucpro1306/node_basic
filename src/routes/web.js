import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
var {conn,sql} = require('../connect');
let initWebRoutes = (app)=>{

    router.get("/",homeController.getHomePage);
    router.get("/about",homeController.getAboutPage);
    router.get("/theluc",(req,res)=>{
        return res.send("Luc luong")
    });

    app.get('/student',async (req,res)=>{
        var pool = await conn;
        var sqlString = "Select * from client";
        return await pool.request().query(sqlString,(err,data)=>{
            res.send(data.recordset[0]);
        })
        
    })




    return app.use("/",router);
}

module.exports = initWebRoutes;