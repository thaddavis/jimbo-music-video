import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    constructor(playerInstance)
    {
        super()

        console.log('playerInstance', playerInstance)

        // Setup

        // debugger

        this.playerInstance = playerInstance
        this.start = this.playerInstance.player.getCurrentTime()
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
        const currentTime = this.playerInstance.player.getCurrentTime()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('tick')

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}