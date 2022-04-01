import { set, get, delay } from "lodash";
import { EFFECTS, GLOBAL_UPDATABLES } from "./Enums";

export function executeEffects(object, effects, delta) {
  debugger;

  for (let effect of effects) {
    console.log(effect);
    // console.log('--- --- ---', get(timelineMetadata, 'theClass.name'))
    // console.log('--- --- ---', get(timelineMetadata, 'theClass.name') === 'WitherberryLogo')

    debugger;

    for (let property of effect.properties) {
      const value = get(object, property.path);
      debugger;
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
        debugger;
        // handle property `rotation`

        let updatedValue = {};
        for (let dimension of ["x", "y", "z"]) {
          // debugger
          updatedValue[dimension] =
            value[dimension] +
            (property.to[dimension] - property.from[dimension]) *
              (delta / (effect.endAt - effect.startAt));
        }

        value.set(updatedValue.x, updatedValue.y, updatedValue.z);

        debugger;
        object.needsUpdate = true;
      }
    }
  }
}
