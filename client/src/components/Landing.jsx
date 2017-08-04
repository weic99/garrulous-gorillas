import React from 'react';
import DebateItem from './DebateItem.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class Landing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }

  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2>Debate App</h2>
      </div>
    )
  }
}

export default Landing;
