import React from 'react';
import './App.css';
import TaskComponent from "./Task/TaskComponent";

class App extends React.Component {

    state = {
        list: [],
        showBlockAddTask: false,
        newTaskName: ''
    }

    showBlockAddNewTask() {
        this.setState({ showBlockAddTask: !this.state.showBlockAddTask })
    }

    createNewTask() {
        const newList = [...this.state.list]

        newList.push(
            { name: this.state.newTaskName }
        )

        this.setState({
            list: newList,
            newTaskName: '',
            showBlockAddTask: false
        })
    }

    deleteTask(index) {
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({ list: newList })
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
                                type="text"
                                onKeyDown={ event => {
                                    if (event.key === 'Enter') this.createNewTask()
                                } }
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
