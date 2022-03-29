import {
    set,
    get,
    delay
} from 'lodash'
import {
    EFFECTS
} from './Enums'

export function executeEffect(
    object,
    timelineMetadata,
    delta,
    timeObject
) {
    // debugger

    if ([
        EFFECTS.POSITION_FROM_TO,
        EFFECTS.SCALE_FROM_TO,
        EFFECTS.GLOBAL_POSITION_FROM_TO
    ].includes(timelineMetadata.effect.name)) {

        if (get(timelineMetadata, 'theClass.name') === 'Phrase1') {
            // debugger
        } else if (get(timelineMetadata, 'theClass.name') === 'Floor') {
            // debugger
        } else if (get(timelineMetadata, 'effect.name') === EFFECTS.GLOBAL_POSITION_FROM_TO) {
            debugger
        }

        for (let property of timelineMetadata.effect.properties) {
            
            if (get(timelineMetadata, 'effect.name') === EFFECTS.GLOBAL_POSITION_FROM_TO) {
                debugger
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

                if (get(timelineMetadata, 'effect.name') === EFFECTS.GLOBAL_POSITION_FROM_TO) {
                    debugger
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
                if (get(timelineMetadata, 'effect.name') === EFFECTS.GLOBAL_POSITION_FROM_TO) {
                    debugger
                    console.log(value)
                }

                

                value.set(
                    updatedValue.x,
                    updatedValue.y,
                    updatedValue.z,
                );

                if (get(timelineMetadata, 'effect.name') === EFFECTS.GLOBAL_POSITION_FROM_TO) {
                    debugger
                    console.log(value)
                }

                object.needsUpdate = true
            }
        }
    } else if (
        [
            EFFECTS.GLOBAL_POSITION_FROM_TO
        ].includes(timelineMetadata.effect.name)
    ) {
        // debugger
    } else {
        console.error('Unsupported Effect')
    }


}