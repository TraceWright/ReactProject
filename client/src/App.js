import React, { Component } from 'react';
// import express from 'express';
// import { saveAs } from 'file-saver';
import injectTapEventPlugin  from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import './App.css';
// import ChannelsListWithData from './components/ChannelsListWithData';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'

// import {
//   ApolloClient,
//   ApolloProvider,
// } from 'react-apollo'; 


// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
// import { typeDefs } from './schema';

injectTapEventPlugin();

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

// app.post('/login', passport.authenticate('local', { successRedirect: '/',
// failureRedirect: '/login' }));

export const routes = () => (
  <Router>
    <div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
); 

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

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return ( 
        
        <div className="App">
          
          

       <MuiThemeProvider>
          <AppBar
            title="My Awesome App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
           
        
       <Drawer open={this.state.open}>
        <Menu desktop={true} width={320} style={style}>
        <MenuItem primaryText="Single" insetChildren={true} />
        <MenuItem primaryText="1.15" insetChildren={true} />
        <MenuItem primaryText="Double" insetChildren={true} />
        <MenuItem
          primaryText="Custom: 1.2"
          checked={true}
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" checked={true} />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                <MenuItem primaryText="Rules" checked={true} />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]}
        />
        <Divider />
        <MenuItem primaryText="Add space before paragraph" />
        <MenuItem primaryText="Add space after paragraph" />
        <Divider />
        <MenuItem primaryText="Custom spacing..." />
        </Menu>
          </Drawer>
          </AppBar>
        </MuiThemeProvider>

        <Home/>
          <button onClick={showPerson}>List People</button>

        </div>
    );
  }
}

export default App;
