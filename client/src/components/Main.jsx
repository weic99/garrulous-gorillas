import React from 'react';
import DebateItem from './DebateItem.jsx'

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      exampleDebates: [
        {updated: Date(), topic: 'Gun Control', winner: null},
        {updated: Date(), topic: 'Food Safety', winner: null},
        {updated: Date(), topic: 'Should the president be impeached?', winner: null},
        {updated: Date(), topic: 'Immigration Laws', winner: null}
      ]
    }


  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <h4>List of Debates</h4>
      { this.state.exampleDebates.map( item => <DebateItem debate = {item}/>) }
      </div>
    )
  }

}

export default Main;