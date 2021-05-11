import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  /*
  const para = document.createElement('p');
  para.textContent = ' This is also viable'; 
  document.getElementById('root').append(para);
  --> This might get cumbersome!
  */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesData={expenses} />
    </div>
    // *** lowercase elements are built in HTML elements
    // *** Wheras elemts start with uppercase are my or another
    // programmers code
  );
};

export default App;

// html code in a JS file, also not a valid JS code normally buth ere
//its working, the reason for that is this is feature JSC
// special syntax by react team. Lets have a closer look at JSX!
//
