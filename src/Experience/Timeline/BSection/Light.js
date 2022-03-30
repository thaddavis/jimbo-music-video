import { v4 as uuidv4 } from 'uuid';
import { EFFECTS } from '../../Utils/Enums';

import BSectionLight from 'Experience/World/BSection/Light'

export function addTimelineEvents_b_section_light(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.position',
                from: {
                    x: 10,
                    y: -44,
                    z: 0
                },
                to: {
                    x: 11,
                    y: -46,
                    z: 0
                }
            }],
            startAt: 45.5,
            endAt: 72.5
        },
        started: false,
        theClass: BSectionLight
    }

}