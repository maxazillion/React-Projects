function generateCubes(number) {
  const colors = [
    "DarkSky w-8 h-8 bg-black border-2 border-black p-1 flex flex-col",
    "Charcoal w-8 h-8 bg-black border-2 border-black p-1 flex flex-col",
    "HoneyYellow w-8 h-8 bg-black border-2 border-black p-1 flex flex-col",
    "SafetyOrange w-8 h-8 bg-black border-2 border-black p-1 flex flex-col",
  ];

  const ret = [];

  for (let i = 0; i < number * number; i++) {
    ret.push({ color: colors[i % 4], index: i });
  }

  return ret;
}

function makeCubeDiv(cubes) {
  let startArr = [];
  let ret = [];
  let between = [];
  const root = Math.sqrt(cubes.length);

  cubes.map((cube, index) => {
    startArr.push(
      <div key={index} className={cube.color}>
        {cube.index + 1}
      </div>
    );
  });

  startArr.forEach((element, index) => {
    if (index % root === root - 1) {
      between.push(element);
      ret.push(makeCubeCols(between, index));
      between = [];
    } else {
      between.push(element);
    }
  });
  console.log(ret);

  return ret.map((cols) => {
    return cols;
  });
}

function makeCubeCols(cubes, key) {
  return (
    <div key={key} className="flex gap-2 m-2">
      {cubes.map((cube) => {
        return cube;
      })}
    </div>
  );
}

function makeCubeBlock(cubes) {
  return makeCubeDiv(cubes);
}

export { generateCubes, makeCubeBlock };
