import * as THREE from 'three'
import gsap from 'gsap'
import Experience from '../../Experience.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import { executeEffect } from '../../Utils/Effect.js'
import { initializeEffect } from '../../Utils/InitializeEffect.js'

export default class Jimbo
{
    constructor(timelineMetadata)
    {
        
        console.log('constructor Jimbo')
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        // this.setTextures()
        this.setMaterial()
        this.setMesh()

        this.start()
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 256)
    }

    setMaterial()
    {
        console.log('setMaterial')
        // this.material = new THREE.MeshStandardMaterial({
            // map: this.textures.color,
            // normalMap: this.textures.normal
        // })

        this.material = new THREE.MeshStandardMaterial({
            color: 'red',
            transparent: true
        })
    }

    setMesh()
    {   
        console.log('setMesh')
        // Text
        const textGeometry = new TextGeometry(
            'JIMBO',
            {
                font: this.experience.resources.items['helvetikerFont'],
                size: 1.0,
                height: 0.2,
                curveSegments: 24,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )

        textGeometry.center()
        this.mesh = new THREE.Mesh(textGeometry, this.material)
        this.mesh.castShadow = true
        this.setInitialProperties()
        this.scene.add(this.mesh)
    }

    setInitialProperties()
    {
        console.log('setInitialProperties', this.timelineMetadata)
        
        // debugger
        
        initializeEffect(this, this.timelineMetadata, this.experience.time)
    }

    start() 
    {
    }

    update()
    {
        // console.log('updating Floor.js')
        // console.log(this.timelineMetadata)
        // this.time.delta * 0.001)
        // console.log(this.experience)
        // console.log("DELTA", this.experience.time.delta)

        executeEffect(this, this.timelineMetadata, this.experience.time.delta, this.experience.time)
    }

    destroy() {
        console.log('destroy')

        console.log(
            this.geometry    
        )
        console.log(
            this.material    
        )
        
        // debugger

        const object = this.scene.getObjectByProperty( 'uuid', this.mesh.uuid );
        object.geometry.dispose();
        object.material.dispose();
        this.scene.remove( object );
    }
}