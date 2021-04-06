import { useState } from "react";
import { Toggle } from "../../components";

function MorseCode() {
  const [charUsed, setCharUsed] = useState(0);
  const [checked, setChecked] = useState(false);
  const maxChar = "120";

  function handleType(event) {
    if (event.target.value.length > maxChar) {
      event.target.value = event.target.value.slice(0, -1);
    }
    setCharUsed(event.target.value.length);
  }

  return (
    <div className="fullScreen shadow-lg flex flex-col p-2 QueenBlue m-2 rounded-xl">
      <h1 className="self-center text-4xl p-2">Morse Code</h1>
      <Toggle right={"encode"} left={"decode"} status={setChecked} />
      <div className="mb-3 pt-0 flex flex-col">
        <input
          type="text"
          placeholder="Placeholder"
          onKeyUp={handleType}
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-700 relative bg-white text-black rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
