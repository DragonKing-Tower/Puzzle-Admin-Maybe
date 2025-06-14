
import React from "react";
import {Link} from "react-router-dom"

function PuzzleList({filteredPieces}){

    return( <>
        {filteredPieces.map((peice)=>{
            return (<Link key={peice.id} to={`/puzzle/${peice.id}`}>     |  {peice.name} |  </Link>)
        })}
    </>)
}

export default PuzzleList