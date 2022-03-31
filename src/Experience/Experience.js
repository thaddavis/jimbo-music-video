import * as THREE from 'three'
import Stats from 'stats.js'

import Debug from './Utils/Debug.js'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'

import sources from './sources.js'
import EffectComposerClass from './EffectComposerClass.js'
import AudioClass from './World/AudioClass.js'

let instance = null

export default class Experience
{
    constructor(_canvas, playerInstance)
    {
        // debugger
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this
        
        // Global access
        window.experience = this

        // debugger

        // Options
        this.canvas = _canvas

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time(playerInstance)
        this.playerInstance = playerInstance
        this.scene = new THREE.Scene()

        this.resources = new Resources(sources)
    
        this.camera = new Camera()
        this.renderer = new Renderer()

        this.effectComposer = new EffectComposerClass()

        this.audio = new AudioClass()
        this.world = new World()

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( this.stats.dom );
        
        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()

            // effectComposer.render()
        })
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
        this.effectComposer.resize()
    }

    update()
    {
        this.stats.begin()

        this.camera.update()
        this.world.update()
        this.renderer.update()
        // this.effectComposer.update()

        this.stats.end()
    }

    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        instance = null

        if(this.debug.active)
            this.debug.ui.destroy()
    }
}