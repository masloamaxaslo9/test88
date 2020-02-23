import React from "react";

export default props => {
    return(
        <div className="task">
            <p><span>{ props.index + 1 }.</span> {props.task.name }</p>
            <button className="delete-item" onClick={props.deleteTask}>Delete Task</button>
        </div>
    )
}