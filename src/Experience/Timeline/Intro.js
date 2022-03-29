import Floor from '../World/Floor'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../Utils/Enums';

export function addTimelineEvents_intro(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.POSITION_FROM_TO,
            properties: [{
                path: 'mesh.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                to: {
                    x: 10,
                    y: 0,
                    z: 0
                }
            }],
            startAt: 0,
            endAt: 16
        },
        started: false,
        theClass: Floor
    }

}