import Experience from "Experience/Experience.js";
import Environment from "Experience/World/Environment.js";

// vvv Timeline vvv
import { initializeWorldObjects } from "./initializeWorldObjects";
import { timeline_intro } from "Experience/Timeline/Sections/Intro/Intro";
import { timeline_a_section_background } from "Experience/Timeline/Sections/A_Section/Background";

import { timeline_a_section_1_stanza } from "Experience/Timeline/Sections/A_Section/1_Stanza";
import { timeline_a_section_ad_lib_1_for_you_for_you } from "Experience/Timeline/Sections/A_Section/ad_libs/1_for_you_for_you";
import { timeline_a_section_2_stanza } from "Experience/Timeline/Sections/A_Section/2_Stanza";
import { timeline_a_section_ad_lib_2_for_you_for_you } from "Experience/Timeline/Sections/A_Section/ad_libs/2_for_you_for_you";
import { timeline_a_section_3_stanza } from "Experience/Timeline/Sections/A_Section/3_Stanza";
import { timeline_a_section_ad_lib_3_for_you } from "Experience/Timeline/Sections/A_Section/ad_libs/3_for_you";
import { timeline_a_section_4_stanza } from "Experience/Timeline/Sections/A_Section/4_Stanza";
import { timeline_b_section_cutaway_1_flag } from "Experience/Timeline/Sections/B_Section/Cutaways/1_Flag";
import { timeline_b_section_backgrounds } from "Experience/Timeline/Sections/B_Section/Backgrounds";
import { timeline_light_1 } from "Experience/Timeline/Lights/Light1";
// import { timeline_light_2 } from "Experience/Timeline/Lights/Light2";

import { timeline_b_section_1_stanza } from "Experience/Timeline/Sections/B_Section/1_Stanza";
import { timeline_b_section_2_stanza } from "Experience/Timeline/Sections/B_Section/2_Stanza";

import { timeline_bridge_cross } from "Experience/Timeline/Sections/Bridge/Cross";
// ^^^ Timeline ^^^

import { EFFECTS, GLOBAL_UPDATABLES } from "Experience/Utils/Enums";

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
      initializeWorldObjects(this.reusables);

      timeline_intro(this.timelineOfEvents);
      timeline_a_section_background(this.timelineOfEvents);
      timeline_a_section_1_stanza(this.timelineOfEvents);
      timeline_a_section_ad_lib_1_for_you_for_you(this.timelineOfEvents);
      timeline_a_section_2_stanza(this.timelineOfEvents);
      timeline_a_section_ad_lib_2_for_you_for_you(this.timelineOfEvents);
      timeline_a_section_3_stanza(this.timelineOfEvents);
      timeline_a_section_ad_lib_3_for_you(this.timelineOfEvents);
      timeline_a_section_4_stanza(this.timelineOfEvents);

      timeline_light_1(this.timelineOfEvents);
      // timeline_light_2(this.timelineOfEvents);

      timeline_b_section_cutaway_1_flag(this.timelineOfEvents);
      timeline_b_section_backgrounds(this.timelineOfEvents);
      timeline_b_section_1_stanza(this.timelineOfEvents);
      timeline_b_section_2_stanza(this.timelineOfEvents);

      timeline_bridge_cross(this.timelineOfEvents);
      // ^^^ NEW TIMELINE ^^^

      this.environment = new Environment();
    });
  }

  update() {
    for (let updatableId in this.timelineOfEvents) {
      const updatable = this.timelineOfEvents[updatableId];

      for (let e of updatable.effects) {
        if ([EFFECTS.FROM_TO].includes(e.name)) {
          if (
            this.experience.time.elapsed >= e.startAt &&
            this.experience.time.elapsed <= e.endAt &&
            updatable.started === false
          ) {
            this.updatables[updatableId] =
              this.reusables[updatable.instanceName];
            updatable.started = true;

            // console.log("-> ", this.updatables[updatableId]);

            this.updatables[updatableId].initializeEffects(updatable.effects);
          } else if (
            this.experience.time.elapsed > e.endAt &&
            updatable.started === true
          ) {
            // console.log(
            //   "vvv MOVE object off stage vvv",
            //   this.updatables[updatableId].instanceName
            // );
            // vvv MOVE object off stage vvv
            // debugger;
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
      // debugger;
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
        // debugger;
        // console.log(this.updatables[updatableId]);

        this.updatables[updatableId].update(updatable.effects);
      }
    }
  }

  reset() {}
}
