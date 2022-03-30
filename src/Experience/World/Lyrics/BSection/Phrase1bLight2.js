import * as THREE from 'three'
import Experience from 'Experience/Experience.js'

import { get } from 'lodash'
import { executeEffect } from 'Experience/Utils/Effect.js'

import { Config } from 'Experience/Config'

export default class Phrase2bLight2
{
    constructor(timelineMetadata)
    {
        console.log('constructor Phrase2bLight2')
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setLight()
    }

    setLight() {
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1, 100)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.width = get(Config, 'shadows.mapSize.x', 2048)
        directionalLight.shadow.mapSize.height = get(Config, 'shadows.mapSize.y', 2048)
        directionalLight.shadow.camera.near = 0.5
        directionalLight.shadow.camera.far = 20
        directionalLight.shadow.camera.top = 20
        directionalLight.shadow.camera.right = 20
        directionalLight.shadow.camera.bottom = -20
        directionalLight.shadow.camera.left = -20
        directionalLight.position.set(2, -2, 14)

        const t = new THREE.Object3D();
        t.translateX(0);
        t.translateY(0);
        t.translateZ(0);
        directionalLight.target = t;

        this.light = directionalLight

        this.scene.add(directionalLight)
        this.scene.add(directionalLight.target);
        const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
        directionalLightCameraHelper.visible = false
        this.scene.add(directionalLightCameraHelper)
    }

    update()
    {
        executeEffect(this, this.timelineMetadata, this.experience.time.delta, this.experience.time)
    }

    destroy() {
        console.log('destroy')

        const object = this.scene.getObjectByProperty( 'uuid', this.light.uuid );
        this.scene.remove( object );
    }
}