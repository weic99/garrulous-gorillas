import React from 'react';
import ReactDOM from 'react-dom';
import Position from './Position.jsx';
import axios from 'axios';

class DebateFloor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // These should be populated by the DB, or sockets for each specific debate
      topic: "",
      winner: "",
      argumentsFor: ['These are my feeeeeeeeeelings', 'Here are moreeeee feeeeelings', 'I LOVEEEEEE IT', 'Clearly you are mistake. I CANNOT BELIEVE THIS'],
      argumentsAgainst: ['You are wrong', 'OBJECTTTTIONNNNNNNNN', 'I HATEEEEEEEE THATTTTTT', 'We do not believe in such savage ideas'],
      votesFor: 5,
      votesAgainst: 11,
      positions: [
        {
          position: 'For',
          points: 0,
          arguments: ['These are my feeeeeeeeeelings', 'Here are moreeeee feeeeelings', 'I LOVEEEEEE IT', 'Clearly you are mistake. I CANNOT BELIEVE THIS'],

        },
        {
          position: 'Against',
          points: 0,
          arguments: ['You are wrong', 'OBJECTTTTIONNNNNNNNN', 'I HATEEEEEEEE THATTTTTT', 'We do not believe in such savage ideas'],
        },
      ]    
    }
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(event) {
    // When a box is checked, update the value of values by 1, to the proper debate ID and proper position

    // If this get's checked for the first time and submitted
      // Update the number of votes for event.target.name?
    let checked = event.target.checked
    if (!checked) {
      console.log('already checked!')
    } else {
      console.log('checking box')
    }
  }
  componentWillMount() {

    
  }
  componentDidMount() {
 
  }


  // add new arguments
  addArguments(newArg) {
    let newArgsArr = this.state.arguments.slice();
    newArgsArr.push(newArg);
    this.setState({
      arguments: newArgsArr,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="Row">
          <div>Topic</div>
  
          <Position position="For" arguments={this.state.argumentsFor} points={this.state.votesFor} />
          <Position position="Against" arguments={this.state.argumentsAgainst} points={this.state.votesAgainst} />
        </div>
      </div>
      )
  }
}
  export default DebateFloor;
