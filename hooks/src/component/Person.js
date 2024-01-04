// import './Person.css';
import { useState } from "react";


function Person() {
    const [person, setPersonInfo] = useState({
        name : "John",
        age : 27,
        enemies : ["Skynet", "T-800", "T-10000", "T-x"],
        father : "Unknown"
    });
    const updateFather = ()=>{
        setPersonInfo(previousState=>{
            return {
                ...previousState, father : "Kyle Reese"
            }
        })
    }
  return (
    <div>
        <h1>Characte Info</h1>
        <h2>Name: {person.name} </h2>
        <h2>Age: {person.age} </h2>
        <h2>Enemies: {person.enemies} </h2>
        <h2>Father: {person.father} </h2>
        <button type="button" onClick={updateFather}>Update</button>
    </div>
    );
}

export default Person;

