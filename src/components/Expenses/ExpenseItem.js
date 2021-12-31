import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){

    // const [title, setTitle] = useState(props.title);
    // const ClickHandler = () =>{
    //     setTitle('UPdated');
    //     console.log(title);
    // }

    return (
        <Card className="expense-item">
            <div className="expense-date">{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                {/* <h2>{title}</h2> */}
                <div className='expense-item__price'>${props.amount}</div>
                {/* <button onClick={ClickHandler}>Click Me</button>  */}
            </div>
        </Card>
    );
}

export default ExpenseItem;