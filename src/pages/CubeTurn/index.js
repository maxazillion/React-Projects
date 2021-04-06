import { useState } from "react";
import { Counter } from "../../components";
import { GenerateCubes } from "../../lib";

function CubeTurn() {
  const [size, setSize] = useState(4);
  const [cubes, setCubes] = useState(GenerateCubes(size));
  const [cubeCounter, setCubeCounter] = useState(0);

  console.log(size);
  return (
    <div className="fullScreen shadow-lg min-h-screen flex flex-col p-2 QueenBlue m-2 rounded-xl">
      <h1 className="self-center p-2 text-4xl">Cuboid</h1>
      <Counter size={size} setSize={setSize} max={8} />
      <div className="self-center m-2">
        <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">&larr;</span>
        </button>
        <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">&rarr;</span>
        </button>
      </div>
      <div className="flex gap-2">
        {cubes.map((cube, index) => {
          return (
            <div key={index} className={cube.color}>
              <h1 className="text-white self-center">{cube.index + 1}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CubeTurn;
