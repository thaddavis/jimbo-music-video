import Experience from "../Experience.js";
import Environment from "./Environment.js";

// vvv NewTimeline vvv
import { initializeReusables } from "Experience/NewTimeline/initializeReusables";
import { timeline_intro } from "Experience/NewTimeline/Intro";
// ^^^ NewTimeline ^^^

import { EFFECTS, GLOBAL_UPDATABLES } from "../Utils/Enums.js";

import { get } from "lodash";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    // this.audio = this.experience.audio
    this.timelineOfEvents = {};
    this.updatables = {};
    this.reusables = {};

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      // vvv NEW TIMELINE vvv
      initializeReusables(this.reusables);

      console.log("*** *** ***", this.reusables);

      timeline_intro(this.timelineOfEvents);
      // ^^^ NEW TIMELINE ^^^

      this.environment = new Environment();
    });
  }

  update() {
    console.log("World.js update");

    for (let updatableId in this.timelineOfEvents) {
      const updatable = this.timelineOfEvents[updatableId];
      console.log("updatable", updatable);

      for (let e of updatable.effects) {
        console.log("e", e);

        if ([EFFECTS.FROM_TO].includes(e.name)) {
          if (
            this.experience.time.elapsed >= e.startAt &&
            this.experience.time.elapsed <= e.endAt &&
            updatable.started === false
          ) {
            // this.updatables[updatableId] = new updatable.theClass(updatable)
            // debugger;
            this.updatables[updatableId] =
              this.reusables[updatable.theClass.name];
            updatable.started = true;
          } else if (
            this.experience.time.elapsed > e.endAt &&
            updatable.started === true
          ) {
            debugger;
            console.log("vvv MOVE object off stage vvv");
            // vvv MOVE object off stage vvv
            debugger;
            this.updatables[updatableId].moveOffStage();
            this.timelineOfEvents[updatableId].started = false;
            delete this.updatables[updatableId];
            // ^^^ MOVE object off stage ^^^
            // this.updatables[updatableId].destroy(); // *** FOR SPEED ***
            // this.timelineOfEvents[updatableId].started = false;
            // delete this.updatables[updatableId];
          }
        }
      }
    }

    for (let updatableId in this.updatables) {
      const updatable = this.timelineOfEvents[updatableId];
      if (
        this.updatables[updatableId] &&
        this.updatables[updatableId].isGlobal
      ) {
        if (
          [GLOBAL_UPDATABLES.CAMERA_INSTANCE].includes(
            get(
              this.updatables[updatableId],
              "updatable.effect.pathToExperienceGlobal"
            )
          )
        ) {
          // debugger
          window.experience.camera.updateCamera(
            this.updatables[updatableId].updatable
          );
        }
      } else {
        debugger;
        this.updatables[updatableId].update(updatable.effects);
      }
    }
  }

  reset() {}
}
