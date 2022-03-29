import * as THREE from 'three'
import gsap from 'gsap'
import Experience from '../Experience.js'

import { executeEffect } from '../Utils/Effect.js'
import { initializeEffect } from '../Utils/InitializeEffect.js'

export default class Floor
{
    constructor(timelineMetadata)
    {
        
        console.log('constructor Floor')
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh(timelineMetadata)

        this.start()
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 256)
    }

    setTextures()
    {
    }

    setMaterial()
    {
        console.log('setMaterial')
    }

    setMesh()
    {   
        console.log('setMesh')
        // this.mesh = new THREE.Mesh(this.geometry, this.material)
        // this.setInitialProperties()
        // this.mesh.rotation.x = - Math.PI * 0.5
        // this.mesh.receiveShadow = true
        // this.scene.add(this.mesh)
    }

    setInitialProperties(timelineMetadata) {
        console.log('setInitialProperties', timelineMetadata)
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

        // const object = this.scene.getObjectByProperty( 'uuid', this.mesh.uuid );
        // object.geometry.dispose();
        // object.material.dispose();
        // this.scene.remove( object );
    }
}