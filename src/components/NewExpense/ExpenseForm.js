import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState('');

    const [isValidName, setIsValidName] = useState(true);
    const [isValidAmount, setIsValidAmount] = useState(true);


    const titleChangeHandler = (event)=>{
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event)=> setEnteredAmount(event.target.value);
    const dateChangeHandler = (event)=> setEnteredDate(event.target.value);

    const submitHandler = (event)=>{
        event.preventDefault();

        if(enteredTitle.trim().length === 0){
            setIsValidName(false);
            return;
        }
        
        if(enteredAmount.trim().length === 0){
            setIsValidAmount(false);
            return;
        }
        
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);


        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');

    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" 
                    className={`inputtxt ${!isValidName ? 'invalidtxbx' : ''}`}
                    value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" 
                    className={`inputtxt ${!isValidAmount ? 'invalidtxbx' : ''}`}
                    value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date"  value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;