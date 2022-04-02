export const Config = {
  shadows: {
    mapSize: {
      x: 2048,
      y: 2048,
    },
    castShadows: false,
    receiveShadows: false,
  },
  offStage: {
    x: 0,
    y: 0,
    z: 40,
  },
  // vvv valid values are 'peaksPlayer' and 'threeClock' vvv
  timerMode: "peaksPlayer",
  // timerMode: "threeClock",
  // ^^^ ^^^
  useEffectComposer: true,
};
