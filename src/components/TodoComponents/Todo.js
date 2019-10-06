import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import { faTrash, faCheck, faMonument} from '@fortawesome/free-solid-svg-icons'
import moment from "moment"

const Todo = (props) => {
    let list = ''
    !!props.search 
        ? list=props.list.filter(ele => ele.task.includes(props.search)) 
        : list=props.list
    return (
        <div className="items-container">
            {list.map((item)=> {
                return (
                    <div key={item.id} className={`single-item`}>
                        <div 
                            className={`left-side ${item.completed ? "checked":null}`} 
                            onClick={props.handleCheck} 
                            name={item.id}
                        >
                            <div className={`far-left`}>
                                <span className="checkmark">
                                    {item.completed ? <FontAwesomeIcon icon={faCheck}/> : ""}
                                </span>
                                <span>
                                    {item.task}
                                </span>
                            </div>
                            
                            <span className="date-completed">
                                {item.completed ? `(completed on ${item.completedOn})` : null}
                            </span>
                        </div>
                        
                        <div className="delete" name={item.id} onClick={props.handleDelete}>
                            <FontAwesomeIcon className="trash-icon" icon={faTrash}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo