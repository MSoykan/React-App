import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  /*
  const expenseDate = new Date(2021, 2, 28); //2=March starting with 0
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  */
  return (
    // Using className because Class is reserved keyword in JS
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

// Cant have double <div> in a straight line kinda

export default ExpenseItem;
