//  const http = require("http");
//  const fs = require("fs");
//  const url = require("url");
//  const myServer = http.createServer((req, res)=>{
//     const myurl = url.parse(req.url);
//     console.log(myurl);
//     fs.appendFile('log.txt',`${Date.now()}: ${req.url} New Req Received\n`,(err,data)=>{
//         switch(req.url){
//             case '/':res.end("HomePage");
//             break
//             case '/about':res.end("i am ansh");
//             break
//             default:res.end("404 not found");
//         }

//     });
 
//  });
// myServer.listen(8000,()=>console.log("Server Started!"));




 const http = require("http");
 const fs = require("fs");
 const url = require("url");
 const myServer = http.createServer((req, res)=>{
    const myurl = url.parse(req.url);
    console.log(myurl);
    fs.appendFile('log.txt',`${Date.now()}: ${req.method} ${req.url} New Req Received\n`,(err,data)=>{
        switch(req.url){
            case '/':
            if(req.method==="GET")res.end("HomePage");
            break;
            case '/about':res.end("i am ansh");
            break;
            case"/signup":
            if(req.method==="GET") res.end("this is my signup form page");
            else if (req.method=== "POST"){
                //DB query
                res.end("Success");
            }
            default:res.end("404 not found");
        }

    });
 
 });
myServer.listen(8000,()=>console.log("Server Started!"));