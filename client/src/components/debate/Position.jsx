import React from 'react';
import ReactDOM from 'react-dom';
import Argument from './Argument.jsx'

const Position = (props) => (
  <div>
    <h4>{props.position}</h4>
    <div>{props.points} Points</div>
    {props.arguments.map( (argument, i) => <Argument argument={argument} key={i}/>)}
  </div>
  )

export default Position;