import React from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const MyRobot=({handleChange,formSubmit,btnClick,checkBtn,myDef})=>{
   return( <div>
        <button onClick={btnClick}>{checkBtn ? 'close':'add robot'}</button>
            {checkBtn ? 
            <div>
                <form onSubmit={formSubmit}>
                <input type='text' name="name" onChange={handleChange} required="required"/>
                <input name="email"type='text'required="required" onChange={handleChange}/>
                <button >Submit</button>
                </form>
                </div> 
                : '' 
                }
    </div>
   )
}

export default MyRobot;