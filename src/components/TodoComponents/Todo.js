import React from "react"

const Todo = (props) => {
    let list = ''
    !!props.search 
        ? list=props.list.filter(ele => ele.task.includes(props.search)) 
        : list=props.list
    return (
        <div className="items-container">
            {list.map((item)=> {
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