import * as THREE from 'three'
import Experience from './Experience.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

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
            // console.log('Using WebGLMultisampleRenderTarget')
        }
        else
        {
            RenderTargetClass = THREE.WebGLRenderTarget
            // console.log('Using WebGLRenderTarget')
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
        // const renderPass = new RenderPass(this.scene, this.camera.instance)
        // this.effectComposer.addPass(renderPass)

        // Dot screen pass
        // const dotScreenPass = new DotScreenPass()
        // dotScreenPass.enabled = true
        // this.effectComposer.addPass(dotScreenPass)

        // Glitch pass
        // const glitchPass = new GlitchPass()
        // // glitchPass.goWild = true
        // glitchPass.enabled = false
        // this.effectComposer.addPass(glitchPass)

        // Unreal Bloom pass
        // const unrealBloomPass = new UnrealBloomPass()
        // unrealBloomPass.enabled = true
        // unrealBloomPass.strength = 0.3
        // unrealBloomPass.radius = 1
        // unrealBloomPass.threshold = 0.6

        // this.effectComposer.addPass(unrealBloomPass)

        // vvv ANTI ALIASING POST PROCESSING vvv
        let ssaaRenderPassP = new SSAARenderPass(this.scene, this.camera.instance);
        let newColor = ssaaRenderPassP.clearColor;

        const params = {
            sampleLevel: 4,
            renderToScreen: false,
            unbiased: true,
            camera: 'perspective',
            clearColor: 'black',
            clearAlpha: 1.0,
            viewOffsetX: 0,
            autoRotate: true
        }

        switch ( params.clearColor ) {

            case 'blue': newColor = 0x0000ff; break;
            case 'red': newColor = 0xff0000; break;
            case 'green': newColor = 0x00ff00; break;
            case 'white': newColor = 0xffffff; break;
            case 'black': newColor = 0x000000; break;

        }

        ssaaRenderPassP.clearColor = newColor;
        ssaaRenderPassP.clearAlpha = params.clearAlpha;

        ssaaRenderPassP.sampleLevel = params.sampleLevel;
        ssaaRenderPassP.unbiased = params.unbiased;

        ssaaRenderPassP.enabled = ( params.camera === 'perspective' );

	    this.effectComposer.addPass( ssaaRenderPassP );

        let copyPass = new ShaderPass( CopyShader );
		this.effectComposer.addPass( copyPass );

        // ^^^ ANTI ALIASING POST PROCESSING ^^^
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