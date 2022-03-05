import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./assets/money.png";

import {Container, Row, Nav, Navbar, Card, NavDropdown} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import getConfig from './config'
import reactDom from 'react-dom';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
              <Nav.Link href="/transactions">Transactions</Nav.Link>
              <Nav.Link
                onClick={window.walletConnection.isSignedIn() ? logout : login}
              >
                {window.walletConnection.isSignedIn()
                  ? window.accountId
                  : "Login"
                }
                </Nav.Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {window.walletConnection.isSignedIn() ? (
        <Row>
          <Switch>
            <Route exact path='/'>MoneyMemo</Route>
            <Route exact path='/transactions'>Transactions</Route>
          </Switch>
        </Row>
        ):(
        <Row>
            <Card>
              <Card.Body>
                <Card.Title>Please Sign In</Card.Title>
              </Card.Body>
            </Card>
          </Row>
        )}
      </Container>
    </Router>
  );

}
