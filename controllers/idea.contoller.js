

const ideas= require("../models/idea.model");

// search all idea

exports.fetchAllIdea=(req,res)=>{
    res.status(200).send(ideas);

}


let idCount =1;


// create new idea

exports.createIdea= (req,res) =>{
    
    //read the req body

    const idea = req.body;

    // need to generate the next idea id

    idea.id= ++idCount;

    //save it in the list of existing idea

    ideas[idCount]=idea;
    //return the response
     
    res.status(201).send(ideas[idCount]);

}

// update idea
exports.updateIdea=(req,res) =>{
    const ideaId= req.params.id;
    if(ideas[ideaId]){

        ideas[ideaId]=req.body;
        res.status(200).send(ideas[ideaId]);

    }else{
        res.status(400).send({
            message :"idea id passed was not correct"
        })
    }
}

