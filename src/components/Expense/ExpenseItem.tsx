import { Expense } from "../../types/types";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const ExpenseItem = (currentExpense: Expense) => {
  const { expenses, setExpenses, budget, setBudget } = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array
    setExpenses((expenses) => expenses.filter((expense) => expense.id != currentExpense.id))
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.name}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
