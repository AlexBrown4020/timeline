import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost';

Vue.config.productionTip = false;

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

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  el:'#app',
  apolloProvider,
  apollo: {},
  render: (h) => h(App),
}).$mount('#app');
