import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"; // we dont need to but we can import react
import Card from "../UI/Card"; // --> because we are using css (JSX)
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filteredArray, setFilteredArray] = useState("");
  const selectYearToFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const FILTERED_EXPENSES = props.expensesData.filter(
    (expense) => {return expense.date.getFullYear().toString() === filteredYear}
  );

  // const setFilteredArray = () => {
  //   props.ExpensesData.filter( item => item.date.getFullYear() == filteredYear);
  // };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          yearToShow={selectYearToFilter}
        />
        {FILTERED_EXPENSES.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
