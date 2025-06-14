
import React from "react";
import {Link,useNavigate} from "react-router-dom"


function PuzzleList({filteredPieces}){
const navigate = useNavigate()
  //these could be consolidated into one usething but not worth it for 3 of them ondiffereent pages and simple logic

    return( <>
        {filteredPieces.map((peice)=>{
            return (<Link key={peice.id} to={`/puzzle/${peice.id}`}>     |  {peice.name} |  </Link>)
        })}
        
    </>)
}

export default PuzzleList