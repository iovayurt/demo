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

    </Router>
  );

}
