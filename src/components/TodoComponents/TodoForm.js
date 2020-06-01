import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'


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
                <div className="cal-icon-container" onClick={props.changeDueDate}>
                    <FontAwesomeIcon className="form-calendar-icon" icon={faCalendar}/>
                </div>
                <div className="submit-button" onClick={props.handleSubmit}>Submit</div>
            </form>
        </div>
    )
}

export default TodoForm