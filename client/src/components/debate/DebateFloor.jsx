import React from 'react';
import ReactDOM from 'react-dom';
import Position from './Position.jsx';

class DebateFloor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      argumentsPro: ['These are my feeeeeeeeeelings', 'Here are moreeeee feeeeelings', 'I LOVEEEEEE IT'],
      argumentsCon: ['You are wrong', 'OBJECTTTTIONNNNNNNNN', 'I HATEEEEEEEE THATTTTTT'],
    }

  }

  componentWillMount() {

    
  }

  componentDidMount() {
    // Query Database

  }

  render() {
    return (
      <div>
        <div>Topic</div>
        <Position position="Pro" arguments={this.state.argumentsPro} points="10" />
        <Position position="Con" arguments={this.state.argumentsCon} points="7" />
      </div>
      )
  }
}
  export default DebateFloor;

