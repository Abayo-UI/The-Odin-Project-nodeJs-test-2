const messages = require("../messages")

async function indexController (request, response){
    try{
       response.status(200).render("index", { messages: messages});
    }
    catch(error){
      console.log("error occured in indexController", error)
      response.status(500).json({ error: "error occured"})
    }
}

module.exports = indexController;