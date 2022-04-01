import { v4 as uuidv4 } from 'uuid';
import { EFFECTS } from '../../Utils/Enums';
import SkinPlane1Background from 'Experience/World/BSection/SkinPlane1'
import SkinPlane2Background from 'Experience/World/BSection/SkinPlane2'

export function addTimelineEvents_b_section_background(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
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
                        z: 2
                    }
                },
                {
                    path: 'mesh.scale',
                    from: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    to: {
                        x: 1.2,
                        y: 1.2,
                        z: 1.2
                    }
                }
            ],
            // startAt: 45500,
            // endAt: 51200
            startAt: 45.5,
            endAt: 51.2
        },
        started: false,
        theClass: SkinPlane1Background
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
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
                        z: 2
                    }
                },
                {
                    path: 'mesh.scale',
                    from: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    to: {
                        x: 1.2,
                        y: 1.2,
                        z: 1.2
                    }
                }
            ],
            // startAt: 51200,
            // endAt: 57700
            startAt: 51.2,
            endAt: 57.7
        },
        started: false,
        theClass: SkinPlane2Background
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
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
                        z: 2
                    }
                },
                {
                    path: 'mesh.scale',
                    from: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    to: {
                        x: 1.2,
                        y: 1.2,
                        z: 1.2
                    }
                }
            ],
            // startAt: 59300,
            // endAt: 65500
            startAt: 59.3,
            endAt: 65.5
        },
        started: false,
        theClass: SkinPlane1Background
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [
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
                        z: 2
                    }
                },
                {
                    path: 'mesh.scale',
                    from: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    to: {
                        x: 1.2,
                        y: 1.2,
                        z: 1.2
                    }
                }
            ],
            // startAt: 65500,
            // endAt: 72500
            startAt: 65.5,
            endAt: 72.5
        },
        started: false,
        theClass: SkinPlane2Background
    }

}