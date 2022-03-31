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
        } else if (get(timelineMetadata, 'theClass.name') === 'WitherberryLogo') {
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
            
            // console.log('--- --- ---', get(timelineMetadata, 'theClass.name'))
            // console.log('--- --- ---', get(timelineMetadata, 'theClass.name') === 'WitherberryLogo')

            if (get(timelineMetadata, 'effect.name') === EFFECTS.FROM_TO) {
                // debugger
            } else if (get(timelineMetadata, 'theClass.name') === 'WitherberryLogo') {
                // console.log('1')
                // debugger
                // console.log('2')
            }

            const value = get(object, property.path)
            if (typeof value === 'number') { // covers animating scalars
                let updatedValue = value + (property.to - property.from) * (
                    // (timeObject.current - timelineMetadata.effect.startAt) / ( // calculate the delta
                    delta /
                        (
                            timelineMetadata.effect.endAt - timelineMetadata.effect.startAt
                        )
                    
                )
                set(object, property.path, updatedValue)
                object.needsUpdate = true
            } else if (
                (typeof value === 'object' && value.isVector3) // covers animating position and scal
                ||
                (
                    typeof value === 'object' && 
                    value.hasOwnProperty('_x') &&
                    value.hasOwnProperty('_y') &&
                    value.hasOwnProperty('_z')
                ) // covers animating rotation
            ) {

                // debugger
                // handle property `rotation`
            
                let updatedValue = {}
                for (let dimension of ['x', 'y', 'z']) {
                    // debugger
                    updatedValue[dimension] = value[dimension] + (property.to[dimension] - property.from[dimension]) * (
                        delta /
                            (
                                timelineMetadata.effect.endAt - timelineMetadata.effect.startAt
                            )
                        )
                    
                }

                value.set(
                    updatedValue.x,
                    updatedValue.y,
                    updatedValue.z,
                );

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