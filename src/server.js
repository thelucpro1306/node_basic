import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



viewEngine(app);
initWebRoutes(app);

let PORT = process.env.PORT || 6969;
app.listen(PORT,()=>{
  //callback func
  console.log("back end nodejs on runing port: "+PORT);
})


