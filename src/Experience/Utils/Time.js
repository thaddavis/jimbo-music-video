import EventEmitter from './EventEmitter.js'
import * as THREE from 'three'

export default class Time extends EventEmitter
{
    constructor(playerInstance)
    {
        super()

        // console.log('playerInstance', playerInstance)

        // Setup

        // debugger

        this.playerInstance = playerInstance
        // this.start = this.playerInstance.player.getCurrentTime()
        // vvv vvv
        // const audio = document.querySelector('audio')
        // if (audio) {
        //     audio.paused ? audio.play() : audio.pause()
        // }
        // ^^^ ^^^

        // this.start = Date.now()
        // this.current = this.start
        // this.elapsed = 0
        // this.delta = 16

        this.clock = new THREE.Clock()
        this.clock.start()
        this.elapsed = this.clock.getElapsedTime()
        this.delta = this.clock.getDelta()

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        // console.log('tick ---')
        
        // const currentTime = this.playerInstance.player.getCurrentTime()
        // this.delta = currentTime - this.current
        // this.current = currentTime
        // this.elapsed = this.current - this.start

        this.delta = this.clock.getDelta()
        this.elapsed = this.clock.getElapsedTime()

        // console.log('FRAME RATE', 1/this.delta)
        // console.log('this.elapsed', this.elapsed)

        this.trigger('tick')

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}