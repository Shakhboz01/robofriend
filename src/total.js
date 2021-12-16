import React, { Fragment, useState } from 'react';
import './index.css';
import Card from './card';
import { robots } from './robots';
import Form from './form'

const Total=()=>{
const [info,setInfo]=useState(robots);

//edit
const [editId,setId]=useState(null);

const myId=(event,info)=>{
event.preventDefault();
const setMyId=info.id;
setId(setMyId);
}

//**edit */

const delet=(event,arg)=>{
    event.preventDefault();
    const copyTask=[...info];
    const ind=copyTask.findIndex(arg2=>arg2.id==arg.id);
    copyTask.splice(ind,1);
    setInfo(copyTask);      
}



    return(
       <div className="grid">
{info.map((arg,i) => {
        return  (
            <Fragment>
            {editId==arg.id ? <Form/>
            :
            <Card arg={arg} i={i} delet={delet} myId={myId}/>
            }
            </Fragment>
      
                 
        );    
    })}
       </div>
   ) 
}
export default Total;