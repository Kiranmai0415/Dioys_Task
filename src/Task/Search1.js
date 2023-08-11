import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Search1 = ({users, onSearch}) => {
    const [searchItem, setSearchItem] = useState('');

    const handleSearch = () => {
        const Result = users.filter(item => item.email.toLowerCase().includes(searchItem.toLowerCase()));
        onSearch(Result)
        console.log("result", Result);
    }
    return (
        <div>
            <input 
             placeholder="Search by name"
             value={searchItem}
             onChange={(e)=>setSearchItem(e.target.value)} type='text' />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    )
}

export default Search1