import React from "react"

const CompletedList = (props) => {
    let list = ''
    !!props.search 
        ? list=props.completedList.filter(ele => ele.task.includes(props.search)) 
        : list=props.completedList
    return (
        <div className="completed-container">
            <h3>Completed</h3>
            <div 
                onClick={props.toggleIsShowing} 
                className="completed-button">{props.isShowing ? 'Hide Completed' : 'Show Completed'}
            </div>
            <div className={!props.isShowing ? 'hide': null}>
                {list.length>0 ? list.map(listItem => {
                    return (
                        <div className="comp-item">
                            <span className="comp-task">{`${listItem.task}`}</span>
                            <span className="comp-delete" onClick={props.handleDelete} name={listItem.id}>X</span>
                        </div>
                    )
                }) : <span>{!props.search ? 'No completed items yet' : 'No items match your search'}</span>}
            </div>
            
        </div>
    )
}

export default CompletedList