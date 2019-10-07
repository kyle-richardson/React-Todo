import React from "react"

const Search = (props) => {
    return (
        <div className="search-container">
            <input 
                className="search-box"
                type="text" 
                name="search" 
                value={props.search || ''}
                onChange={props.handleChange}
                placeholder="Search"
            />
            <div onClick={()=>{
                const body = document.querySelector('body')
                const app = document.querySelector('.app-container')
                const items = document.querySelector('.items-container')
                items.classList.toggle('dark-mode-list')
                body.classList.toggle('dark-mode')
                app.classList.toggle('dark-mode')
                }
            }>
                Toggle Dark Mode
            </div>
        </div>
    )
}

export default Search