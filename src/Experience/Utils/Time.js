import EventEmitter from './EventEmitter.js'
import * as THREE from 'three'

export default class Time extends EventEmitter
{
    constructor(playerInstance)
    {
        super()

        // console.log('playerInstance', playerInstance)
        // console.log('getCurrentTime()', playerInstance.player.getCurrentTime())
        
        
        // vvv vvv
        this.playerInstance = playerInstance
        this.start = this.playerInstance.player.getCurrentTime()
        this.then = this.start 
        this.current = this.start
        this.elapsed = this.playerInstance.player.getCurrentTime()
        this.delta = 16
        const audio = document.querySelector('audio')
        if (audio) {
            audio.paused ? audio.play() : audio.pause()
        }
        // ^^^ ^^^

        // this.clock = new THREE.Clock()
        // this.clock.start()
        // this.elapsed = this.clock.getElapsedTime()
        // this.delta = this.clock.getDelta()

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        // console.log('tick ---')
        const desiredFrameRateInterval = 1/30

        const currentTime = this.playerInstance.player.getCurrentTime()
        const frameRateElapsed = currentTime - this.then;
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current

        // console.log('currentTime', currentTime)
        // console.log(this.delta)
        // console.log(this.current)
        // console.log(this.elapsed)


        // this.delta = this.clock.getDelta()
        // this.elapsed = this.clock.getElapsedTime()

        // console.log('FRAME RATE', 1/this.delta)
        // console.log('*** this.elapsed', this.elapsed)

        // console.log(frameRateElapsed)
        // console.log(desiredFrameRateInterval)
        // console.log(frameRateElapsed > desiredFrameRateInterval)

        if (frameRateElapsed > desiredFrameRateInterval)
        {
            this.then = currentTime - (frameRateElapsed % desiredFrameRateInterval);
            // console.log('TICK')
            debugger
            this.trigger('tick')
        }

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}