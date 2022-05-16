const pg = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    searchPath: ['knex', 'public'],
});

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: ''
    }
})