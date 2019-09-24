import React from "react"

const Todo = (props) => {
    return (
        <div>
            {props.list.map((item,ind)=> {
                return (
                    <div>
                        <input 
                            type="checkbox" 
                            value={item.id} 
                            key={ind}
                            name={item.task}
                            checked = {item.completed}
                            onChange={props.handleCheck}
                            
                        />
                            <label 
                                className={item.completed 
                                    ? 'checked' 
                                    : 'unchecked'}
                            >
                                {item.task}
                            </label>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo