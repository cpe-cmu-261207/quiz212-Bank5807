import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      {
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>620610787</p>
        <button>-</button>
        <button>reset</button>
        <button>+</button>
      </div>
    
      //{ function Counter = () => {
      //  const [Counter, setCounter] = useState(0)
      //  return <button setCounter =>
      //    +
      //    </button>
      //  }
     // }

      { function component = ( persons ) => {
        render() = () => {
         <table class="table is-bordered mb-3">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr id='persons'>
              <th>{ name }</th>
              <th>{ gender }</th>
              <th>{ age } </th> 
            </tr>
          </tbody>
      </table>
      }
    );
  }
}
export default App;
