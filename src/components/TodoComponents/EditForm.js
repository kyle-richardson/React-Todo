import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'

const EditForm = (props)=> {
    return (
        <form className="edit-form" name="form" onSubmit={e=> {
            e.preventDefault()
            props.toggleEdit(e)
        }}>
            <input 
                className="edit-text"
                type="text"
                name={props.item.id}
                value={props.item.task}
                onChange={props.handleChange}
            />
            <div className="edit-cal-container">
                <FontAwesomeIcon className="edit-calendar-icon" icon={faCalendar}/>
            </div>
            <button className="edit-save">Save</button>
            
         </form>
    )
}

export default EditForm