import React from "react"

const TodoForm = (props) => {
    return (
        <div className="form-container">
            <form className="form" onSubmit={props.handleSubmit}>
                <input 
                    className="text-box"
                    type="text" 
                    name="task" 
                    value={props.item.task || ''}
                    onChange={props.handleChange}
                    placeholder="Enter new task here"
                />
                <div className="submit-button" onClick={props.handleSubmit}>Submit</div>
            </form>
        </div>
    )
}

export default TodoForm