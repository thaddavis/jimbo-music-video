import Phrase3 from '../../World/Lyrics/2ndStanza/Phrase3'
import Phrase3Background from '../../World/Lyrics/2ndStanza/Phrase3Background'
import Phrase3Light from '../../World/Lyrics/2ndStanza/Phrase3Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';
import Phrase3Light2 from '../../World/Lyrics/2ndStanza/Phrase3Light2';

export function addTimelineEvents_2nd_verse_3rd_phrase(timeline) {

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
            startAt: 28000,
            endAt: 30500
        },
        started: false,
        theClass: Phrase3
    }

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
                    x: 3,
                    y: 3,
                    z: 3,
                }
                // path: 'mesh.material.opacity',
                // from: 1,
                // to: 0
            }],
            startAt: 28000,
            endAt: 30500
        },
        started: false,
        theClass: Phrase3Background
    }

    timeline[uuidv4()] = {
        isGlobal: true,
        effect: {
            name: EFFECTS.GLOBAL_FROM_TO,
            pathToExperienceGlobal: 'camera.instance',
            properties: [{
                path: 'position',
                from: {
                    x: 4,
                    y: -5,
                    z: 16
                },
                to: {
                    x: -6,
                    y:  -3,
                    z: 18 
                }
            }],
            startAt: 28000,
            endAt: 30500
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
            startAt: 28000,
            endAt: 30500
        },
        started: false,
        theClass: Phrase3Light
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
            startAt: 28000,
            endAt: 30500
        },
        started: false,
        theClass: Phrase3Light2
    }

}