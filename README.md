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
```

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
```
