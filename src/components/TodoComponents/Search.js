import React from "react"
import Switch from "react-switch"

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
            <div className="toggle">
                <Switch className="dark-toggle" onChange={props.toggleDarkMode} checked={props.darkMode}/>
                <div style={{fontSize: '1rem'}}>Dark mode</div>
            </div>
            
        </div>
    )
}

export default Search