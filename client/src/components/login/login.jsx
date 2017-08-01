import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = (event) => {
        const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        const creds = { username: username, password: password };
        //this.props.onLoginClick(creds)
        console.log('LOG IN');
        console.log('username', username);
        console.log('password', password);
    }
  }
  
  render() {
    const {errorMessage} = this.props;
    
    return (
      <div>
        <Form inline>
            <FormGroup controlId="formHorizontalEmail">
                <ControlLabel>username </ControlLabel>
                <FormControl type="username" ref="username" onChange={this.handleChange} placeholder="username" />
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
                <ControlLabel>Password </ControlLabel>
                <FormControl type="password" ref="password" onChange={this.handleChange} placeholder="Password" />
            </FormGroup>
            <Button onClick={(event) => this.handleSubmit(event)}>Login</Button>
            {errorMessage &&
            <p style={{color:'red'}}>{errorMessage}</p>
            }
        </Form>
      </div>
    )
  }
}

export default Login;