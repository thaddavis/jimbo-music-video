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
                    z: 12
                },
                to: {
                    x: 0,
                    y: -6,
                    z: 14
                }
            }],
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
                    z: 10
                },
                to: {
                    x: 0,
                    y: -9,
                    z: 12
                }
            }],
            startAt: 59.3,
            endAt: 72.5
        },
        started: false 
    }

}