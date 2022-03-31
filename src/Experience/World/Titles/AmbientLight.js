import * as THREE from 'three'
import Experience from '../../Experience.js'

import { executeEffect } from '../../Utils/Effect.js'

export default class AmbientLight
{
    constructor(timelineMetadata)
    {
        this.timelineMetadata = timelineMetadata
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setLight()
    }

    setLight() {
        this.light = new THREE.AmbientLight(0xFF0000, 1.0)
        this.scene.add(this.light)
    }

    update()
    {
        executeEffect(this, this.timelineMetadata, this.experience.time.delta, this.experience.time)
    }

    destroy() {
        const object = this.scene.getObjectByProperty( 'uuid', this.light.uuid );
        this.scene.remove( object );
    }
}