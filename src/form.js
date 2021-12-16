import React from 'react'

const Form=({handleChange})=>{
    return(
<div className='setForm'>
<input name='name'    onChange={handleChange}></input>
<input name='email'   onChange={handleChange}></input>
</div>
    )
}

export default Form;