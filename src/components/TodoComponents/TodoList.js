// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
    return (
        <div className="todolist-container">
            <div className="todo-header">
                <h1>To-do List</h1>
                <div 
                    onClick={props.clearCompleted} 
                    className="clear-button">
                        Move Completed
                </div>
            </div>   
            <Todo 
                key={props.id} 
                list = {props.list} 
                handleCheck={props.handleCheck}
                search={props.search}
                handleDelete={props.handleDelete}
            />
        </div>
    )
}

export default TodoList