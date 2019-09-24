import React from "react"

const TodoForm = (props) => {
    return (
        <div className="form-container">
            <form onSubmit={e=> props.handleSubmit(e)}>
                <input 
                    className="text-box"
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