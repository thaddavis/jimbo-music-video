import * as THREE from 'three'
import Experience from '../Experience.js'

import { executeEffect } from '../Utils/Effect.js'
import { initializeEffect } from '../Utils/InitializeEffect.js'

import { get } from 'lodash'
import { Config } from 'Experience/Config'

export default class Floor
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
        this.setMesh(timelineMetadata)

        this.start()
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 256)
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
         this.material = new THREE.MeshBasicMaterial({
            color: 'red',
            transparent: true
        })
    }

    setMesh()
    {   
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.setInitialProperties()

        this.mesh.receiveShadow = get(Config, 'shadows.receiveShadows', false)
        this.scene.add(this.mesh)
    }

    setInitialProperties()
    {
        initializeEffect(this, this.timelineMetadata, this.experience.time)
    }

    start()
    {
    
    }

    update()
    {
        executeEffect(this, this.timelineMetadata, this.experience.time.delta, this.experience.time)   
    }

    destroy()
    {
        const object = this.scene.getObjectByProperty( 'uuid', this.mesh.uuid );
        object.geometry.dispose();
        object.material.dispose();
        this.scene.remove( object );
    }
}