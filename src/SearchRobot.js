import React from "react";

const SearchRobots=({searchChange})=>{
    return(
        <div>
            <input  type='search'className='searchInp' onChange={searchChange} placeholder="search a robot" />
        </div>
    )
}

export default SearchRobots