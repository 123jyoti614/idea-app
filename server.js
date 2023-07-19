const express=require("express");

const app= express();

app.use(express.json());

app.use(myMiddleWare);

function myMiddleWare(req,res,next){
    console.log("Inside the middle ware i created");
    next(); // it will pass on the control to the next step

}

/// stich the routes to the server

require("./routes/idea.routes")(app);

// starting server

app.listen(8080,()=>{
    console.log("sever started");
})

