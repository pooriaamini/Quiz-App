import { useEffect, useReducer } from "react";
import Header from "./component/header";
import Selection from "./component/selection";
import StartScreen from "./component/startScreen";
import Finish from "./component/finish";
// initial state for reducer
// question for recived data in questions.json
// status for change and control component
// index start 0 to len(question)-1 with click next button index=+1
// define select to save index of option we selected
// define trueAnswer for save index of correctOption
// difine point for Collect the points
// console.log(ques['movie'].at(0))
const initialstate = {
  questions: [],
  status: "load",
  index: 0,
  subjectOfQuiz: "react",
  numberOfQuiz: 5,
  select: null,
  point: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      const { sub, num } = action.payload;
      return {
        ...state,
        subjectOfQuiz: sub !== false ? sub : "react",

        numberOfQuiz: num !== false ? num : state.numberOfQuiz,
        status: "saveData",
      };

    case "dataRecived":
      return {
        ...state,
        questions: action.paylaod,
        status: "saveData",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "started",
      };

    case "nextIndex":
      return {
        ...state,
        index: state.select !== null ? state.index + 1 : state.index,
        select: null,
      };

    case "selectOption":
      const { index, correctAnswer, points } = action.paylaod;
      return {
        ...state,
        select: index,
        point: correctAnswer == index ? state.point + points : state.point,
      };

    case "finished":
      return {
        ...state,
        status: "finish",
      };

    default:
      throw new Error("Action Unknow");
  }
}
function App() {
  const [
    { questions, status, index, select, point, subjectOfQuiz, numberOfQuiz },
    dispatch,
  ] = useReducer(reducer, initialstate);

  const maxPoint = questions.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.points;
  }, 0);

  useEffect(
    function () {
      fetch(`http://localhost:9000/${subjectOfQuiz}`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataRecived", paylaod: data }))
        .catch(() => dispatch({ type: "dataFailed" }));
    },
    [subjectOfQuiz],
  );

  return (
    <>
      <div className="app">
        {status === "error" && (
          <p className="mt-10 text-xl">
            please run <strong>npm run server</strong> in terminal to start json
            server
          </p>
        )}
        {status === "saveData" && (
          <div>
            <Header />
            <Selection dispatch={dispatch} />
          </div>
        )}

        {status === "started" && (
          <>
            <StartScreen
              subjectOfQuiz={subjectOfQuiz}
              maxPoint={maxPoint}
              numQuestions={numberOfQuiz}
              point={point}
              index={index}
              select={select}
              dispatch={dispatch}
              questions={questions[index]}
            />
            <button
              className="bg-white text-black px-4 py-1 mt-14 rounded-md text-[1.5rem]"
              onClick={() => dispatch({ type: "finished" })}
            >
              Cancell and Finish
            </button>
          </>
        )}

        {status === "finish" && (
          <Finish point={point} dispatch={dispatch} index={index} />
        )}
      </div>
    </>
  );
}

export default App;
