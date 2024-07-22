function NextFinishBtn({index,numQuestions,dispatch}){

    if(index<numQuestions-1){
        return(

            <button className="btn-NF" onClick={()=>dispatch({type:'nextIndex'})}>

                Next
            
            </button>
    
        )

    }
     

        else{
            return(

                <button className="btn-NF" onClick={()=>dispatch({type:'finished'})}>

                    Finsih

                </button>
            )
        }

   
      
    
}

export default NextFinishBtn;