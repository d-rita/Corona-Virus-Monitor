import React from 'react';

const Search = (props) => {

    const { search } = props;
    return (
        <div className="searchSection">
            <input type="text" id="searchBar" onChange={search} placeholder="Search for country" />
        </div>
      
    )
}

export default Search
