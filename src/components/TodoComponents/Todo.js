import React from "react"

import TodoForm from "./TodoForm"

const Todo = (props) => {
    return (
        <div className="items-container">
            {props.list.map((item)=> {
                return (
                    <div className="single-item">
                        <label 
                            className={item.completed 
                                ? 'checked' 
                                : 'unchecked'}
                        >
                        <input 
                            type="checkbox" 
                            value={item.id} 
                            key={item.id}
                            name={item.task}
                            checked = {item.completed}
                            onChange={props.handleCheck}
                        />
                            {item.task}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo