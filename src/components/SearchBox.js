import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2 searchbox">
            <input style={{ width: '50%' }}
                aria-label="Search Robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;