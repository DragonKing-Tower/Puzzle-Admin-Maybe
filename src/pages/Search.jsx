import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function Search({search,setSearch}){
    const [input,setInput] = useState(search)

    function handleClick(){
        setSearch(()=>input)
    }
    
    return (<div>
        <h2>Search Bar</h2>
        <TextField value={input} onChange={(e)=>setInput(e.target.value)}></TextField>
        <Button variant="contained" onClick={handleClick}>Search</Button>
    </div>);
}

export default Search