import { useState } from "react";
import { Toggle } from "../../components";
import { morseCode } from "../../lib";

function MorseCode() {
  const [charUsed, setCharUsed] = useState(0);
  const [checked, setChecked] = useState(true);
  const [outputText, setOutputText] = useState("");
  const maxChar = "60";

  function handleType(event) {
    if (event.target.value.length > maxChar) {
      event.target.value = event.target.value.slice(0, -1);
    }

    setCharUsed(event.target.value.length);
    if (checked === false) {
      setOutputText(morseCode.decodeString(event.target.value));
    } else {
      setOutputText(morseCode.encodeString(event.target.value));
    }
  }

  return (
    <div className="fullScreen shadow-lg flex flex-col p-2 QueenBlue m-2 rounded-xl">
      {!checked ? (
        <h1 className="self-center text-4xl p-2">
          --/---/.-./..././-.-./---/-.././
        </h1>
      ) : (
        <h1 className="self-center text-4xl p-2">Morse Code</h1>
      )}
      <Toggle right={"Decode"} left={"Encode"} checked={setChecked} />

      {!checked ? (
        <h1 className="self center ">
          make sure to separate codes with a slash
        </h1>
      ) : (
        <h1>Encode!</h1>
      )}

      <div className="mb-3 pt-0 flex flex-col">
        <input
          type="text"
          placeholder="Enter Text!"
          onKeyUp={handleType}
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-700 relative bg-white text-black rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <div className="flex flex-col">
          <div className="self-end flex text-gray-600">
            <h1>{charUsed}</h1>
            <h1>/{maxChar}</h1>
          </div>
        </div>
        <div className="px-3 py-3 placeholder-blueGray-300 text-blueGray-700 relative SafetyOrange rounded text-base border-0 shadow outline-none flex">
          <h1 className="pr-2">Output: </h1>
          <h1 className="self-center">{outputText}</h1>
        </div>
      </div>
    </div>
  );
}

export default MorseCode;
