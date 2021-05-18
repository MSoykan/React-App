
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  /*
  const expenseDate = new Date(2021, 2, 28); //2=March starting with 0
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  */
  // const [title, setTitle] = useState(props.title); // cant be called oıutside of the function
  // console.log("ExpenseItem evaluated by React");
  // also cant be called inside otther nested functions

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  //   //When we use setTitle we are not just assigning new
  //   // value to the variable we also re-evaluate the component
  //   // which this function was called in
  // };

  // We create clickHandler outside onClick to keep the code clean
  // --> leaner in this case.

  return (
    // Using className because Class is reserved keyword in JS
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};
// onClick we dont use ClickHandler() because we want to
// make this code happen on click not when the JSX code is evaluated
// tweak: çimdik
// Cant have double <div> can have only one root

export default ExpenseItem;
