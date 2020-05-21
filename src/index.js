import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'; 
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap

import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://35.224.135.194:5000/graphql',
});


/*client
  .query({
    query: gql`
    {
      allCompanys{
        id,
        email,
        password
      }
    }
     
    `
  })
  .then(result => console.log(result));*/



const App =
<ApolloProvider client={client}>
<Routes/>
</ApolloProvider>
ReactDOM.render(App,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
