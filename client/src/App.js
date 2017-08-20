import React, { Component } from 'react';
// import { saveAs } from 'file-saver';

import './App.css';
import AppOutline from './components/appOutline.js';
// import { Home } from './components/appOutline.js';
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

class App extends Component {

  render() {
    return (
        <div className="App">
        <AppOutline />
        </div>
    );
  }
}

export default App;
