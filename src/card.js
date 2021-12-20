import React, { Fragment } from 'react';
import './index.css'
import Description from './h23';
import Form from './form';

const Card=({arg,i,delet,editId,myId,handleChangeInp,handleSave,cancelBtn})=>{
    return (
 <div className='item'>
 
    <div  className='text'key={i} >
 <img  className="img-responsive" alt='photo' src={`https://robohash.org/${i}?200*200`}></img>
        <Fragment>
        {editId==arg.id ?  
        <Form arg={arg}handleChangeInp={handleChangeInp}handleSave={handleSave} cancelBtn={cancelBtn} />  
        :   
        <Description arg={arg} delet={delet} myId={myId}/>}
        </Fragment>
    </div>
 
</div>
);
}
export default Card;