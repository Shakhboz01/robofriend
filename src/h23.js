import React from "react";

const Description=({arg,delet,myId})=>{
    return(
        <div  >
            <h2 >
                {arg.name}
            </h2>
            <h3 >
                {arg.email}
            </h3>
            <button onClick={(event)=>{delet(event,arg)}}>Delete</button>
            <button onClick={(event)=>{myId(event,arg)}} >edit</button>
        </div>
    )
}

export default Description