const { Router } = require("express");
const messageController = require("../controllers/messageController");
const indexRouter = Router();

indexRouter.get("/", messageController.getAllMessages)

indexRouter.route("/new").get((req, res) => {
    res.render("form");
})
.post(messageController.addMessage);

module.exports = indexRouter;