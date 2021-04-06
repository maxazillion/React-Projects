function GenerateCubes(number) {
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

export { GenerateCubes };
