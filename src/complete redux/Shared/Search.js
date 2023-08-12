import React, { useState } from  'react'
import { useDispatch } from 'react-redux';
import { SearchingUser } from '../Redux/Action/Actions';
import { Button } from 'react-bootstrap';

function Search({users, onSearch}) {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleSearch =()=> {
        const Result = users.filter(item =>
            item.email.toLowerCase().includes(search.toLowerCase()));
            // onSearch(Result)
            dispatch(SearchingUser(Result));
    }
    return(
        <>
        <input
        type='text'
        value={search}
        placeholder = 'enter to search'
        onChange={(e)=>setSearch(e.target.value)}
        />
        <Button onClick = {handleSearch}>Search</Button>

        </>
    );
};
export default Search