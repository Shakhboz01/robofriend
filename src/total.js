import React, { Fragment, useState } from 'react';
import './index.css';
import Card from './card';
import { robots } from './robots';
import {nanoid} from 'nanoid';
import MyRobot from './myRobot';
import BasicButtonGroup from './btnGroup';
import { render } from 'react-dom';


const Total=()=>{
const [info,setInfo]=useState(robots);
const [myInput,setMyInput]=useState({
    name:'',
    email:'' 
 })
 const [editId,setId]=useState(null);
 const [myDef,setMydef]=useState('');
//edit


const myId=(event,info)=>{
event.preventDefault();
const setMyId=info.id;
setId(setMyId);

const values={
    name:info.name,
    email:info.email
}
setMyInput(values);
}
//**edit */

//delete
const delet=(event,arg)=>{
    event.preventDefault();
    const copyTask=[...info];
    const ind=copyTask.findIndex(arg2=>arg2.id==arg.id);
    copyTask.splice(ind,1);
    setInfo(copyTask);      
}
//**delete */

//input onchange



const handleChangeInp=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const copyInfo={...myInput};
    copyInfo[fieldName]=fieldValue;
     setMyInput(copyInfo);
}
//--input onchange
//inp Sub
const handleSave=(event)=>{
    event.preventDefault();
    const inp={
        id:editId,
        name:myInput.name,
        email:myInput.email
    }
   const findId=info.findIndex((arg)=>arg.id==editId);
   const copyInfo=[...info];
   copyInfo.splice(findId,1,inp);
   if(myInput.name.length==0 || myInput.email.length==0){
       return alert('This field should not be empty')
   }
   else{
    setInfo(copyInfo);
   }
   setId(null);
}
//inp Sub--

//inp cancel
const cancelBtn=(event)=>{
    event.preventDefault();
    setId(null)
}
//**inp cancel */

//btnCheck
const [checkBtn,setCheckBtn]=useState(false);

const btnClick=(event)=>{
    event.preventDefault();
    const check=!checkBtn;
    setCheckBtn(check);
}
//btnCheck--

//addForm
const [addForm,setAddForm]=useState({
    name:'',
    email:''
});
const handleChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const copyForm={...addForm};
    copyForm[fieldName]=fieldValue;
    setAddForm(copyForm);
}                
//--addForm

//FormSub
const formSubmit=(event)=>{
    event.preventDefault();
    const newVal={
        id:nanoid(),
        name:addForm.name,
        email:addForm.email
    }
    const copyInfoк=[newVal,...info];
    setInfo(copyInfoк);
    const defVal='';
    setMydef(defVal);
}
//FormSub--
const findLength=info.length;

    return(
            <div>        
            <MyRobot handleChange={handleChange}
                     btnClick={btnClick}
                     checkBtn={checkBtn}
                     formSubmit={formSubmit}
                     myDef={myDef}
            />
<p className='numUsers' >{`Number of users: ${findLength}`}</p>
 

       <div className="grid">
{info.map((arg,i) => {
           return(
               <Card 
               arg={arg} 
               i={i}
               delet={delet} 
               myId={myId}
               editId={editId}
               handleChangeInp={handleChangeInp}
               handleSave={handleSave}
               cancelBtn={cancelBtn}
                   />        
           );
    })}
             
       </div>

       <p className='noRob'>{findLength==0 ?'no robots':''}</p>
            
         </div>//end
   ) 
}
export default Total;