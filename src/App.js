import React, { useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import board from "./board";

const OPTIONS = [
  {value:"beginner", name:"Beginner"},
  {value:"standard", name:"Standard"},
  {value:"expert", name:"Expert"},
]


const SelectBox = (props) => {
  return (
    <select>
      {props.options.map((option) => (
        <option 
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

 const App = () => {
  return (
    <dev className="App">
        <div className="bar">
          <dev>
            mine            
          </dev>
        </div>
        <div className="line">   
        <SelectBox options={OPTIONS} defaultValue="easy">          
        </SelectBox>
        &nbsp;
        <button>선택</button>     
          <hr/>
        </div>
    </dev>
  )
};

// function App() {
//   return (
//         <div>
//           <board />
//         </div>
//   )
// };

export default App;
