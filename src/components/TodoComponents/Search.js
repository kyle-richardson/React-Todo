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
        </div>
    )
}

export default Search