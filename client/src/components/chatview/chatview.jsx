//debate chat
import React from 'react';
import $ from 'jquery';

export default class Chatview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      chat: {}
    }
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

 render () {
  return (
      <div>
        <ul className="pages">
          <li className="chat page">
            <div className="chatArea">
              <ul className="messages"></ul>
            </div>
            <input className="inputMessage" placeholder="Type here..."/>
          </li>
          <li className="login page">
            <div className="form">
              <h3 className="title">What's your nickname?</h3>
              <input className="usernameInput" type="text" maxLength="14" />
            </div>
          </li>
        </ul>
      </div>  
      )
   }
}
