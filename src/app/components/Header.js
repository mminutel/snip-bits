import React, { Component } from 'react';
import { Navbar }           from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">snip-bits</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>
    );
  }
}

export default Header;