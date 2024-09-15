#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message VARCHAR ( 255 ),
        username VARCHAR ( 50 ),
        date DATE
    );

    INSERT INTO messages (message, username, date)
    VALUES
        ('Hello there!', 'Armando', '05-03-2022'),
        ('Hello World!', 'Charles', '08-11-2023');
`;

async function main() {
    console.log("Seeding...");
    const client = new Client({
        connectionString: process.argv[2],
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Database seeding done!");
}

main();