import React from 'react';
import ReactDOM from 'react-dom';
import Position from './Position.jsx';

class DebateFloor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // These should be populated by the DB, or sockets for each specific debate
      argumentsFor: ['These are my feeeeeeeeeelings', 'Here are moreeeee feeeeelings', 'I LOVEEEEEE IT', 'Clearly you are mistake. I CANNOT BELIEVE THIS'],
      argumentsAgainst: ['You are wrong', 'OBJECTTTTIONNNNNNNNN', 'I HATEEEEEEEE THATTTTTT', 'We do not believe in such savage ideas'],
      votesFor: 5,
      votesAgainst: 11,
      winner: "",
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
    console.log('clicked');
  }
  componentWillMount() {

    
  }
  componentDidMount() {
    // Query Database using set interval and axios for the amount of votes, and arguments

  }

  render() {
    return (
      <div className="container">
        <div className="Row">
          <div>Topic</div>
          {this.state.positions.map((position, index) => <Position handleVote={this.handleVote} key={index} position={position} />)}
  
          <Position position="Pro" arguments={this.state.argumentsPro} points={this.state.votesPro} />
          <Position position="Con" arguments={this.state.argumentsCon} points={this.state.votesCon} />
        </div>
      </div>
      )
  }
}
  export default DebateFloor;
