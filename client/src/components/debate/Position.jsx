import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx';
import {Button} from 'react-bootstrap'
import axios from 'axios';
import {sortArgsByVote} from '../../utils.js'
const socket = require('socket.io-client')('http://localhost:3000/spectator');


class Position extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arguments: [],
      points: this.props.points
    }

    socket.on('chat', (data) => {

      // EDITED JUST FOR DEMO

      if (data.message.substring(0, 9) === '#disagree' && this.props.position==='Against') {
        this.addArguments(data.message.substring(10));
        console.log('#disagree called')
      }  

      if (data.message.substring(0, 6) === '#agree' && this.props.position==='For') {
        this.addArguments(data.message.substring(7));
        console.log('#agree called')
      }  
    });
    this.setToken = this.setToken.bind(this);
    this.addArguments = this.addArguments.bind(this);
    this.handleVote = this.handleVote.bind(this);
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

  handleVote() {
    this.setState({
      points: this.state.points+1
    })
    console.log('voted');
  }

  addArguments(newArg) {
    let newArgsArr = this.state.arguments.slice();
    newArgsArr.push(newArg);
    this.setState({
      arguments: newArgsArr,
    })
    console.log('added argument', this.state.arguments);
  }

  setToken() {
    if (this.props.position==='For') {
      localStorage.setItem('position', 'for')
    }  else {
      localStorage.setItem('position', 'for')
    }
  }

  render() {
    return (
      <div className='col-sm-6'>
        <h4>{this.props.position}</h4>
        <div>{this.state.points} Points</div>
        <Button onClick={this.setToken} bsStyle="success">Join</Button>
        {this.state.arguments.map( (argument, index) => <Argument handleVote={this.handleVote} argument={argument} />)}
      </div>
    )
  }
}

export default Position;