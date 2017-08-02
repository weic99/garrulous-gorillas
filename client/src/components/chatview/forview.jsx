//debate chat
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
const socket = require('socket.io-client')('http://localhost:3000/for');

export default class Forview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      chat: {}
    }

    this.handleSubmit = (event) => {
      const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
      const message = ReactDOM.findDOMNode(this.refs.message).value.trim();
      // console.log('Send message');
      // console.log('username', username);
      // console.log('message', message);
      socket.emit('chat', {
        username: username,
        message: message
      });
    };
    
    // Listen for chats
    socket.on('chat', (data) => {
      const output = ReactDOM.findDOMNode(this.refs.output);
      output.innerHTML += `<p><strong>${data.username}:</strong>${data.message}</p>`;
      output.lastChild.scrollIntoView();
    });
  }

 render () {
  return (
      <div>
        <div id="chat-window">
          <div id="chat-window-output" ref="output"></div>
        </div>
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
