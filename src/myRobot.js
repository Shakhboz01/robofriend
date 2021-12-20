import React from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const MyRobot=({handleChange,formSubmit,btnClick,checkBtn,myDef})=>{
   return( <div>

        <button className='btnAdd' style={checkBtn?{backgroundColor: 'red'}:{backgroundColor: '#c2fbd7'} }  onClick={btnClick}>{checkBtn ? 'close':'add robot'}</button>
            {checkBtn ?
            <div>
                <form onSubmit={formSubmit} className='inpForm'>
                <input autoComplete="off" type='text' className="inp" placeholder="Enter a name" defaultValue={myDef} name="name" onChange={handleChange} required="required"/>
                <input name="email"type='text'autoComplete="off" className="inp" defaultValue={myDef}placeholder="Enter an email" required="required" onChange={handleChange}/>
                <button type="submit" >Light</button>                </form>
                </div> 
                : '' 
                }
    </div>
   )
}

export default MyRobot;