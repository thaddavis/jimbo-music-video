import Floor from '../World/Floor'
import Globe from 'Experience/World/Models/Globe'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../Utils/Enums';
import Jimbo from '../World/Titles/Jimbo';
import JimboLight from '../World/Titles/JimboLight';
import WitherberryLogo from '../World/Logo/Witherberry';
import JimboLight2 from '../World/Titles/JimboLight2';
import JimboLight3 from '../World/Titles/JimboLight3';
import JimboLight4 from '../World/Titles/JimboLight4';

export function addTimelineEvents_intro(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
                {
                    path: 'position',
                    from: {
                        x: 0,
                        y: -3,
                        z: 2
                    },
                    to: {
                        x: 0,
                        y: -3,
                        z: 2
                    }
                },
                {
                    path: 'scale',
                    from: {
                        x: 0.7,
                        y: 0.7,
                        z: 0.7
                    },
                    to: {
                        x: 0.7,
                        y: 0.7,
                        z: 0.7
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
            // startAt: 0,
            // endAt: 1250
            startAt: 0,
            endAt: 1.25
        },
        started: false,
        theClass: WitherberryLogo
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
                {
                    path: 'mesh.scale',
                    from: {
                        x: 4,
                        y: 4,
                        z: 4
                    },
                    to: {
                        x: 4,
                        y: 4,
                        z: 4
                    }
                },
                {
                    path: 'mesh.position',
                    from: {
                        x: 0,
                        y: 2,
                        z: 2
                    },
                    to: {
                        x: 0,
                        y: 2,
                        z: 2
                    }
                }
            ],
            // startAt: 0,
            // endAt: 1250
            startAt: 0,
            endAt: 1.25
        },
        started: false,
        theClass: Jimbo
    }

    // timeline[uuidv4()] = {
    //     effect: {
    //         name: EFFECTS.FROM_TO,
    //         properties: [{
    //             path: 'light.scale',
    //             from: {
    //                 x: 1,
    //                 y: 1,
    //                 z: 1
    //             },
    //             to: {
    //                 x: 1,
    //                 y: 1,
    //                 z: 1
    //             }
    //         }],
    //         // startAt: 0,
    //         // endAt: 1250
    //         startAt: 0,
    //         endAt: 1.25
    //     },
    //     started: false,
    //     theClass: JimboLight
    // }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.scale',
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
            }],
            // startAt: 0,
            // endAt: 1250
            startAt: 0,
            endAt: 1.25
        },
        started: false,
        theClass: JimboLight2
    }

    // timeline[uuidv4()] = {
    //     effect: {
    //         name: EFFECTS.FROM_TO,
    //         properties: [{
    //             path: 'light.scale',
    //             from: {
    //                 x: 1,
    //                 y: 1,
    //                 z: 1
    //             },
    //             to: {
    //                 x: 1,
    //                 y: 1,
    //                 z: 1
    //             }
    //         }],
    //         startAt: 0,
    //         // endAt: 17000
    //         endAt: 17
    //     },
    //     started: false,
    //     theClass: JimboLight3
    // }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.scale',
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
            }],
            startAt: 0,
            // endAt: 17000
            endAt: 16.9
        },
        started: false,
        theClass: JimboLight4
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
                {
                    path: 'scale',
                    from: {
                        x: 3,
                        y: 3,
                        z: 3
                    },
                    to: {
                        x: 9,
                        y: 9,
                        z: 9
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
                        y: Math.PI * 44.0 / 100,
                        z: 0
                    }
                }
            ],
            // startAt: 1250,
            // endAt: 17000
            startAt: 1.25,
            endAt: 16.9
        },
        started: false,
        theClass: Globe
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
                    z: 10
                },
                to: {
                    x: 0,
                    y: 0,
                    z: 10
                }
            }],
            startAt: 1.25,
            endAt: 16.9
        },
        started: false 
    }

}