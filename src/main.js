import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import { createProvider } from './vue-apollo';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

//HTTP connection to the API
const httpLink = createHttpLink({
  //Create absolute URL here
  uri:'http://localhost:4000/graphql'
});

//Cache Implementation
const cache = new InMemoryCache();

//apollo client

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
});

app.mount('#app');
