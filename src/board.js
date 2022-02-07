import React from 'react';
import reactDom from 'react-dom';
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  Square(i) {
    return <Square value={i} />;
  }
  render() {
    const status = '';

    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board">
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        <div className="board"></div>
        {this.Square(0)}{this.Square(1)}{this.Square(2)}{this.Square(3)}{this.Square(4)}{this.Square(5)}{this.Square(6)}{this.Square(7)}{this.Square(8)}{this.Square(9)}
        </div>
        </div>
    );
  }
}

// class Board extends React.Component {
//   render() {
//       let rows = [];
//       for (let y = 0; y < 10; y++) {
//           const cells = [];
//           for (let x = 0; x < 10; x++) {
//               cells.push(<Cell />);
//           }
//           rows.push(<tr>{cells}</tr>);
//       }
//       return <table><tbody>{rows}</tbody></table>;
//   }
// }

// class Cell extends React.Component {
//   render() {
//       return <td className="cell"></td>;
//   }
// }

export default Board;