import React from "react";
import './App.css';
import Board from './board';

const OPTIONS = [
  {value:"beginner", name:"Beginner"},
  {value:"standard", name:"Standard"},
  {value:"expert", name:"Expert"},
]


const SelectBox = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {props.options.map((option) => (
        <option
          key={option.value}
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
        <Board /> 
        <div className="line">   
        <SelectBox options={OPTIONS} defaultValue="Expert">          
        </SelectBox>
        &nbsp;
        <button>시작</button>     
          <hr/>
        </div>
    </dev>
  )
};

export default App;
