import './index.css'


const Card=({arg,i,delet,checkClick,myId})=>{
    return (
 <div key={i} className='item'>
 
 <div className='text'>
 <img  className="img-responsive" alt='photo' src={`https://robohash.org/${i}?200*200`}></img>
 <h2 >{arg.name}</h2>
 <h4>{arg.email}</h4>
 </div>
 <button onClick={(event)=>{delet(event,arg)}}>Delete</button>
 <button onClick={(event)=>{myId(event,arg)}} >edit</button>
</div>
);
}
export default Card;