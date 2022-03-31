import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Cross from 'Experience/World/Models/Cross';
import CrossLight from 'Experience/World/Models/CrossLight';
// import Jimbo from '../World/Titles/Jimbo';
// import JimboLight from '../World/Titles/JimboLight';
// import WitherberryLogo from '../World/Logo/Witherberry';
// import JimboLight2 from '../World/Titles/JimboLight2';
// import JimboLight3 from '../World/Titles/JimboLight3';
// import JimboLight4 from '../World/Titles/JimboLight4';

export function addTimelineEvents_bridge_cross(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
                {
                    path: 'position',
                    from: {
                        x: 0,
                        y: -2,
                        z: 2
                    },
                    to: {
                        x: 0,
                        y: -2,
                        z: 2
                    }
                },
                {
                    path: 'scale',
                    from: {
                        x: 0.1,
                        y: 0.1,
                        z: 0.1
                    },
                    to: {
                        x: 0.1,
                        y: 0.1,
                        z: 0.1
                    }
                },
                {
                    path: 'rotation',
                    from: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    to: {
                        x: 0,
                        y: 0,
                        // y: Math.PI * 2,
                        z: 0
                    }
                }
            ],
            startAt: 72500,
            endAt: 80000
        },
        started: false,
        theClass: Cross
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
                {
                    path: 'mesh.scale',
                    from: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    to: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    path: 'mesh.position',
                    from: {
                        x: 0,
                        y: 3,
                        z: 8
                    },
                    to: {
                        x: 0,
                        y: 3,
                        z: 8
                    }
                }
            ],
            startAt: 72500,
            endAt: 80000
        },
        started: false,
        theClass: CrossLight
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
                    y: 5,
                    z: 10
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 10
                }
            }],
            startAt: 72500,
            endAt: 80000
        },
        started: false 
    }

}