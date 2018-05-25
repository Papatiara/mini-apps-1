import React from 'react';
import Square from './Square.jsx';

class App extends React.Component {
  constructor(props) {
      super(props);
  
    this.state = {
      square: 'connect four'
    }

  }
  render() {
      return(
        <div>
          <Square x={0} y={0}/>
          <Square x={1} y={0}/>
          <Square x={2} y={0}/>       
      </div>
      )
  }
}

export default App;