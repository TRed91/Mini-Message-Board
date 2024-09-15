const db = require('../db/queries');

async function indexGet(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', {
        title: 'Mini MessageBoard',
        messages: messages,
    });
}

function newMessageGet(req, res) {
    res.render('form');
}

async function newMessagePost(req, res) {
    const author = req.body.author;
    const message = req.body.msg;
    const time = new Date().toISOString();
    await db.addNewMessage({ author, message, time });
    res.redirect("/");
}

function messageDetailsPost(req, res) {
    const author = req.body.author;
    const message = req.body.msg;
    const time = req.body.time;
    res.render("details", { user: author, text: message, added: time });
}



module.exports = {
    indexGet,
    newMessageGet,
    newMessagePost,
    messageDetailsPost
}