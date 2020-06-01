import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck} from '@fortawesome/free-solid-svg-icons'

const ListItem = (props) => {
    const item = props.item
    return (
        <div className="single-item">
            <div 
                className={`left-side ${item.completed ? "checked":null}`} 
                onClick={props.handleCheck} 
                name={item.id}
            >
                <div className={`far-left`}>
                    <span className="checkmark">
                        {item.completed ? <FontAwesomeIcon icon={faCheck}/> : ""}
                    </span>
                    <div>
                        <p>
                            {item.task}
                        </p>
                        {!!item.dueDate && 
                        <p className="duedate-text">
                            {item.dueDate}
                        </p>}
                    </div>
                    
                </div>
                
                <span className="date-completed">
                    {item.completed ? `(completed on: ${item.completedOn})` : null}
                </span>
            </div>
            <div 
                className="edit" 
                name={item.id} 
                onClick={e=>{
                    props.toggleEdit(e)
                    document.querySelector('.edit-text').focus()
                }}>
                    Edit
            </div>
            <div className="delete" name={item.id} onClick={props.handleDelete}>
                <FontAwesomeIcon className="trash-icon" icon={faTrash}/>
            </div>
        </div>
        
    )
}

export default ListItem