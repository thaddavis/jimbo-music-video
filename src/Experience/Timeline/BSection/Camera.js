import { v4 as uuidv4 } from 'uuid';
import { EFFECTS } from '../../Utils/Enums';

export function addTimelineEvents_b_section_camera(timeline) {

    timeline[uuidv4()] = {
        isGlobal: true,
        effect: {
            name: EFFECTS.GLOBAL_FROM_TO,
            pathToExperienceGlobal: 'camera.instance',
            properties: [{
                path: 'position',
                from: {
                    x: 0,
                    y: -8,
                    z: 10
                },
                to: {
                    x: 0,
                    y: -9,
                    z: 12
                }
            }],
            startAt: 45.5,
            endAt: 72.5
        },
        started: false 
    }

}