const { Router } = require('express');
const router = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
];

// Get Requests
router.get("/", (req, res) => {
    res.render("index", { 
        title: "Mini MessageBoard", 
        messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

// Post Requests
router.post("/new", (req, res) => {
    const author = req.body.author;
    const message = req.body.msg;
    const time = new Date();
    messages.push({ text: message, user: author, added: time });
    res.redirect("/");
});

router.post("/details", (req, res) => {
    const author = req.body.author;
    const message = req.body.msg;
    const time = req.body.time;
    res.render("details", { user: author, text: message, added: time });
})

module.exports = router;