const pg = require('knex')({
    client: 'pg',
    connection: process.env.DB_URL,
    searchPath: ['knex', 'public'],
});

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: ''
    }
})