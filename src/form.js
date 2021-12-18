import React from 'react'

const Form=({arg,handleChangeInp,handleSave,cancelBtn})=>{
    return(
<div>
    <form>
    <h2>
<input name='name'  defaultValue={arg.name} onChange={handleChangeInp} ></input>
    </h2>
    <h3>
<input name='email' defaultValue={arg.email} onChange={handleChangeInp} ></input>
    </h3>
    <button onClick={handleSave}>save</button>
    <button onClick={cancelBtn}>cancel</button>
    </form>
</div>
    )
    }

export default Form;