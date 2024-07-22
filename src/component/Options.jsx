function Options({ item, dispatch, index, select, correctAnswer, points }) {

   
  return (
    <button 
      disabled={select != null}
      onClick={() =>
        dispatch({
          type: "selectOption",
          paylaod: { index, correctAnswer, points },
        })
      }

      className={`option  ${index===select ? select===correctAnswer ? 'seltrue' : "selfalse" : "" } `}
    >
      {item}

    </button>
    
  );
}

export default Options;
