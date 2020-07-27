import React from 'react';
import './App.scss';
import TaskComponent from "./Task/TaskComponent";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.refInputAddTask = React.createRef()
    }

    state = {
        list: [
            {
                name: 'Test 1',
                type: 'text'
            },
            {
                name: 'Test 2',
                type: 'text'
            },
            {
                name: 'Test 3',
                type: 'text'
            }
        ],
        showBlockAddTask: false,
        newTaskName: '',

    }

    showBlockAddNewTask() {
        this.setState({ showBlockAddTask: !this.state.showBlockAddTask })
    }

    createNewTask() {
        if (this.state.newTaskName === "") {
            console.log(this.refInputAddTask.current.classList)
            this.refInputAddTask.current.classList.add("error-input")
            return;
        }

        const newList = [...this.state.list];

        newList.push(
            { name: this.state.newTaskName }
        );

        this.setState({
            list: newList,
            newTaskName: '',
            showBlockAddTask: false
        })
    }

    decoratorsKeyCreateTask(event) {
        this.refInputAddTask.current.classList.remove("error-input")

        if (event.key !== 'Enter')
            return;

        this.createNewTask()
    }

    deleteTask(index) {
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({ list: newList })
    }

    changeType(task, index) {
        if (task.type === 'text') task.type = 'input'

        const newList = [...this.state.list]

        newList.splice(index, 1, task)

        this.setState({list: newList})
    }

    changeName(task, index, event) {
        if (event.key === 'Enter' && !event.target.classList.contains('red')) {
            const newList = [...this.state.list]

            task.name = event.target.value
            task.type = 'text'

            newList.splice(index, 1, task)
            this.setState({list: newList})
        }
    }

    hideInputShowText(task, index, event) {

        if (event.target.classList.contains('task')) {
            const newList = [...this.state.list]

            task.type = 'text'

            newList.splice(index, 1, task)

            this.setState({list: newList})
        }
    }

    validationInput(task, index, event) {
        const newList = [...this.state.list]
        task.name = event.target.value

        newList.splice(index, 1, task)

        this.setState({list: newList})
    }

    render() {
        return(
            <div className="to-do-app">
                <h1>ToDo List
                    <div className="header-buttons">
                        <button onClick={this.showBlockAddNewTask.bind(this)}>Add Task</button>
                    </div>
                </h1>
                <div className="blocks">
                    { this.state.showBlockAddTask ?
                        <div className="add-new-task">
                            <label>Enter the name task:</label>
                            <input
                                className={"input-add-task"}
                                ref={this.refInputAddTask}
                                type="text"
                                onKeyDown={ this.decoratorsKeyCreateTask.bind(this) }
                                onChange={event => { this.setState({newTaskName: event.target.value}) }} />
                            <button onClick={this.createNewTask.bind(this)}>Add</button>
                        </div> : null
                    }
                </div>
                <div className="list">
                    { this.state.list.length ?
                            this.state.list.map((task, index) => (
                                    <TaskComponent
                                        key={index}
                                        task={task}
                                        index={index}
                                        deleteTask={this.deleteTask.bind(this, index)}
                                        changeType={this.changeType.bind(this, task, index)}
                                        changeName={this.changeName.bind(this, task, index)}
                                        hideInputShowText={this.hideInputShowText.bind(this, task, index)}
                                        validationInput={this.validationInput.bind(this, task, index)}
                                    />
                                )
                            )
                            : <p className="none-tasks">Tasks None.</p> }
                </div>
            </div>
        )
    }

}

export default App;
