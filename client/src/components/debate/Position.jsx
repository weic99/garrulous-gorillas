import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx'
const socket = require('socket.io-client')('http://localhost:3000');

class Position extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    socket.on('chat', (data) => {
      const output = ReactDOM.findDOMNode(this.refs.output);
      output.innerHTML += `<p><strong>${data.username}:</strong>${data.message}</p>`;
      output.lastChild.scrollIntoView();
    });
  }

  


  render() {
    return (
      <div className='col-sm-6'>
        <h4>{this.props.position.position}</h4>
        <div>{this.props.position.points} Points</div>
        {this.props.position.arguments.map( (argument, i) => <Argument handleVote={this.props.handleVote} argument={argument} key={i}/>)}
      </div>
    )
  }
}

export default Position;