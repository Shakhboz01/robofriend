import React from "react";

const Description=({i,arg,delet,myId})=>{
    return(
        <div key={i} >
            <h2>
                {arg.name}
            </h2>
            <h3>
                {arg.email}
            </h3>
            <button onClick={(event)=>{delet(event,arg)}}>Delete</button>
            <button onClick={(event)=>{myId(event,arg)}} >edit</button>
        </div>
    )
}

export default Description