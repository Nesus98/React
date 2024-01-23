import "./App.css";
import Expenses from "./components/Expenses";
import InputExpenses from "./components/InputExpenses";
import { useState } from "react";

function App() {
  const [addExpense, setAddExpense] = useState({});
  const saveNewExpense = (expense) => {
    setAddExpense(expense)
  };
  return (
    <div className="main">
      <h1>Transactions</h1>
      <InputExpenses onSaveNewExpense={saveNewExpense} ></InputExpenses>
      <Expenses onNewExpense={addExpense} onClearExpense ></Expenses>
    </div>
  );
}

export default App;
