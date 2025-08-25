const { text } = require("express");
const messages = require("../messages")

async function newMessageController( request, response){
    try{
    response.status(200).render("form")
    }
    catch(error){
    console.log("error occured in newMessageController", error)
    response.status(500).json({ error: "error occured"})
    }
}

async function postNewMessageController(request, response){
    try{
    const { author, message } = request.body;
    const todaysDate = new Date()

    const obj = {
        text: message,
        user: author,
        added:  todaysDate
    }    
    messages.push(obj)
    response.status(200).redirect('/')
    }
    catch(error){
    console.log("error occured in postNewMessageController", error)
    response.status(500).json({ error: "error occured"})
    }
}

module.exports = { newMessageController, postNewMessageController };