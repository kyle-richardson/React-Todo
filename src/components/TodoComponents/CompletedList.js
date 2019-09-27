import React from "react"

const CompletedList = (props) => {
    return (
        <div className="completed-container">
            {console.log(props.isShowing)}
            <h3>Completed</h3>
            <div 
                onClick={props.toggleIsShowing} 
                className="completed-button">{props.isShowing ? 'Hide Completed' : 'Show Completed'}
            </div>
            <div className={!props.isShowing && 'hide'}>
                {props.completedList.length>0 ? props.completedList.map(listItem => {
                    return (
                        <p>{`${listItem.task}`}</p>
                    )
                }) : <span>No completed items yet</span>}
            </div>
            
        </div>
    )
}

export default CompletedList