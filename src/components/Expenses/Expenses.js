import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"; // we dont need to but we can import react
import Card from "../UI/Card"; // --> because we are using css (JSX)
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearToFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          yearToShow={selectYearToFilter}
        />
         {props.expensesData.map((expense) => (
          <ExpenseItem
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
