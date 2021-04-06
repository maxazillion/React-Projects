import { useEffect, useState } from "react";
import { Counter } from "../../components";
import { flipCube, generateCubes, makeCubeBlock, turnRight } from "../../lib";

function CubeTurn() {
  const [size, setSize] = useState(5);
  const [cubes, setCubes] = useState(generateCubes(size));
  const [numberedCubes, setNumberedCubes] = useState(generateCubes(size));

  useEffect(() => {
    setNumberedCubes(generateCubes(size));
  }, [size]);

  useEffect(() => {
    setCubes(numberedCubes);
  }, [numberedCubes]);

  function handleRightTurn(event) {
    setNumberedCubes(turnRight);
  }

  function handleFlip(event) {
    setNumberedCubes(flipCube);
  }

  return (
    <div className="fullScreen shadow-lg flex flex-col p-2 QueenBlue m-2 rounded-xl">
      <h1 className="self-center p-2 text-4xl">Cube</h1>
      <Counter size={size} setSize={setSize} max={9} setCubes={setCubes} />
      <div className="self-center m-2">
        <button
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={handleFlip}
        >
          <span className="m-auto text-2xl font-thin">Flip!</span>
        </button>
        <button
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
          onClick={handleRightTurn}
        >
          <span className="m-auto text-2xl font-thin">Turn!</span>
        </button>
      </div>
      <div className="self-center">{makeCubeBlock(cubes)}</div>
      <div className="flex gap-2"></div>
    </div>
  );
}

export default CubeTurn;
