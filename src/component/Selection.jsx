import { useState } from "react";

function Selection({dispatch}) {

 
    const handlerClickStart=()=>{
    
        dispatch({type:'start'})

      }

      const [sub ,setSub]=useState(null)

      const [num,setNum]=useState(null)
      
     


  return (
   
    <div className="select">

<form onChange={(e)=>setSub(e.target.value)} className="selection">
      <p>Choose the subject of the quiz :</p>
      <select    name="">
        <option value="react">React Knowledge</option>
        <option value="movie">Movie Knowledge</option>
        <option value="football">Football Knowledge</option>

      </select>
    </form>
   

    <form onChange={(e)=>setNum(e.target.value)} className="selection">
      <p>Number of Questions :</p>
      <select  name="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>

      </select>
    </form>

    <button disabled={sub===null  || num==null}  className={`config-btn ${sub===null  || num==null ? 'disable' :''}`} onClick={(e)=>dispatch({type:'loading' , payload:{sub,num}} )}>Save Configuration</button>


    <button className="start-btn" onClick={handlerClickStart}>Start Quiz</button>

    </div>
  );

}


export default Selection;


 
