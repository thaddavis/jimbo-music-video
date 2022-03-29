import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

import { v4 as uuidv4 } from 'uuid';

import { addTimelineEvents_intro } from '../Timeline/Intro'
import { addTimelineEvents_1st_verse_1st_phrase } from '../Timeline/1stVerse1stPhrase'
import { addTimelineEvents_1st_verse_2nd_phrase } from '../Timeline/1stVerse2ndPhrase'
import { addTimelineEvents_1st_verse_3rd_phrase } from '../Timeline/1stVerse3rdPhrase'

import { 
    EFFECTS,
    GLOBAL_UPDATABLES
} from '../Utils/Enums.js';

import {
    set,
    get,
} from 'lodash'

export default class World
{
    constructor()
    {
        console.log('World constructor')

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.timelineOfEvents = {};
        this.updatables = {};

        // Wait for resources

        console.log('definite on ready handler')

        this.resources.on('ready', () =>
        {
            console.log('ready')
            // Setup
            
            addTimelineEvents_intro(this.timelineOfEvents)
            addTimelineEvents_1st_verse_1st_phrase(this.timelineOfEvents)
            addTimelineEvents_1st_verse_2nd_phrase(this.timelineOfEvents)
            addTimelineEvents_1st_verse_3rd_phrase(this.timelineOfEvents)

            this.environment = new Environment()
        })
    }

    update()
    {
        // debugger
        // console.log(this.experience.playerInstance.player.getCurrentTime())
        // console.log('this.experience.time', this.experience.time)
        // debugger

        for (let updatableId in this.timelineOfEvents) {
            const updatable = this.timelineOfEvents[updatableId]

            if (
              [
                EFFECTS.POSITION_FROM_TO,
                EFFECTS.SCALE_FROM_TO
              ].includes(updatable.effect.name)
            ) {

                if (
                    this.experience.playerInstance.player.getCurrentTime() >= updatable.effect.startAt &&
                    this.experience.playerInstance.player.getCurrentTime() <= updatable.effect.endAt &&
                    updatable.started === false
                ) {
                    // debugger
                    this.updatables[updatableId] = new updatable.theClass(updatable)
                    updatable.started = true
                } else if (
                    this.experience.playerInstance.player.getCurrentTime() > updatable.effect.endAt &&
                    updatable.started === true
                ) {
                    // debugger
                    // dispose and delete
                    this.updatables[updatableId].destroy()
                    this.timelineOfEvents[updatableId].started = false
                    delete this.updatables[updatableId]
                }
            } else if (
                [
                    EFFECTS.GLOBAL_POSITION_FROM_TO
                ].includes(updatable.effect.name)
            ) {
                if (
                    this.experience.playerInstance.player.getCurrentTime() >= updatable.effect.startAt &&
                    this.experience.playerInstance.player.getCurrentTime() <= updatable.effect.endAt &&
                    updatable.started === false
                ) {
                    // debugger
                    // this.updatables[updatableId] = new updatable.theClass(updatable)
                    // debugger
                    this.updatables[updatableId] = {
                        isGlobal: true,
                        // globalObject: get(window.experience, updatable.effect.pathToExperienceGlobal),
                        updatable: updatable
                    }
                    // debugger
                    updatable.started = true
                } else if (
                    this.experience.playerInstance.player.getCurrentTime() > updatable.effect.endAt &&
                    updatable.started === true
                ) {
                    // delete
                    this.timelineOfEvents[updatableId].started = false
                    delete this.updatables[updatableId]
                }
            } else {

            }
        }

        // debugger

        for (let updatableId in this.updatables) {
            
            if (
                this.updatables[updatableId]
                &&
                this.updatables[updatableId].isGlobal
            ) {
                
                if ([
                    GLOBAL_UPDATABLES.CAMERA_INSTANCE
                ].includes(get(this.updatables[updatableId], 'updatable.effect.pathToExperienceGlobal'))
                ) {

                    window.experience.camera.updateCamera(this.updatables[updatableId].updatable)

                }

                

            } else {
                this.updatables[updatableId].update()
            }
        }
    }

    reset() {

    }
}