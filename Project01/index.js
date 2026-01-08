const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

//Middleware - plugin
app.use(express.urlencoded({extended: false}));

app.get("/users", (req, res)=>{
    const html = `
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul
    `;
    res.send(html);
});


app.get("/api/users", (req, res)=>{
    return res.json(users);
});

app.route("/api/users/:id").get( (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})
.patch((req, res)=> {
    return res.json({status: 'pending'});
})
.delete((req, res)=> {
    return res.json({status: "Pendind"});
});


// app.post("/api/users",(req, res)=>{
//     //TOOD : create new user
//     const body = req.body;
//     console.log('Body' ,body);
//     return res.json({status: "pending"});
// });



app.post("/api/users",(req, res)=>{
    //TOOD : create new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users), (err,data)=>{
         return res.json({status: "success", id: users.length });
    });
    
});

// app.patch("/api/users/:id",(req, res)=>{
//     // TOOD : Edit new user with id
//     return res.json({status: "pending"});

// });
// app.delete("/api/users/:id",(req, res)=>{
//     // TOOD : Delete new user with id
//     return res.json({status: "pending"});

// });

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
