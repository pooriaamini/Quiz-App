function NextFinishBtn({ index, numQuestions, dispatch, select }) {
  if (index < numQuestions - 1) {
    return (
      <button
        disabled={select == null}
        className={`btn-NF ${select == null ? "opacity-[.6]" : ""}`}
        onClick={() => dispatch({ type: "nextIndex" })}
      >
        Next
      </button>
    );
  } else {
    return (
      <button className="btn-NF" onClick={() => dispatch({ type: "finished" })}>
        Finsih
      </button>
    );
  }
}

export default NextFinishBtn;
