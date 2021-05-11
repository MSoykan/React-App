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
        ></ExpensesFilter>

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
    </div>
  );
};

export default Expenses;
