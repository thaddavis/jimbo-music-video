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
                    y: 0,
                    z: 1
                },
                to: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            }],
            // startAt: 44800,
            // endAt: 45800
            startAt: 44.8,
            endAt: 45.8
        },
        started: false
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
                    y: -4,
                    z: 16
                },
                to: {
                    x: 0,
                    y: -6,
                    z: 18
                }
            }],
            // startAt: 45800,
            // endAt: 57800
            startAt: 45.8,
            endAt: 57.8
        },
        started: false
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
                    z: 1
                },
                to: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            }],
            // startAt: 57800,
            // endAt: 59300
            startAt: 57.8,
            endAt: 59.3
        },
        started: false 
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
                    y: -8,
                    z: 16
                },
                to: {
                    x: 0,
                    y: -9,
                    z: 18
                }
            }],
            // startAt: 59300,
            // endAt: 72500
            startAt: 59.3,
            endAt: 72.5
        },
        started: false 
    }

}