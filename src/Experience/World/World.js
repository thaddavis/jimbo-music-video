import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

import { v4 as uuidv4 } from 'uuid';

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
            
            this.timelineOfEvents[uuidv4()] = {
                effect: {
                    name: 'fromTo',
                    properties: [{
                        path: 'mesh.position.x',
                        from: 0,
                        to: 10
                        // path: 'mesh.material.opacity',
                        // from: 1,
                        // to: 0
                    }],
                    startAt: 0,
                    endAt: 17
                },
                started: false,
                theClass: Floor
            }


            // this.fox = new Fox()
            this.environment = new Environment()
        })
    }

    update()
    {
        // debugger
        console.log(this.experience.playerInstance.player.getCurrentTime())
        console.log('this.experience.time', this.experience.time)
        // debugger

        for (let updatableId in this.timelineOfEvents) {

            // debugger

            const updatable = this.timelineOfEvents[updatableId]

            console.log(updatable)

            console.log(this.experience.playerInstance.player.getCurrentTime() >= updatable.effect.startAt &&
            updatable.started === false)
            
            // debugger

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
        }

        // debugger

        for (let updatableId in this.updatables) {
            // debugger
            this.updatables[updatableId].update()
        }
    }
}