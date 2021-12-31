import React, {useState} from "react";
import './ExpensesList.css';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpenseItem  from '../Expenses/ExpenseItem';

const ExpensesList = (props)=>{

    const [filterdYear, setFilterYear] = useState('');
    let fData = []; 
    if(filterdYear == ''){
        fData = props.items;
    }else{
        fData = props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === filterdYear;
        }); 
    }

    const filterByYear = (year)=> setFilterYear(year);

    return (
        <div>
            <ExpenseFilter onFilterSelected={filterByYear}/>

            <div className="expenccont">
                {fData.length === 0 && <p className="norec">No record found..</p>}

                {fData.length > 0 && 
                fData.map((el, index)=>(
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

export default ExpensesList;