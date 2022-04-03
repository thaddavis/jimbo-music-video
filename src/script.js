import Experience from "./Experience/Experience.js";
import Peaks from "peaks.js";

import { Config } from "./Experience/Config/index.js";
import { get } from "lodash";

import alt_main_for_fire_text from "./alt_main_for_fire_text";

import "./styles/style.css";

const options = {
  zoomview: {
    container: document.getElementById("zoomview-container"),
  },
  overview: {
    container: document.getElementById("overview-container"),
  },
  mediaElement: document.querySelector("audio"),
  webAudio: {
    audioContext: new AudioContext(),
  },
};

const main = () => {
  if (get(Config, "timerMode") === "peaksPlayer") {
    // vvv vvv *** WITH PEAKS PLAYER *** vvv vvv
    Peaks.init(options, function (err, peaks) {
      // console.log('init Peaks')
      window.peaks = peaks;
      peaks.on("player.seeked", (e) => {
        // console.log('event player.seeked', e)
      });
      peaks.on("player.timeupdate", (e) => {
        let ele = document.getElementById("debug");
        if (ele) ele.innerHTML = `${e}`;
        // console.log('event player.timeupdate', e)
        // if (e > 84) {
        //     window.peaks.player.seek(29)
        // }
      });
      peaks.on("player.playing", (e) => {
        // console.log('event player.playing', e)
      });
      peaks.on("player.seeked", function (e) {
        console.log("event player.seeked", e);
        if (window && window.experience) {
          window.experience.destroy();
          delete window.experience;
          const experience = new Experience(
            document.querySelector("canvas.webgl"),
            window.peaks
          );
          // debugger
        }
      });
      const experience = new Experience(
        document.querySelector("canvas.webgl"),
        peaks
      );
    });
    // ^^^ ^^^ WITH PEAKS PLAYER *** ^^^ ^^^

    const audio = document.querySelector("audio");
    if (audio) {
      window.addEventListener("keydown", function (event) {
        var key = event.which || event.keyCode;
        if (key === 32) {
          // spacebar
          // eat the spacebar, so it does not scroll the page
          event.preventDefault();
          audio.paused ? audio.play() : audio.pause();
          // window.experience.audio.track.isPlaying ?
          //   window.experience.audio.track.stop() :
          //   window.experience.audio.track.play()
        }
      });
    }
  } else {
    // vvv vvv *** WITH THREE CLOCK *** vvv vvv
    const experience = new Experience(
      document.querySelector("canvas.webgl"),
      null
    );
    // ^^^ ^^^ *** WITH THREE CLOCK *** ^^^ ^^^
  }
};

// main();
// alt_main_for_fire_text();
