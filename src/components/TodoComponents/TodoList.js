// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
    return (
        <div>
            <h3>TodoList here</h3>
            <Todo key={props.id} list = {props.list} handleCheck={props.handleCheck}/>
        </div>
    )
}

export default TodoList