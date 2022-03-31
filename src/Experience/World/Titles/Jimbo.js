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
        this.geometry = new THREE.CircleGeometry(5, 256)
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            color: 'red',
            transparent: true
        })
    }

    setMesh()
    {   
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
        initializeEffect(this, this.timelineMetadata, this.experience.time)
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