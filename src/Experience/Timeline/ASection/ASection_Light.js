import Phrase1 from 'Experience/World/Lyrics/1stStanza/Phrase1'
import Phrase1Background from 'Experience/World/Lyrics/1stStanza/Phrase1Background'
import Phrase1Light from 'Experience/World/Lyrics/1stStanza/Phrase1Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';

export function addTimelineEvents_A_Section_Light(timeline) {

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
            // startAt: 17000,
            // endAt: 19000
            startAt: 17,
            // endAt: 19
            endAt: 23.7
        },
        started: false,
        theClass: Phrase1Light
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
            // startAt: 17000,
            // endAt: 19000
            startAt: 24.5,
            // endAt: 19
            endAt: 30.5
        },
        started: false,
        theClass: Phrase1Light
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
            // startAt: 31500,
            // endAt: 33000
            startAt: 31.5,
            endAt: 37.5
        },
        started: false,
        theClass: Phrase1Light
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
            // startAt: 31500,
            // endAt: 33000
            startAt: 38.5,
            endAt: 44.7
        },
        started: false,
        theClass: Phrase1Light
    }

}