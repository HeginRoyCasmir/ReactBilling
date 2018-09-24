import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Col, Image, FormControl } from 'react-bootstrap';
import logo from '../src/images/logo.png';
import '../node_modules/normalize.css/normalize.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <div class="container-fluid">
          <Col xs={12}>
            <div>
              <Image className="logos" src={logo} rounded />
            </div> 
          </Col>
          <Col xs={12}>
            <div className="credentials">
            <div className="wrapper">
			        <h1 className="headingFancy">Login</h1>
            </div>

            <div className="loginForm">

            <form>
            <FormControl id="formControlsText" type="text" label="Text" placeholder="Enter text" />
            <FormControl id="formControlsEmail" type="email" label="Email address" placeholder="Enter email"/>
            </form>

            </div>

            </div>
          </Col>

            
          </div>
      </div>
    );
  }
}

export default App;
