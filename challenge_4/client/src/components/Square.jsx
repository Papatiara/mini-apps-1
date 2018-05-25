import React from 'react'

class Square extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return(
        <div>
          {this.props.x}
        </div>
      )
  }
}

export default Square;