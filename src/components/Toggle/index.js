import PropTypes from "prop-types";

function Toggle({ right, left, checked }) {
  return (
    <div className="flex items-center justify-center w-full mb-12">
      <div className="ml-3 text-gray-700 font-medium px-2">{left}</div>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" />

          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>

          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium p-2">{right}</div>
      </label>
    </div>
  );
}

Toggle.propTypes = {
  right: PropTypes.string,
  left: PropTypes.string,
  checked: PropTypes.func.isRequired,
};

export default Toggle;
