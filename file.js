const fs = require("fs")

// // //sync
// fs.writeFileSync("./ansh.txt","Hello I am ansh");
// // //Async
// fs.writeFile("./ansh.txt", "Ansh Rajput",(err)=>{});

// //sync
// const result=fs.readFileSync("./contact.txt","utf-8")
// console.log(result);

// //Async

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// }); 


fs.appendFileSync("./ansh.txt",`${Date.now()} Hey there\n`);