import EventEmitter from './EventEmitter.js'

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

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        // console.log('tick ---')
        // const currentTime = this.playerInstance.player.getCurrentTime()
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        // console.log('FRAME RATE', 1000/this.delta)

        this.trigger('tick')

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}