import PropTypes from "prop-types";

function Counter({ size, setSize, max = 1000 }) {
  function increase(event) {
    if (size < max) {
      setSize((prev) => prev + 1);
    }
  }

  function decrease(event) {
    if (size > 3) {
      setSize((prev) => prev - 1);
    }
  }

  return (
    <div className="custom-number-input h-10 w-32 self-center">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          onClick={decrease}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <div className="flex bg-gray-300 pl-2 pr-2">
          <h1 className="outline-none focus:outline-none text-center w-full bg-gray-300 text-md hover:text-black focus:text-black   flex items-center text-gray-700">
            {size}
          </h1>
        </div>
        <button
          onClick={increase}
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
  max: PropTypes.number,
};
export default Counter;
