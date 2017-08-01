import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
const Modal = require('react-bootstrap-modal');

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
    this.handleSubmit = (event) => {
        const username = findDOMNode(this.refs.username)
        const password = findDOMNode(this.refs.password)
        const creds = { username: username.value.trim(), password: password.value.trim() }
        this.props.onLoginClick(creds)
    }
  }
  
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  
  render() {
    const {errorMessage} = this.props;
    
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Login;