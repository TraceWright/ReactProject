import React, { Component } from 'react';
// import { saveAs } from 'file-saver';

import './App.css';
import AppOutline from './components/appOutline.js';
import { Home } from './components/appOutline.js';
// import ChannelsListWithData from './components/ChannelsListWithData';

// import {
//   ApolloClient,
//   ApolloProvider,
// } from 'react-apollo';

// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
// import { typeDefs } from './schema';

// app.post('/login', passport.authenticate('local', { successRedirect: '/',
// failureRedirect: '/login' }));

// const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema });

// const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

// const client = new ApolloClient({
//   networkInterface: mockNetworkInterface,
// });

function personRequest() {
  const params = {
      method: 'GET',
      keepalive: true,
      headers: {
          Accept: 'application/json'
      },
  };
  const result = fetch('http://localhost:4000/person/', params);
  result.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  })
};

function showPerson() {
  let data = personRequest();
  console.log(data);
}

class App extends Component {

  render() {
    return (

        <div className="App">
       
        <AppOutline />
        <Home />
          <button onClick={showPerson}>List People</button>

        </div>
    );
  }
}

export default App;
