// import CCapture from "ccapture.js";

export default class Capturer {
  constructor() {
    this.setInstance();

    // this.ccapture.start();
  }

  setInstance() {
    const options = {
      motionBlur: true,
      frameRate: 30,
      format: "webm", // webm || gif || png || jpg || webm-mediarecorder
      quality: 99,
      workersPath: "../../src/",
      timeLimit: 60,
      frameLimit: 0,
      autoSaveTime: 0,
      onProgress: function (p) {
        console.log("PROGRESSION");
        progress.style.width = p * 100 + "%";
      },
    };

    this.ccapture = new CCapture({
      verbose: true,
      display: true,
      framerate: options.framerate,
      motionBlurFrames:
        (960 / options.framerate) * (options.motionBlur ? 1 : 0),
      quality: 99,
      format: options.format,
      workersPath: "../../src/",
      timeLimit: 2,
      frameLimit: 0,
      autoSaveTime: 0,
      onProgress: function (p) {
        console.log("PROGRESSION");
      },
    });
  }
}
