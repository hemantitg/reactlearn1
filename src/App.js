import React, {useState} from 'react';
import './App.css';
import ExpenseItem  from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App( ) {
  const initialExpense = [];

  const [expenses, setExpenses] = useState(initialExpense);

  const saveExpenseData = (expData)=>{
    // console.log(expData);

    setExpenses((prevExpenses) =>{
      return [expData, ...prevExpenses];
    });

  }

  return (
    <div className="App">
      <h1>This is my First App</h1>
      <NewExpense onNewExpense={saveExpenseData}/>
      <div className="expenccont">
        {expenses.length === 0 && <p className="norec">No record found..</p>}

        {expenses.length > 0 && 
        expenses.map((el, index)=>(
          <ExpenseItem 
          key={index}
          title={el.title}  
          amount={el.amount} 
          date={el.date.toDateString()} />
        ))}

      </div>
    </div>
  );
}

export default App;