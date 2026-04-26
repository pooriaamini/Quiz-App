import { useState } from "react";

function Selection({ dispatch }) {
  const [sub, setSub] = useState("react");
  const [num, setNum] = useState(5);

  return (
    <form onSubmit={(e) => dispatch({ type: "start" })} className="select">
      <div className="selection">
        <p className="cursor-default">Choose the subject of the quiz :</p>
        <select
          onChange={(e) => setSub(e.target.value)}
          className="cursor-pointer"
        >
          <option value="react">React Knowledge</option>
          <option value="movie">Movie Knowledge</option>
          <option value="football">Football Knowledge</option>
        </select>
      </div>

      <div className="selection">
        <p className="cursor-default">Number of Questions :</p>
        <select
          onChange={(e) => setNum(e.target.value)}
          className="cursor-pointer"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <button
        type="button"
        disabled={(sub === "react") & (num == 5)}
        className={`config-btn ${(sub === "react") & (num == 5) ? "disable" : ""}`}
        onClick={(e) => dispatch({ type: "loading", payload: { sub, num } })}
      >
        Save Configuration
      </button>

      <button type="submit" className="start-btn">
        Start Quiz
      </button>
    </form>
  );
}

export default Selection;
