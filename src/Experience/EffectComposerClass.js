import * as THREE from 'three'
import Experience from './Experience.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'

export default class EffectComposerClass
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.renderer = this.experience.renderer

        // debugger

        /**
         * Post processing
         */
        let RenderTargetClass = null

        if(this.renderer.instance.getPixelRatio() === 1 && this.renderer.instance.capabilities.isWebGL2)
        {
            RenderTargetClass = THREE.WebGLMultisampleRenderTarget
            console.log('Using WebGLMultisampleRenderTarget')
        }
        else
        {
            RenderTargetClass = THREE.WebGLRenderTarget
            console.log('Using WebGLRenderTarget')
        }

        const renderTarget = new RenderTargetClass(
            800,
            600,
            {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            }
        )

        this.effectComposer = new EffectComposer(this.renderer.instance, renderTarget)
        this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.effectComposer.setSize(this.sizes.width, this.sizes.height)

        this.setEffects()
    }

    setEffects()
    {
        const renderPass = new RenderPass(this.scene, this.camera.instance)
        this.effectComposer.addPass(renderPass)

        // Dot screen pass
        const dotScreenPass = new DotScreenPass()
        dotScreenPass.enabled = false
        this.effectComposer.addPass(dotScreenPass)

        // Glitch pass
        const glitchPass = new GlitchPass()
        // glitchPass.goWild = true
        glitchPass.enabled = true
        this.effectComposer.addPass(glitchPass)
    }

    resize()
    {
        // Update effect composer
        this.effectComposer.setSize(this.sizes.width, this.sizes.height)
        this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    update()
    {
        // debugger
        this.effectComposer.render()
    }
}