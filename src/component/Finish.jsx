function Finish({ point, index, dispatch }) {
  return (
    <div className="mt-10 text-[1.5rem] flex flex-col items-center text-center">
      <p className="bg-green-600 rounded-t-lg py-1 px-4">Finish</p>
      <p className="bg-green-600 rounded-t-lg py-1 px-4">nice to meet you</p>
      <p className="bg-green-600 rounded-t-lg py-1 px-4">
        Your Point is{" "}
        <span className="underline underline-offset-4">{point}</span> from{" "}
        {"  "}
        <span className="underline underline-offset-4">{index}</span> Questions
      </p>
      <p className="mt-4">for Start new Quiz Reloal your page</p>
    </div>
  );
}
export default Finish;
