import React from 'react';
import ReactDOM from 'react-dom';

const Position = (props) => (
  <div>
    <h4>{props.position}</h4>
    <div>{props.points} Points</div>
    {props.arguments.map( argument => <div>{argument}</div>)}
  </div>
  )

export default Position;