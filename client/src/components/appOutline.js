import React, { Component } from 'react';
import injectTapEventPlugin  from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { CSSGrid } from './cssGrid';
import { People } from './people';

injectTapEventPlugin();

// export const routes = () => (

// );

const menuStyle = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  paddingTop: '50px',
  
};

const menuItemStyle = {
  textAlign: 'left', 
  paddingLeft: '20px',
}

class AppOutline extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
              
            <MuiThemeProvider>
            <AppBar style={{zIndex: '1301', backgroundImage: 'linear-gradient(20deg, #2b3658 0%, #523e5b 100%)'}}
              title="My Awesome App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}
            ></AppBar>
            </MuiThemeProvider>
  
            <MuiThemeProvider>
            <Router>
    <div>
  
         <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <Menu desktop={true} style={menuStyle} autoWidth={true} >
          <MenuItem primaryText="Home" style={menuItemStyle} containerElement={<Link to="/home"></Link>} />
          <MenuItem primaryText="CSS Grid" style={menuItemStyle} containerElement={<Link to="/cssGrid"></Link>} />
          <MenuItem primaryText="People" style={menuItemStyle} containerElement={<Link to="/people"></Link>} />
          <MenuItem
            primaryText="Menu Item"
            style={menuItemStyle}
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem
                primaryText="Menu Item"
                style={menuItemStyle}
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
                  <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
                  <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
                  <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
                ]}
              />,
              <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
              <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
              <MenuItem primaryText="Menu Item" style={menuItemStyle} />,
            ]}
          />
          <Divider />
          <MenuItem primaryText="Menu Item" style={menuItemStyle} />
          <MenuItem primaryText="Menu Item" style={menuItemStyle} />
          <Divider />
          <MenuItem primaryText="Menu Item" style={menuItemStyle} />
          </Menu>
          </Drawer> 

      {/* <Route exact path="/" component={Home}/> */}
      <Route path="/home" component={Home}/>
      <Route path="/cssGrid" component={CSSGrid}/>
      <Route path="/people" component={People}/>
    </div>
  </Router>
          </MuiThemeProvider>
          
          </div>
        )}
}

export default AppOutline;