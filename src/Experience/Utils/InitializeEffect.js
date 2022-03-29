import {
    set,
    get,
} from 'lodash'

export function initializeEffect(
    object,
    timelineMetadata,
    timeObject
) {
    // debugger

    // if (timelineMetadata.theClass.name === 'Phrase1') {
    //     debugger
    // } else if (timelineMetadata.theClass.name === 'Floor') {
    //     debugger
    // }

    for (let property of timelineMetadata.effect.properties) {
        
        const value = get(object, property.path)
        if (typeof value === 'number') {
            let updatedValue = value + (property.to - property.from) * (
                (timeObject.current - timelineMetadata.effect.startAt) / // calculate the delta
                // delta /
                (
                    timelineMetadata.effect.endAt - timelineMetadata.effect.startAt
                )
            )
            set(object, property.path, updatedValue)
            object.needsUpdate = true
        } else if (typeof value === 'object' && value.isVector3) {
            // console.log(typeof value)
            let updatedValue = {}
            for (let dimension of ['x', 'y', 'z']) {
                // debugger
                updatedValue[dimension] = value[dimension] + (property.to[dimension] - property.from[dimension]) * (
                    (timeObject.current - timelineMetadata.effect.startAt) / (
                    // delta /
                        (
                            timelineMetadata.effect.endAt - timelineMetadata.effect.startAt
                        )
                    )
                )
                
            }

            value.set(
                updatedValue.x,
                updatedValue.y,
                updatedValue.z,
            );

            // debugger

            object.needsUpdate = true
        }
    }


}