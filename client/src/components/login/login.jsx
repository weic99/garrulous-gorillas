import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import { Route, Redirect } from 'react-router'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      errorMessage: ''
    };
    
    this.handleSubmit = (event) => {
      const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
      const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
      const creds = { username: username, password: password };

      console.log('LOG IN with creds', creds);

      axios.post('http://localhost:3000/users/login', creds)
      .then(response => {
        console.log('[Login] Success Response:', response);
        ReactDOM.findDOMNode(this.refs.username).value = '';
        ReactDOM.findDOMNode(this.refs.password).value = '';
        
        this.setState({ redirect: true});
        localStorage.clear();
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('user_id', response.data.user_id);
      })
      .catch(error => {
        console.log('[Login] ERROR:', error);
        this.setState({ errorMessage: error.response.data.msg });
      });

    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home'/>;
    };
    return (
      <div>
        <Form inline>
          <FormGroup controlId="formHorizontalEmail">
            <ControlLabel>Username </ControlLabel>
            <FormControl type="username" ref="username" onChange={this.handleChange} placeholder="username"/>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <ControlLabel>Password </ControlLabel>
            <FormControl type="password" ref="password" onChange={this.handleChange} placeholder="Password"/>
          </FormGroup>
          <Button onClick={(event) => this.handleSubmit(event)}>Login</Button>
          {this.state.errorMessage &&
            <p style={{color:'red'}}>{this.state.errorMessage}</p>
          }
        </Form>
      </div>
    )
  }
}

export default Login;