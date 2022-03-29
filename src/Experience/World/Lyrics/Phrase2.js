import * as THREE from 'three'
import gsap from 'gsap'
import Experience from '../../Experience.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import { executeEffect } from '../../Utils/Effect.js'

export default class Phrase2
{
    constructor(timelineMetadata)
    {
        
        console.log('constructor Phrase1')
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

        // this.mesh = new THREE.Mesh(this.geometry, this.material)
        // this.mesh.rotation.x = - Math.PI * 0.5
        // this.mesh.receiveShadow = true
        // this.scene.add(this.mesh)

        const material = new THREE.MeshStandardMaterial()

        // Text
        const textGeometry = new TextGeometry(
            'I told you I swept it',
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

        this.mesh.position.set(0,0,2)

        this.scene.add(this.mesh)
    }

    start() {
        // console.log('starting Floor.js', this.mesh.position)

        // debugger
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