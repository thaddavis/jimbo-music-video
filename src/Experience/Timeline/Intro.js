import Floor from '../World/Floor'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../Utils/Enums';
import Jimbo from '../World/Titles/Jimbo';
import JimboLight from '../World/Titles/JimboLight';

export function addTimelineEvents_intro(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.scale',
                from: {
                    x: 1,
                    y: 1,
                    z: 1
                },
                to: {
                    x: 2,
                    y: 2,
                    z: 2
                }
            }],
            startAt: 1.25,
            endAt: 17
        },
        started: false,
        theClass: Floor
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.scale',
                from: {
                    x: 3,
                    y: 3,
                    z: 3
                },
                to: {
                    x: 4,
                    y: 4,
                    z: 4
                }
            }],
            startAt: 0,
            endAt: 1.25
        },
        started: false,
        theClass: Jimbo
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.position',
                from: {
                    x: 2,
                    y: 2,
                    z: 2
                },
                to: {
                    x: 2,
                    y: 2,
                    z: 2
                }
            }],
            startAt: 0,
            endAt: 1.25
        },
        started: false,
        theClass: JimboLight
    }

}