import * as THREE from 'three'
import Experience from 'Experience/Experience.js'

export default class AudioClass
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        
        
    }

    loadAudio()
    {
        this.audio = this.resources.items.jimboAudio
        const listener = new THREE.AudioListener();
        this.experience.camera.instance.add( listener );
        this.track = new THREE.Audio(listener);

        this.track.setBuffer(this.audio)
        this.track.setVolume( 0.5 );
    }

    pause()
    {
        this.track.pause()
    }

    play()
    {
        this.track.play()
    }

    stop()
    {
        this.track.stop()
    }
}