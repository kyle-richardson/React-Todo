import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck} from '@fortawesome/free-solid-svg-icons'

const Todo = (props) => {
    let list = ''
    !!props.search 
        ? list=props.list.filter(ele => ele.task.includes(props.search)) 
        : list=props.list
    return (
        <div className="items-container">
            {list.map((item)=> {
                return (
                    <div className={`single-item`}>
                        <div className={`left-side ${item.completed ? "checked":null}`} onClick={props.handleCheck} name={item.id}>
                            <div className="checkmark">{item.completed ? <FontAwesomeIcon icon={faCheck}/> : " "}</div>
                            {item.task}
                        </div>
                        <div className="delete" onClick={props.handleDelete} name={item.id}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo