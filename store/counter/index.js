const Counter = ({ value, increment, decrement }) => {
  const incrementIfOdd = () => {
    if (value % 2 !== 0) {
      increment();
    }
  };

  const incrementAsync = () => {
    setTimeout(() => {
      increment();
    }, 1000);
  };

  return (
    <div>
      <p>
        Clicked: {value} times{" "}
        <button
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
          onClick={increment}
        >
          +
        </button>{" "}
        <button
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
          onClick={decrement}
        >
          -
        </button>{" "}
        <button
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
          onClick={incrementIfOdd}
        >
          Increment if odd
        </button>{" "}
        <button
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
          onClick={incrementAsync}
        >
          Increment async
        </button>
      </p>
    </div>
  );
};

export default Counter;
