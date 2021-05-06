import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  /*
  const expenseDate = new Date(2021, 2, 28); //2=March starting with 0
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  */
  return (
    // Using className because Class is reserved keyword in JS
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

// Cant have double <div> in a straight line kinda

export default ExpenseItem;
