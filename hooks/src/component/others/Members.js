// import './App.css';
// import Greetings from './component/Greetings';
// // import Timer from './component/Timer';

// function App() {
//   return (
//         <Greetings name="John"></Greetings>
//     );
// }

// export default App;

import "./App.css";
import React from "react";

function App() {
  const membersList = [
    {
      id: 1,
      first_name: "Burt",
      age: 24,
    },
    {
      id: 2,
      first_name: "Debee",
      age: 50,
    },
    {
      id: 3,
      first_name: "Barney",
      age: 74,
    },
    {
      id: 4,
      first_name: "Kliment",
      age: 59,
    },
    {
      id: 5,
      first_name: "Ashla",
      age: 26,
    },
    {
      id: 6,
      first_name: "Berty",
      age: 70,
    },
    {
      id: 7,
      first_name: "Romola",
      age: 78,
    },
    {
      id: 8,
      first_name: "Bambi",
      age: 52,
    },
    {
      id: 9,
      first_name: "Skippy",
      age: 63,
    },
    {
      id: 10,
      first_name: "Gauthier",
      age: 81,
    },
  ];
  const filteredList = membersList.filter((member) => {
    return member.age < 50;
  });

  //Solucion alternativa
  return (
    <ul>
      {filteredList.map((member) => (
        <li>
          <strong>Name: </strong>
          {member.first_name}, <strong>Age: {member.age}</strong>
        </li>
      ))}
    </ul>
  );

  //Solucion chatgpt
  // return (
  //   <ul>
  //     {filteredList.map((member) => (
  //       <li>
  //         <strong>name: </strong>
  //         {member.first_name}, <strong>age: </strong>
  //         {member.age}
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default App;
