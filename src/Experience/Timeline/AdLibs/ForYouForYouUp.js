import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';
import ForYou from '../../World/Lyrics/AdLibs/ForYou';
import ForYouBackground from '../../World/Lyrics/AdLibs/ForYouBackground';
import ForYouLight from '../../World/Lyrics/AdLibs/ForYouLight';


export function addTimelineEvents_ad_libs_for_you_up(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.scale',
                from: {
                    x: 1.0,
                    y: 1.0,
                    z: 1.0
                },
                to: {
                    x: 0.8,
                    y: 0.8,
                    z: 0.8
                }
            },
            {
                path: 'mesh.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 1
                },
                to: {
                    x: 0,
                    y: -2,
                    z: 1  
                }
            }
            ],
            // startAt: 37500,
            // endAt: 38500
            startAt: 37.5,
            endAt: 38.5
        },
        started: false,
        theClass: ForYou
    }

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
            // startAt: 37500,
            // endAt: 38500
            startAt: 37.5,
            endAt: 38.5
        },
        started: false,
        theClass: ForYouBackground
    }

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
            // startAt: 37500,
            // endAt: 38500
            startAt: 37.5,
            endAt: 38.5
        },
        started: false,
        theClass: ForYouLight
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
                    y: 0,
                    z: 12
                },
                to: {
                    x: 0,
                    y: -4 ,
                    z: 12
                }
            }],
            // startAt: 37500,
            // endAt: 38500
            startAt: 37.5,
            endAt: 38.5
        },
        started: false 
    }

}