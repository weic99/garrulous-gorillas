import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

class SignUp extends React.Component {
  constructor() {
    super();
    this.handleSubmit = (event) => {
        const username = findDOMNode(this.refs.username)
        const password = findDOMNode(this.refs.password)
        const creds = { username: username.value.trim(), password: password.value.trim() }
        this.props.onLoginClick(creds)
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
            <Button onClick={(event) => this.handleSubmit(event)}>Sign Up</Button>
            {errorMessage &&
            <p style={{color:'red'}}>{errorMessage}</p>
            }
        </Form>
      </div>
    )
  }
}

export default SignUp;