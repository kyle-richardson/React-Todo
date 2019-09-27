// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
    return (
        <div className="todolist-container">
            <h3>To-do List</h3>
            <div 
                onClick={props.clearCompleted} 
                className="clear-button">Move Completed
            </div>
            <Todo 
                key={props.id} 
                list = {props.list} 
                handleCheck={props.handleCheck}
                search={props.search}
            />
        </div>
    )
}

export default TodoList