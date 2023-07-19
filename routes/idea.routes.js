

const ideaController =require("../controllers/idea.contoller");


//define route for the calls like

// GET 127.0.0.1:8080/ ideaApp/v1/ideas

module.exports=(app) =>{
    app.get("/ideaApp/v1/ideas" , ideaController.fetchAllIdea);


    //post call
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);

    //put call
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);
    

}