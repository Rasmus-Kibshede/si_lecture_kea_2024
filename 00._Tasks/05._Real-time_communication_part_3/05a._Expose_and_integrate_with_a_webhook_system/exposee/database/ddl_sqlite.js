import db from "./connection_sqlite.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS webhooks;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS webhooks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type VARCHAR(255),
    url VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`);

//     db.run(`INSERT INTO webhooks (event_type, url, password) VALUES ("alert", "https://rasmus.serveo.net/alert", "1234");`);
// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO webhooks (event_type, url, password) VALUES ("access", "http://localhost:3000/hansnen", "4321");`);
    db.run(`INSERT INTO webhooks (event_type, url, password) VALUES ("access", "http://localhost:3000/webhookdata", "4321");`);
}