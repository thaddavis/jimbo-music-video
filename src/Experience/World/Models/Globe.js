import * as THREE from 'three'
import Experience from 'Experience/Experience.js'

import { executeEffect } from 'Experience/Utils/Effect.js'

import { initializeEffect } from 'Experience/Utils/InitializeEffect.js'

export default class Globe
{
    constructor(timelineMetadata)
    {
        
        console.log('constructor Globe')
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.globeModel

        this.setModel()
        this.start()
    }

    setModel()
    {
        this.model = this.resource.scene
        // this.model.scale.set(1, 1, 1)
        // this.model.position.set(0,-4, 2)
        // this.model.position.set(0,0,0)

        this.setInitialProperties()

        let axisX = new THREE.Vector3(1, 0, 0).normalize();
        let axisY = new THREE.Vector3(0, 1, 0).normalize();
        let axisZ = new THREE.Vector3(0, 0, 1).normalize();
        let tiltAxis = new THREE.Vector3(0, 1, 0).normalize();

        // this.model.rotateOnAxis( axisX, 0 );
        this.model.rotateOnAxis( axisX, Math.PI * 27 / 100 );
        // this.model.rotateOnAxis( axisY, -Math.PI/3 );
        // this.model.rotateOnAxis( axis, Math.PI / 8 );
        // this.model.rotateOnAxis( axis, Math.PI / 16 );

        // this.model.up.set(axisX)

        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

    setInitialProperties()
    {
        console.log('setInitialProperties', this.timelineMetadata)

        // debugger

        initializeEffect(this.model, this.timelineMetadata, this.experience.time)

        // debugger
    }

    start() {
        // console.log('starting Floor.js', this.mesh.position)

        // debugger
    }

    update()
    {        
        // debugger

        // console.log('update', this.model.rotation)

        executeEffect(this.model, this.timelineMetadata, this.experience.time.delta, this.experience.time)
    }

    destroy() {
        console.log('destroy')

        // debugger

        const object = this.scene.getObjectByProperty( 'uuid', this.resource.scene.uuid );

        this.resource.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })

        this.scene.remove( object );
    }
}