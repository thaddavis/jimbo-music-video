import * as THREE from 'three'
import Experience from '../../../Experience.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import { executeEffect } from '../../../Utils/Effect.js'

export default class Phrase2d
{
    constructor(timelineMetadata)
    {
        
        console.log('constructor Phrase2d')
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
            'up on mine',
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

        this.mesh.position.set(0,-2,2)

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