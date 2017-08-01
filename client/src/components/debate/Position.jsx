import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx'

const Position = (props) => (
  <div>
    <h4>{props.position}</h4>
    <div>{props.points} Points</div>
    {props.arguments.map( argument => <Argument argument={argument} />)}
  </div>
  )

export default Position;