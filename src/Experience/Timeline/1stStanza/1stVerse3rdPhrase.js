import Phrase3 from 'Experience/World/Lyrics/1stStanza/Phrase3'
import Phrase3Background from 'Experience/World/Lyrics/1stStanza/Phrase3Background'
import Phrase3Light from 'Experience/World/Lyrics/1stStanza/Phrase3Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Phrase3Light2 from 'Experience/World/Lyrics/1stStanza/Phrase3Light2';

export function addTimelineEvents_1st_verse_3rd_phrase(timeline) {

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
            startAt: 21,
            endAt: 23
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
            startAt: 21,
            endAt: 23
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
                    x: 2,
                    y: -2,
                    z: 15
                },
                to: {
                    x: -2,
                    y: -2,
                    z: 14
                }
            }],
            startAt: 21,
            endAt: 23
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
            startAt: 21,
            endAt: 23
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
            startAt: 21,
            endAt: 23
        },
        started: false,
        theClass: Phrase3Light2
    }

}