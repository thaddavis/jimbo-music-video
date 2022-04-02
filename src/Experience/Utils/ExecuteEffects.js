import { set, get } from "lodash";
import { EFFECTS, INSTANCE_NAMES } from "./Enums";

export function executeEffects(object, effects, delta, time) {
  // debugger;

  // console.log("object", object);
  // console.log("effects", effects);

  for (let effect of effects) {
    // console.log('--- --- ---', get(timelineMetadata, 'theClass.name'))
    // console.log('--- --- ---', get(timelineMetadata, 'theClass.name') === 'WitherberryLogo')

    if (effect.name === EFFECTS.GLOBAL_FROM_TO) {
      debugger;
    }

    if (effect.startAt < time.elapsed && time.elapsed < effect.endAt) {
      for (let property of effect.properties) {
        const value = get(object, property.path);

        // if (effect.name === EFFECTS.GLOBAL_FROM_TO) {
        console.log("object", object);
        console.log("value", value);
        // }

        // console.log("object", object);
        // console.log("value", value);

        // if (effect.name === EFFECTS.GLOBAL_FROM_TO) {
        //   console.log("value", value);
        // }

        //   debugger;
        if (typeof value === "number") {
          // covers animating scalars
          let updatedValue =
            value +
            (property.to - property.from) *
              // (timeObject.current - timelineMetadata.effect.startAt) / ( // calculate the delta
              (delta / (effect.endAt - effect.startAt));
          set(object, property.path, updatedValue);
          object.needsUpdate = true;
        } else if (
          (typeof value === "object" && value.isVector3) || // covers animating position and scal
          (typeof value === "object" &&
            value.hasOwnProperty("_x") &&
            value.hasOwnProperty("_y") &&
            value.hasOwnProperty("_z")) // covers animating rotation
        ) {
          // debugger;
          // handle property `rotation`

          // if (object.instanceName === INSTANCE_NAMES.SECTION_A_PHRASE_1) {
          //   debugger;
          // }

          let updatedValue = {};
          for (let dimension of ["x", "y", "z"]) {
            // debugger
            updatedValue[dimension] =
              value[dimension] +
              (property.to[dimension] - property.from[dimension]) *
                (delta / (effect.endAt - effect.startAt));
          }

          if (effect.name === EFFECTS.GLOBAL_FROM_TO) {
            console.log("updatedValue", updatedValue);
          }

          value.set(updatedValue.x, updatedValue.y, updatedValue.z);

          if (object.instanceName === INSTANCE_NAMES.GLOBE) {
            debugger;
          }

          // debugger;
          object.needsUpdate = true;
        }
      }
    }
  }
}
