var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando Casas",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles Darwin",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  let username = req.body.messageUser;
  let message = req.body.messageText;
  messages.push({ text: message, user: username, added: new Date() });
  res.redirect("/");
});

module.exports = router;
