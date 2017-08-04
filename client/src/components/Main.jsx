import React from 'react';
import DebateItem from './DebateItem.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import DebateFloor from './debate/DebateFloor.jsx';
import axios from 'axios';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      debates: []
    }

    this.getAllActive = () => {

      axios.get('http://localhost:3000/debates/api/get')
      .then(response => {
        console.log('[Main] Get debates success:', response);
        this.setState({
          debates: response.data.data
        })
      })
      .catch(err => {
        console.log('[Main] Get debates ERROR:', err);
      })
    }
  }

  componentDidMount() {
    this.getAllActive();
  }

  render() {
    const debateIsSelected = this.props.debateIsSelected;

    if (!debateIsSelected) {
      return (
        <div>
        <h1>Debates</h1>
        <ul>
        { this.state.debates.map( (debate, i) => <DebateItem debate={debate} key={i} debateSelectHandler={this.props.debateSelectHandler} /> ) }
        </ul>
        <Switch>
        { this.state.debates.map( (debate, i) => 
          <Route path={`debates/${debate.topic.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`} component={DebateFloor} key={i} /> ) }
        </Switch>
        </div>
      )

    } else {
      return (
        <div></div>
      )
    }
  }

}

export default Main;
