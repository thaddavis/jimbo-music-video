import * as THREE from 'three'
import gsap from 'gsap'
import Experience from 'Experience/Experience.js'

import { executeEffect } from 'Experience/Utils/Effect.js'
import { Vector2 } from 'three'

export default class SkinPlane2
{
    constructor(timelineMetadata)
    {
        
        console.log('constructor SkinPlane2')
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
        this.geometry = new THREE.PlaneGeometry( 20, 20, 10, 10 );
    }

    setTextures()
    {
        this.textures = {}

        console.log(this.resources)

        this.textures.color = this.resources.items.skin2ColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        // this.textures.color.repeat.set(1.5, 1.5)
        // this.textures.color.wrapS = THREE.RepeatWrapping
        // this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.skin2NormalTexture
        this.textures.aoMap = this.resources.items.skin2AoMapTexture
        this.textures.height = this.resources.items.skin2HeightTexture
    }

    setMaterial()
    {
        console.log('setMaterial')
        
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal,
            normalScale: new Vector2(0.5,0.5),
            aoMap: this.textures.aoMap,
            aoMapIntensity: 1,
            displacementMap: this.textures.height,
            displacementScale: 0.05,
            transparent: true
        })

        // this.material = new THREE.MeshStandardMaterial({
        //     color: 'white',
        //     // transparent: true
        // })
    }

    setMesh()
    {   
        console.log('setMesh')

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        // const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
        // const planeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } )
        // this.mesh = new THREE.Mesh( planeGeometry, planeMaterial );

        // this.mesh.position.x = 0 
        // this.mesh.position.y = 0
        // this.mesh.position.z = -1
        this.mesh.receiveShadow = true
        // this.mesh.castShadow = true;
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