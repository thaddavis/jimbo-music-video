import * as THREE from 'three'
import Experience from 'Experience/Experience.js'

import { executeEffect } from 'Experience/Utils/Effect.js'

import FlagVertexShader from 'Experience/Shaders/Flag/vertex.glsl'
import FlagFragmentShader from 'Experience/Shaders/Flag/fragment.glsl'

export default class Flag
{
    constructor(timelineMetadata)
    {
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()

        this.start()
    }

    setGeometry()
    {
        // this.geometry = new THREE.CircleGeometry(5, 256)
        this.geometry = new THREE.PlaneGeometry( 1, 1, 32, 32 );

        const count = this.geometry.attributes.position.count
        const randoms = new Float32Array(count)

        for(let i = 0; i < count; i++)
        {
            randoms[i] = Math.random()
        }

        this.geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    }

    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.polishFlag
        this.textures.color.encoding = THREE.sRGBEncoding
        // this.textures.color.repeat.set(1.5, 1.5)
        // this.textures.color.wrapS = THREE.RepeatWrapping
        // this.textures.color.wrapT = THREE.RepeatWrapping

        // this.textures.normal = this.resources.items.grassNormalTexture
        // this.textures.normal.repeat.set(1.5, 1.5)
        // this.textures.normal.wrapS = THREE.RepeatWrapping
        // this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    setMaterial()
    {
        // // this.material = new THREE.MeshStandardMaterial({
        //     // map: this.textures.color,
        //     // normalMap: this.textures.normal
        // // })

        // this.material = new THREE.MeshStandardMaterial({
        //     color: 'purple',
        //     // transparent: true
        // })

        // debugger

        // Material
        this.material = new THREE.ShaderMaterial({
            vertexShader: FlagVertexShader,
            fragmentShader: FlagFragmentShader,
            uniforms:
            {
                uFrequency: { value: new THREE.Vector2(10, 5) },
                uTime: { value: 0 },
                uColor: { value: new THREE.Color('red') },
                uTexture: { value: this.textures.color }
            }
        })
    }

    setMesh()
    {   
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.scale.y = 2/3
        this.scene.add(this.mesh)
    }

    start()
    {
        
    }

    update()
    {
        this.material.uniforms.uTime.value = this.experience.time.elapsed
        executeEffect(this, this.timelineMetadata, this.experience.time.delta, this.experience.time)
    }

    destroy() {
        // console.log(
        //     this.geometry    
        // )
        // console.log(
        //     this.material    
        // )
        
        // debugger

        const object = this.scene.getObjectByProperty( 'uuid', this.mesh.uuid );
        object.geometry.dispose();
        object.material.dispose();
        this.scene.remove( object );
    }
}