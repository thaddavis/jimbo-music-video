import {
    set,
    get,
    delay
} from 'lodash'

export function executeEffect(
    object,
    timelineMetadata,
    delta
) {
    // debugger

    for (let property of timelineMetadata.effect.properties) {
        
        // debugger
        const value = get(object, property.path)

        console.log((property.to - property.from) * (delta/((timelineMetadata.effect.startAt - timelineMetadata.effect.endAt))))

        let updatedValue = value + (property.to - property.from) * (delta/((timelineMetadata.effect.endAt - timelineMetadata.effect.startAt)))

        console.log('updatedValue', updatedValue)

        // debugger

        set(object, property.path, updatedValue)

        object.needsUpdate = true
        // debugger
    }


}