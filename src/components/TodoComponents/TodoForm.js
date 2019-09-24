import React from "react"

const TodoForm = (props) => {
    return (
        <div>
            <h3>TodoForm here</h3>
            <form onSubmit={e=> props.handleSubmit(e)}>
                <input 
                    type="text" 
                    name="task" 
                    value={props.item.task || ''}
                    onChange={props.handleChange}
                    placeholder="Enter new task here"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm