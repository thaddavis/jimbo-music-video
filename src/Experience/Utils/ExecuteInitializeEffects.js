import { set, get } from "lodash";

export function executeInitializeEffects(object, effects, timeObject) {
  debugger;
  // if (timelineMetadata.theClass.name === 'Phrase1') {
  //     debugger
  // } else if (timelineMetadata.theClass.name === 'Floor') {
  //     debugger
  // }
  //   if (
  //     get(timelineMetadata, "effect.name") === EFFECTS.GLOBAL_FROM_TO &&
  //     get(timelineMetadata, "effect.pathToExperienceGlobal") ===
  //       GLOBAL_UPDATABLES.CAMERA_INSTANCE
  //   ) {
  //     // debugger
  //   }

  for (let effect of effects) {
    if (
      effect.startAt < timeObject.elapsed &&
      timeObject.elapsed < effect.endAt
    ) {
      for (let property of effect.properties) {
        const value = get(object, property.path);
        if (typeof value === "number") {
          let updatedValue =
            value +
            (property.to - property.from) *
              ((timeObject.elapsed - timelineMetadata.effect.startAt) / // calculate the delta
                // delta /
                (timelineMetadata.effect.endAt -
                  timelineMetadata.effect.startAt));
          set(object, property.path, updatedValue);
          object.needsUpdate = true;
        } else if (
          (typeof value === "object" && value.isVector3) || // covers animating position and scal
          (typeof value === "object" &&
            value.hasOwnProperty("_x") &&
            value.hasOwnProperty("_y") &&
            value.hasOwnProperty("_z")) // covers animating rotation
        ) {
          let initialValue = {};

          for (let dimension of ["x", "y", "z"]) {
            initialValue[dimension] = property.from[dimension];
          }

          value.set(initialValue.x, initialValue.y, initialValue.z);

          debugger;

          object.needsUpdate = true;
        }
      }
    }
  }
}
