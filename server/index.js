 const http = require("http");
 const fs = require("fs");
 const myServer = http.createServer((req, res)=>{
    fs.appendFile('log.txt',`${Date.now()}: ${req.url} New Req Received\n`,(err,data)=>{
        switch(req.url){
            case '/':res.end("HomePage");
            break
            case '/about':res.end("i am ansh");
            break
            default:res.end("404 not found");
        }

    });

 });
myServer.listen(8000,()=>console.log("Server Started!"));