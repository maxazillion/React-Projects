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

function flipCube(cubes) {
  let size = Math.sqrt(cubes.length);
  let ret = [];
  let temp = [];

  for (let i = 0; i < size; i++) {
    temp.push([]);
  }
  for (let i = 0; i < cubes.length; i++) {
    temp[i % size].push(cubes[i]);
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

const morseCode = {
  codes: {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".-----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
  },
  encodeChar: function (char) {
    return this.codes[char.toUpperCase()];
  },
  decodeChar: function (char, codes = this.codes) {
    let ret = "";
    Object.keys(codes).forEach(function (key) {
      if (char === codes[key]) {
        ret += key;
      }
    });
    return ret;
  },
  decodeString: function (str) {
    let ret = "";
    let temp = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "/") {
        ret += this.decodeChar(temp);
        temp = "";
      } else {
        temp += str[i];
      }
    }
    return ret;
  },
  encodeString: function (str) {
    let ret = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        ret += this.encodeChar(str[i]);
        ret += "/";
      } else {
        ret += " ";
      }
    }
    return ret;
  },
};

export { generateCubes, makeCubeBlock, flipCube, turnRight, morseCode };
