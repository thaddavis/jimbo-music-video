import { set, get, delay } from "lodash";

export function executeEffects(object, effects, delta) {
  // console.log("object", object);
  // console.log("effects", effects);

  for (let effect of effects) {
    // console.log(effect);
    // console.log('--- --- ---', get(timelineMetadata, 'theClass.name'))
    // console.log('--- --- ---', get(timelineMetadata, 'theClass.name') === 'WitherberryLogo')

    // debugger;

    // ONLY EXECUTE CURRENT EFFECTS

    for (let property of effect.properties) {
      const value = get(object, property.path);
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

        // if (object.instanceName === INSTANCE_NAMES.CROSS) {
        //   debugger;
        // }

        let updatedValue = {};
        for (let dimension of ["x", "y", "z"]) {
          // debugger
          if (get(object, "instanceName") === "CAMERA") {
            debugger;
          }

          updatedValue[dimension] =
            value[dimension] +
            (property.to[dimension] - property.from[dimension]) *
              (delta / (effect.endAt - effect.startAt));
        }

        value.set(updatedValue.x, updatedValue.y, updatedValue.z);

        if (get(object, "instanceName") === "CAMERA") {
          console.log("updatedValue", updatedValue);
        }

        if (get(object, "instanceName") === "SECTION_B_PHRASE_2") {
          console.log("updatedValue", updatedValue);
        }

        // if (object.instanceName === INSTANCE_NAMES.GLOBE) {
        //   debugger;
        // }

        // debugger;
        object.needsUpdate = true;
      }
    }
  }
}
