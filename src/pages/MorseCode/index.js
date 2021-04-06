import { useState } from "react";

function MorseCode() {
  const [charUsed, setCharUsed] = useState(0);
  const maxChar = "120";

  function handleType(event) {
    if (event.target.value.length > maxChar) {
      event.target.value = event.target.value.slice(0, -1);
    }
    setCharUsed(event.target.value.length);
  }

  return (
    <div className="fullScreen shadow-lg flex flex-col p-2 QueenBlue m-2 rounded-xl">
      <h1 className="self-center">Morse Code</h1>
      <div className="mb-3 pt-0 flex flex-col">
        <input
          type="text"
          placeholder="Placeholder"
          onKeyUp={handleType}
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white text-black rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <div className="flex flex-col">
          <div className="self-end flex text-gray-600">
            <h1>{charUsed}</h1>
            <h1>/{maxChar}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MorseCode;
