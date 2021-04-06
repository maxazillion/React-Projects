function generateCubes(number) {
  const colors = [
    "DarkSkyBlue w-8 h-8 bg-black p-1 flex flex-col",
    "Charcoal w-8 h-8 bg-black  p-1 flex flex-col",
    "HoneyYellow w-8 h-8 bg-black  p-1 flex flex-col",
    "SafetyOrange w-8 h-8 bg-black p-1 flex flex-col",
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

function turnLeft(cubes) {
  console.log(cubes);
  let size = Math.sqrt(cubes.length);
  let ret = [];
  let temp = [];

  for (let i = 0; i < size; i++) {
    ret.push([]);
  }
  for (let i = 0; i < cubes.length; i++) {
    ret[i % size].push(cubes[i]);
  }
  for (let i = 0; i < size; i++) {
    for (let x = 0; x < size; x++) {
      ret.push(temp[i][x]);
    }
  }
  return ret;
}

function turnRight(cubes) {
  console.log(cubes);
  let size = Math.sqrt(cubes.length);
  let temp = [];
  let ret = [];

  for (let i = 0; i < size; i++) {
    temp.push([]);
  }

  for (let i = cubes.length - 1; i > -1; i--) {
    temp[i % size].push(cubes[i]);
  }

  for (let i = 0; i < size; i++) {
    for (let x = 0; x < size; x++) {
      ret.push(temp[i][x]);
    }
  }
  return ret;
}

export { generateCubes, makeCubeBlock, turnLeft, turnRight };
