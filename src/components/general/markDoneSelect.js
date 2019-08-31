import React from 'react';

const MarkDoneSelect = props => {
    return(
        // onChange={() => props.changeProgress(props.key)}
        <select className="doneSelect" value={props.progress} onChange={props.changed} >
            <option value="todo">Mark ToDo</option>
            <option value="doing">Mark In Process</option>
            <option value="done">Mark Done</option>
        </select>
    );
}

export default MarkDoneSelect;