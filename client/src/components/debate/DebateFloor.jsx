import React from 'react';
import ReactDOM from 'react-dom';
import Position from './Position.jsx';
import axios from 'axios';
import ChatView from '../chatview/chatview.jsx';
import ForView from '../chatview/forview.jsx';
import AgainstView from '../chatview/againstview.jsx';


class DebateFloor extends React.Component {
  constructor(props) {
    super(props);
    // ToDo: now that we passed in currentDebate in debatefloor, write the logic in DebateFloor.jsx to show the debate info
    // CurrentDebate is accessible at this.props.currentDebate
    this.state = {
      showJoinButton: true,
      // These should be populated by the DB, or sockets for each specific debate
      topic: this.props.currentDebateSelected.topic,
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
  }

  componentWillMount() {

    
  }
  componentDidMount() {
 
  }

  setToken(position) {
    if (position==='for') {
      localStorage.setItem('position', 'for')
    }  else {
      localStorage.setItem('position', 'against')
    }
    this.setState({
      showJoinButton: false,
    })
    console.log(position)
    console.log('token set');
    this.forceUpdate();
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
    const debateIsSelected = this.props.debateIsSelected;

    if (debateIsSelected) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3"><h2>{this.props.currentDebateSelected.topic}</h2></div>
        </div>
          <div className="row">
            <Position position="For" 
                      arguments={this.state.argumentsFor} 
                      points={this.state.votesFor} 
                      setToken={this.setToken.bind(this, 'for')} 
                      showJoinButton={this.state.showJoinButton}
                      // change to props later
                      topic={this.state.topic} />
            <Position position="Against" 
                      arguments={this.state.argumentsAgainst} 
                      points={this.state.votesAgainst} 
                      setToken={this.setToken.bind(this, 'against')} 
                      showJoinButton={this.state.showJoinButton}
                      // change to props later
                      topic={this.state.topic} />
          </div>
          <div className='row' >
            { localStorage.position === 'for' ? <ForView /> : null}
            { localStorage.position === 'against' ? <AgainstView /> : null}
            { localStorage.position ? null : <ChatView />}
          </div>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default DebateFloor;
