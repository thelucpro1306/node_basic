const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("run request")
    res.end();
})

server.addListener(3000,'localhost',()=>{
    console.log("nodejs server running on port 3000");
})