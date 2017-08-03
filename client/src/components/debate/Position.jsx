import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx';
import axios from 'axios';
const socket = require('socket.io-client')('http://localhost:3000/for');
import {sortArgsByVote} from '../../utils.js'

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
    // Query Database using set interval and axios for the amount of votes, and arguments

    // Query DB for all args from this debate topic and this position
    // Set to state, arguments
    // position = this.props.position
    // {this.state.positions.map((position, index) => <Position handleVote={this.handleVote} key={index} position={position} />)}
    axios.get('http://127.0.0.1:3000/debates/api/getArgs', {
      params: {
        side: this.props.position.toLowerCase(),
        topic: 'Gun control in America',
      }
    })
    .then(response=> {
        let args = response.data.data;
        let topSortedArgs = sortArgsByVote(args).slice(0, 5);

        console.log('top sorted args array', topSortedArgs)
        this.setState({
          arguments: topSortedArgs
        })
        console.log('args from state', this.state.arguments);
      }
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
        <h4>{this.props.position}</h4>
        <div>{this.props.points} Points</div>
        {this.state.arguments.map( (argument, index) => <Argument handleVote={this.props.handleVote} argument={argument} />)}
      </div>
    )
  }
}

export default Position;