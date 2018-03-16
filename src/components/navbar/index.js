// Importando componentes de React
import React from 'react';
import logo from './../../../src/marveldex-logo.png';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './../Home';
import Login from './../login';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/"><img src={logo} alt={"logo"} weign="40" height="40"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Helvette/marveldex">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

const index = () => {
  return (
      <BrowserRouter>
      <div>
      <Route path="/" exact component = {Home}/>
      <Route path="./components/navbar/index" component = {Navbar}/>
      <Route path="./components/login" component = {Login}/>
      </div>
      </BrowserRouter>
  )
}