import {
    set,
    get,
    delay
} from 'lodash'
import {
    EFFECTS, GLOBAL_UPDATABLES
} from './Enums'

export function executeEffect(
    object,
    timelineMetadata,
    delta,
    timeObject
) {
    // debugger

    if ([
        EFFECTS.FROM_TO,
        EFFECTS.GLOBAL_FROM_TO
    ].includes(timelineMetadata.effect.name)) {

        if (get(timelineMetadata, 'theClass.name') === 'Phrase1') {
            // debugger
        } else if (get(timelineMetadata, 'theClass.name') === 'Floor') {
            // debugger
        } else if (get(timelineMetadata, 'effect.name') === EFFECTS.FROM_TO) {
            // debugger
        } else if (get(timelineMetadata, 'theClass.name') === 'ForYou') {
            // debugger
        } else if (get(timelineMetadata, 'effect.pathToExperienceGlobal') === GLOBAL_UPDATABLES.CAMERA_INSTANCE) {
            // debugger
        }

        for (let property of timelineMetadata.effect.properties) {
            
            if (get(timelineMetadata, 'effect.name') === EFFECTS.FROM_TO) {
                // debugger
            }

            const value = get(object, property.path)
            if (typeof value === 'number') {
                let updatedValue = value + (property.to - property.from) * (
                    // (timeObject.current - timelineMetadata.effect.startAt) / ( // calculate the delta
                    delta /
                        (
                            timelineMetadata.effect.endAt - timelineMetadata.effect.startAt
                        )
                    
                )
                set(object, property.path, updatedValue)
                object.needsUpdate = true
            } else if (typeof value === 'object' && value.isVector3) {

                if (get(timelineMetadata, 'effect.name') === EFFECTS.FROM_TO) {
                    // debugger
                }

                // console.log(typeof value)
                let updatedValue = {}
                for (let dimension of ['x', 'y', 'z']) {
                    // debugger
                    updatedValue[dimension] = value[dimension] + (property.to[dimension] - property.from[dimension]) * (
                        // (timeObject.current - timelineMetadata.effect.startAt) / (
                        delta /
                            (
                                timelineMetadata.effect.endAt - timelineMetadata.effect.startAt
                            )
                        )
                    
                }

                // debugger
                if (get(timelineMetadata, 'effect.name') === EFFECTS.FROM_TO) {
                    // debugger
                }

                

                value.set(
                    updatedValue.x,
                    updatedValue.y,
                    updatedValue.z,
                );

                if (get(timelineMetadata, 'effect.name') === EFFECTS.FROM_TO) {
                    // debugger
                }

                object.needsUpdate = true
            }
        }
    } else if (
        [
            EFFECTS.GLOBAL_FROM_TO
        ].includes(timelineMetadata.effect.name)
    ) {
        // debugger
    } else {
        console.error('Unsupported Effect')
    }


}