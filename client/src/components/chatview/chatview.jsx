//debate chat
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
const socket = require('socket.io-client')('http://localhost:3000');

export default class Chatview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      chat: {}
    }
    this.handleSubmit = (event) => {
      const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
      const message = ReactDOM.findDOMNode(this.refs.message).value.trim();
      console.log('Send message');
      console.log('username', username);
      console.log('message', message);
      socket.emit('chat', {
        username: username,
        message: message
      });
    };
  }

 render () {
  return (
      <div>
        <ul className="pages">
          <li className="chat page">
            <div className="chatArea">
              <ul className="messages"></ul>
            </div>
            <input className="inputMessage" ref="message" placeholder="Type here..."/>
          </li>
          <li className="login page">
            <div className="form">
              <h3 className="title">What's your nickname?</h3>
              <input className="usernameInput" ref="username" type="text" maxLength="14" />
            </div>
          </li>
          <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
        </ul>
      </div>  
      )
   }
}
