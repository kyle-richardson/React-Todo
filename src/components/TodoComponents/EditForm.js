import React from "react"

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
            <button className="edit-save">Save</button>
         </form>
    )
}

export default EditForm