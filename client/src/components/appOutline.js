import React, { Component } from 'react';
import injectTapEventPlugin  from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

injectTapEventPlugin();

export const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

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

const menuStyle = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  paddingTop: '50px'
};

class AppOutline extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
            <MuiThemeProvider>
            <AppBar style={{zIndex: '1301'}}
              title="My Awesome App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}
            ></AppBar>
            </MuiThemeProvider>
  
            <MuiThemeProvider>
  
         <Drawer open={this.state.open}>
          <Menu desktop={true} style={menuStyle}>
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
          <MenuItem primaryText="Menu Item" />
          <MenuItem primaryText="Menu Item" />
          <Divider />
          <MenuItem primaryText="Custom spacing..." />
          </Menu>
          </Drawer>
          </MuiThemeProvider>
          </div>
        )}
}

export default AppOutline;