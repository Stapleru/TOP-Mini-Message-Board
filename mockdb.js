//sample messages
const messages = [
    {
      text: "Hi!",
      user: "Staplur",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "The Creator",
      added: new Date()
    },
    {
        text: "Hi there!",
        user: "noname2121",
        added: new Date()
    }
];

function getMessageById(id){
    return messages[id];
}

function getAllMessages(){
    return messages;
}

function addMessage(message){
    return messages.push(message);
}

module.exports = {getMessageById, getAllMessages, addMessage};