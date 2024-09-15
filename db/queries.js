const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("SELECT message, username, TO_CHAR(date, 'Mon/dd/yyyy') AS date FROM messages;");
    return rows;
}

async function addNewMessage(query) {
    const { author, message, time } = query;
    await pool.query("INSERT INTO messages (message, username, date) VALUES ($1, $2, $3)", [message, author, time]);
}

module.exports = {
    getAllMessages,
    addNewMessage
}