import Phrase1a from 'Experience/World/Lyrics/BSection/Phrase1a'
import Phrase1aBackground from 'Experience/World/Lyrics/BSection/Phrase1aBackground'
import Phrase1aLight from 'Experience/World/Lyrics/BSection/Phrase1aLight'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Phrase1aLight2 from 'Experience/World/Lyrics/BSection/Phrase1aLight2';

export function addTimelineEvents_b_section_phrase1a(timeline) {

    timeline[uuidv4()] = {
        isGlobal: false,
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
                    x: 1,
                    y: 1,
                    z: 1,
                }
                // path: 'mesh.material.opacity',
                // from: 1,
                // to: 0
            }],
            startAt: 50.5,
            endAt: 56.5
        },
        started: false,
        theClass: Phrase1a
    }

    timeline[uuidv4()] = {
        isGlobal: true,
        effect: {
            name: EFFECTS.GLOBAL_FROM_TO,
            pathToExperienceGlobal: 'camera.instance',
            properties: [{
                path: 'position',
                from: {
                    x: 0,
                    y: 1,
                    z: 12
                },
                to: {
                    x: 0,
                    y: -1,
                    z: 12
                }
            }],
            startAt: 50.5,
            endAt: 56.5
        },
        started: false 
    }

    timeline[uuidv4()] = {
        isGlobal: false,
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 4
                }
            }],
            startAt: 50.5,
            endAt: 56.5
        },
        started: false,
        theClass: Phrase1aLight
    }

    timeline[uuidv4()] = {
        isGlobal: false,
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 4
                }
            }],
            startAt: 50.5,
            endAt: 56.5
        },
        started: false,
        theClass: Phrase1aLight2
    }

}