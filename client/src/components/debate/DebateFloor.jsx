import React from 'react';
import ReactDOM from 'react-dom';
import Position from './Position.jsx';

class DebateFloor extends React.Component {
  constructor(props) {
    super(props);

  }
  
  componentWillMount() {
    
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div>Topic</div>
        <Position position="pro" />
        <Position position="con" />
      </div>
      )
  }
}
  export default DebateFloor;

