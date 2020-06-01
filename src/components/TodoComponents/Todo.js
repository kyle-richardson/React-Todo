import React from "react"
import EditForm from "./EditForm"
import ListItem from "./ListItem"

const Todo = (props) => {
    let list = ''
    !!props.search 
        ? list=props.list.filter(ele => ele.task.includes(props.search)) 
        : list=props.list
    return (
        <div className="items-container">
            {list.map((item)=> {
                return (
                    <div key={item.id}>
                        <div className={item.isEdit ? 'hide':null}>
                            <ListItem 
                                item = {item}
                                handleCheck={props.handleCheck}
                                toggleEdit={props.toggleEdit}
                                handleDelete={props.handleDelete}
                                />
                        </div>
                        <div className={!item.isEdit ? 'hide':null}>
                            <EditForm 
                                item={item}
                                handleChange={props.handleChange}
                                toggleEdit={props.toggleEdit}
                            />
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Todo