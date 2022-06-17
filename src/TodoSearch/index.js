import React from 'react';
//import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch({searchValue, setSearchValue, loading}) {

    //const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder=".........."
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export {TodoSearch};