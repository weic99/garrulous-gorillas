import React from 'react';
import {
  Link
} from 'react-router-dom';

const DebateItem = (props) => {

  return (
    <li><Link to={`debates/${props.debate.topic.replace(/\s+/g, '-').toLowerCase()}`}>
      {props.debate.topic }
    </Link></li>
  )
}

export default DebateItem;