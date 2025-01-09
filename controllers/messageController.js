const db = require("../mockdb");

function getAllMessages(req, res){
    const messages = db.getAllMessages();
    res.render("index", {title: "Mini Message Board", messages: messages});
}

function getMessageById(req, res){
    const id = req.params.messageId;
    const message = db.getMessageById(id);
    res.render("detailedMessage", {message: message});
}

function addMessage(req, res){
    db.addMessage({text: req.body.message, user: req.body.username, added: new Date()});
    res.redirect("/")
}

module.exports = {getAllMessages, getMessageById, addMessage};