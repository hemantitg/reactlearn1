import React, {useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesList from './components/Expenses/ExpensesList';

function App( ) {
  const initialExpense = [];

  const [expenses, setExpenses] = useState(initialExpense);

  const saveExpenseData = (expData)=>{
    setExpenses((prevExpenses) =>{
      return [expData, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <h1>This is my First App</h1>
      <NewExpense onNewExpense={saveExpenseData}/>
      <ExpensesList items={expenses}/>
    </div>
  );
}

export default App;