import NextFinishBtn from "./NextFinishBtn";
import Options from "./Options";

function StartScreen({ questions,dispatch,select,point,index ,numQuestions,maxPoint,isOption,subjectOfQuiz}) {

    const correctAnswer=questions.correctOption

    const points=questions.points

 
  return (

   
    <div className="start">
      <div className="show-Q">{questions.question}</div>

     
  

      <div className="detail">

     
       
        <div className="point">
            Your Points:
            {
                point
            }
            
          

        </div>

        <div className="index">

            Question Num :

            {
                index 
            }
            /
            {
                 numQuestions
            }
            

        </div>

      </div>

      <div  className="show-O">

        {questions.options.map((item, i) => (

          <Options isOption={isOption} select={select} correctAnswer={correctAnswer} points={points} dispatch={dispatch}  item={item} key={i} index={i} />
          
        ))}
        
      </div>

      
        <NextFinishBtn dispatch={dispatch} index={index} numQuestions={numQuestions}/>





    </div>
  );
}


export default StartScreen;

