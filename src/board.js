import React from 'react';

export default class board extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "test",
        };
      }

    render() {
      return <div>
          <h1>
              {this.state.text}
          </h1>
          <button>button</button>
      </div>;
    }
  }