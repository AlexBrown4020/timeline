# timeline

## Project setup
```
1. Run: vue ui - Opens the vue user interface on local host, create new project.
2. Run: vue add eslint - Add linter error checking for project.
3. Run: npm add apollo / npm install --save @vue/apollo-composable - Ensure you have an apollo account when for installation. Run: npm run apollo to start the server.
4. Run: npm install --save graphql - Install graphql dependencies
5. Test that apollo client can listen for the inbuilt queries (e.g. hello) by writing in the apollo terminal: query Query { hello(name:"Your name here")} If it can respond with your name, it is connected.
6. Run: npm install pg --save - Install postgres as our database.
7. Run: npm install knex --save - Install knex for communicating between our database and backend.
8. Run: npm install express dotenv --save - Install express and dotenv for handling .env files and application framework for node.js.
9. Run: knex init - Initialize a knexfile into your project.
10. Run: knex migrate:up / knex migrate:latest - populate database with tables.
11. Run: knex seed:run - populate the tables with sample data.
12. Require Heroku, depending on the system you are running: ("https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli")
13. Run: psql --host=yourHostName --port=portNumber --username=yourUserName --password=yourPassword --dbname=yourDbName - Ensure you check heroku's settings for your database credentials.  The order of the credentials is important.  You will be prompted for a password, use herokus database password.
```herok

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Dependencies and Packages
```
- Vue (V2)
- eslint
- apollo server
- GraphQL
- Postgres
- Knex
- dotenv
- express
```
