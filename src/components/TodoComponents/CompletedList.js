import React from "react"

const CompletedList = (props) => {
    let list = ''
    !!props.search 
        ? list=props.completedList.filter(ele => ele.task.includes(props.search)) 
        : list=props.completedList
    return (
        <div className="completed-container">
            <div className="completed-header">
                <h3>Completed</h3>
                <div 
                    onClick={props.toggleIsShowing} 
                    className="completed-button">{props.isShowing ? 'Hide Completed' : 'Show Completed'}
                </div>
            </div>
            
            <div className={!props.isShowing ? 'hide': null}>
                {list.length>0 ? list.map(listItem => {
                    return (
                        <div key={listItem.id} className="comp-item">
                            <div className="comp-left">
                                <span className="comp-task">{`${listItem.task}`}</span>
                                <span className="date-completed">
                                    (completed on {listItem.completedOn})
                                </span>
                            </div>
                            <div className="comp-delete" onClick={props.handleDelete} name={listItem.id}>X</div>
                        </div>
                    )
                }) : <span>{!props.search ? 'No completed items yet' : 'No items match your search'}</span>}
            </div>
            
        </div>
    )
}

export default CompletedList