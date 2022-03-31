import * as THREE from 'three'
import gsap from 'gsap'
import Experience from 'Experience/Experience.js'

import { executeEffect } from 'Experience/Utils/Effect.js'

export default class Phrase1Background
{
    constructor(timelineMetadata)
    {
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
        this.geometry = new THREE.PlaneGeometry( 20, 20, 10, 10 );
    }

    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.grassColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.grassNormalTexture
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            color: 'white',
            // transparent: true
        })
    }

    setMesh()
    {   
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }

    start() 
    {

    }

    update()
    {
        executeEffect(this, this.timelineMetadata, this.experience.time.delta, this.experience.time)
    }

    destroy() {
        const object = this.scene.getObjectByProperty( 'uuid', this.mesh.uuid );
        object.geometry.dispose();
        object.material.dispose();
        this.scene.remove( object );
    }
}