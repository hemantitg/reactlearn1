import React from "react";

const filterStyle = {
    width: '152px',
    padding: '5px',
    fontSize: '16px',
    marginBottom: '15px'
};

const clearbtncss = {
    padding:'6px',
    margin:'0 10px'
};

const ExpenseFilter = (props)=>{

    const years = [2020, 2021, 2022];
    const filterChangeHandler = (event)=>{
        props.onFilterSelected(event.target.value);
    }

    const onFilterClearedClick = ()=>{
        props.onFilterSelected('');
    }

    return (
        <div>
            <select style={filterStyle} onChange={filterChangeHandler}>
                <option value="">Please Select</option>
                {years.map((el, i)=>{
                    return <option key={i} value={el}>{el}</option>;
                })}
            </select>
            <button style={clearbtncss} type="button" onClick={onFilterClearedClick}>Clear Filter</button>
        </div>
    );
}

export default ExpenseFilter;