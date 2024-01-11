import "./InputExpenses.css";
import { faCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { classes } from "../itemsDB/items";
import ItemIcon from "./items/ItemIcon";
import Wrapper from "./wrappers/Wrapper";
import { useState } from "react";

function InputExpenses(props) {
  const [visible, setVisible] = useState(false);
  const handleVisible = (e) => {
    e.stopPropagation();
    setVisible(!visible)
  };
  const [expense, setNewExpense] = useState({
    title: "",
    amount: 0,
    category: "incoming",
    isIncome: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSaveNewExpense(expense);
    setNewExpense({
      title: "",
      amount: 0,
      category: "incoming",
      isIncome: false,
    });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setNewExpense({
      ...expense,
      [name]: value,
    });
  };

  return (
    <Wrapper
      content={
        <form className="new-expense" onSubmit={handleSubmit}>
          <ItemIcon
            onClick={handleVisible}
            icons={[faCircle, faPlus]}
            classes={classes.insurance}
            size={"fa-2x"}
          />
          <h2>Input Expenses</h2>
          <div className={`form-container ${!visible && "hidden"}`}>
            <label htmlFor="title">
              <h3>Title</h3>
            </label>
            <input
              onChange={handleInputChange}
              value={expense.title}
              type="text"
              name="title"
              id="title"
            ></input>
          </div>
          <div className={`form-container ${!visible && "hidden"}`}>
            <label htmlFor="amount">
              <h3>Amount</h3>
            </label>
            <input
              onChange={handleInputChange}
              value={expense.amount}
              type="number"
              name="amount"
              id="amount"
              max={10000}
              min={1}
              step={0.1}
            ></input>
          </div>
          <div className={`form-container ${!visible && "hidden"}`}>
            <label htmlFor="category">
              <h3>Category</h3>
            </label>
            <select
              name="category"
              onChange={handleInputChange}
              value={expense.category}
            >
              <option value="incoming">incoming</option>
              <option value="transfer">transfer</option>
              <option value="car">car</option>
              <option value="bizum">bizum</option>
              <option value="bill">bill</option>
              <option value="electricity">electricity</option>
            </select>
          </div>
          <div className={`form-container income-container ${!visible && "hidden"}`}>
            <label htmlFor="isIncome">
              <h3>is Income</h3>
            </label>
            <input
              onChange={handleInputChange}
              checked={expense.isIncome}
              type="checkbox"
              id="isIncome"
              name="isIncome"
            />
            <span className="checkmark" aria-hidden="true"></span>
          </div>
          <button className={`${!visible && "hidden"}`}>Add Record</button>
        </form>
      }
    />
  );
}

export default InputExpenses;
