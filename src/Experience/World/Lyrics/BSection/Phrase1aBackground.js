import * as THREE from 'three'
import gsap from 'gsap'
import Experience from 'Experience/Experience.js'

import { executeEffect } from 'Experience/Utils/Effect.js'

export default class Phrase2aBackground
{
    constructor(timelineMetadata)
    {
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()

        this.start()
    }

    setGeometry()
    {
        // this.geometry = new THREE.CircleGeometry(5, 256)
        this.geometry = new THREE.PlaneGeometry( 20, 20, 10, 10 );
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            color: 'white',
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