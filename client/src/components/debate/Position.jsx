import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx';
import axios from 'axios';
const socket = require('socket.io-client')('http://localhost:3000/for');

class Position extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arguments: []
    }
    socket.on('chat', (data) => {
      if (data.message.substring(0, 6) === '#agree') {
        this.addArguments(data.message.substring(7));
      }  
      console.log('ADDED MESSAGE')
    });
    this.addArguments.bind(this);
  }


  componentDidMount() {

    // QUERY DB for points for pro or con and set state
    axios.get('DB ACTIVE TABLES END POINT')
      .then(response=>
        console.log('Getting Point Values from [Position]')
       )

    // Query DB for all args from this debate topic and this position
    // Set to state, arguments
    // position = this.props.position
    axios.get('DB DebateArgs END POINT')
      .then(response=>
        console.log('Getting All Args from [Position]')
        )
  }




  addArguments(newArg) {
    let newArgsArr = this.state.arguments.slice();
    newArgsArr.push(newArg);
    this.setState({
      arguments: newArgsArr,
    })
  }

  render() {
    return (
      <div className='col-sm-6'>
        <h4>{this.props.position.position}</h4>
        <div>{this.props.position.points} Points</div>
        {this.state.arguments.map( (argument, i) => <Argument handleVote={this.props.handleVote} argument={argument} key={i}/>)}
      </div>
    )
  }
}

export default Position;