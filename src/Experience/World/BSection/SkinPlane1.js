import * as THREE from 'three'
import gsap from 'gsap'
import Experience from 'Experience/Experience.js'

import { executeEffect } from 'Experience/Utils/Effect.js'
import { Vector2 } from 'three'

export default class SkinPlane1
{
    constructor(timelineMetadata)
    {
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

        this.textures.color = this.resources.items.skin1ColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        // this.textures.color.repeat.set(1.5, 1.5)
        // this.textures.color.wrapS = THREE.RepeatWrapping
        // this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.skin1NormalTexture
        this.textures.aoMap = this.resources.items.skin1AoMapTexture
        this.textures.height = this.resources.items.skin1HeightTexture
    }

    setMaterial()
    {
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
    }

    setMesh()
    {   
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true
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
        const object = this.scene.getObjectByProperty( 'uuid', this.mesh.uuid );
        object.geometry.dispose();
        object.material.dispose();
        this.scene.remove( object );
    }
}