import React from "react";

export default props => {

    const inputClasses = []

    if (!props.task.name.length) {
        inputClasses.push('red')
    }

    return(
        <div className="task" onClick={props.hideInputShowText}>
            <p><span>{ props.index + 1 }.</span>
                { props.task.type === 'input' ?
                    <input
                        type="text"
                        className={inputClasses.join(' ')}
                        onKeyPress={props.changeName}
                        onChange={props.validationInput}
                        defaultValue={props.task.name}
                    />
                    :
                    <b onClick={props.changeType}>
                        {props.task.name}
                    </b>
                }
            </p>
            <button className="delete-item" onClick={props.deleteTask}>Delete Task</button>
        </div>
    )
}