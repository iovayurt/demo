import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./assets/money.png";

import {Container, Row, Nav, Navbar, Card, NavDropdown} from 'react-bootstrap';

import getConfig from './config'
import reactDom from 'react-dom';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
              <Nav.Link>Transactions</Nav.Link>
              <Nav.Link>Login</Nav.Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );

}
