import React from 'react';

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"; // we dont need to but we can import react
import Card from '../UI/Card'; // --> because we are using css (JSX)

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expensesData[0].title}
        amount={props.expensesData[0].amount}
        date={props.expensesData[0].date}
      />
      <ExpenseItem
        title={props.expensesData[1].title}
        amount={props.expensesData[1].amount}
        date={props.expensesData[1].date}
      />
      <ExpenseItem
        title={props.expensesData[2].title}
        amount={props.expensesData[2].amount}
        date={props.expensesData[2].date}
      />
      <ExpenseItem
        title={props.expensesData[3].title}
        amount={props.expensesData[3].amount}
        date={props.expensesData[3].date}
      />
    </Card>
  );
}

export default Expenses;
