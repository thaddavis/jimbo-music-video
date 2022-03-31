import * as THREE from 'three'
import Experience from 'Experience/Experience.js'
import { executeEffect } from 'Experience/Utils/Effect.js'
import { Vector2 } from 'three'
import { Config } from 'Experience/Config'
import { get } from 'lodash'
export default class SkinPlane2
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

        this.textures.color = this.resources.items.skin2ColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        
        this.textures.normal = this.resources.items.skin2NormalTexture
        this.textures.aoMap = this.resources.items.skin2AoMapTexture
        this.textures.height = this.resources.items.skin2HeightTexture
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
        this.mesh.receiveShadow = get(Config, 'shadows.receiveShadows', false)
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