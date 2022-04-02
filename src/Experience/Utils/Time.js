import EventEmitter from "./EventEmitter.js";
import * as THREE from "three";

import { Config } from "../Config/index.js";
import { get } from "lodash";

export default class Time extends EventEmitter {
  constructor(playerInstance) {
    super();

    // console.log('playerInstance', playerInstance)
    // console.log('getCurrentTime()', playerInstance.player.getCurrentTime())

    if (get(Config, "timerMode") === "peaksPlayer") {
      // vvv vvv *** WITH PEAKS PLAYER *** vvv vvv
      this.playerInstance = playerInstance;
      this.start = this.playerInstance.player.getCurrentTime();
      this.then = this.start;
      this.current = this.start;
      this.elapsed = this.playerInstance.player.getCurrentTime();
      this.delta = 16;
      const audio = document.querySelector("audio");
      if (audio) {
        audio.paused ? audio.play() : audio.pause();
      }
      // ^^^ ^^^ *** WITH PEAKS PLAYER *** ^^^ ^^^
    } else {
      // 'threeClock'
      // vvv vvv *** WITH THREE CLOCK *** vvv vvvv
      this.clock = new THREE.Clock();
      this.clock.start();
      this.elapsed = this.clock.getElapsedTime();
      this.delta = this.clock.getDelta();
      // ^^^ ^^^ *** WITH THREE CLOCK *** ^^^ ^^^
    }

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    if (get(Config, "timerMode") === "peaksPlayer") {
      // vvv vvv *** WITH PEAKS PLAYER *** vvv vvv
      const desiredFrameRateInterval = 1 / 30;
      const currentTime = this.playerInstance.player.getCurrentTime();
      const frameRateElapsed = currentTime - this.then;
      this.delta = currentTime - this.current;
      this.current = currentTime;
      this.elapsed = this.current;
      //   console.log("FRAME RATE", 1 / this.delta);
      //   console.log("*** this.elapsed", this.elapsed);
      //   console.log(frameRateElapsed);
      //   console.log(desiredFrameRateInterval);
      //   console.log(frameRateElapsed > desiredFrameRateInterval);
      if (frameRateElapsed > desiredFrameRateInterval) {
        this.then = currentTime - (frameRateElapsed % desiredFrameRateInterval);
        this.trigger("tick");
      }
      // ^^^ ^^^ *** WITH PEAKS PLAYER *** ^^^ ^^^
    } else {
      // vvv vvv *** WITH THREE CLOCK *** vvv vvv
      this.delta = this.clock.getDelta();
      this.elapsed = this.clock.getElapsedTime();
      this.trigger("tick");
      // ^^^ ^^^ *** WITH THREE CLOCK *** ^^^ ^^^
    }
    // console.log('currentTime', currentTime)
    // console.log(this.delta)
    // console.log(this.current)
    // console.log(this.elapsed)

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
