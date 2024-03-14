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

// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO webhooks (event_type, url, password) VALUES ("alert", "https://rasmus.serveo.net/alert", "1234");`);
    db.run(`INSERT INTO webhooks (event_type, url, password) VALUES ("access", "https://Hans.serveo.net/notification", "4321");`);
}