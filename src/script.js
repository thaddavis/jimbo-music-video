import Experience from './Experience/Experience.js'
import Peaks from 'peaks.js'
import './styles/style.css'

const options = {
    zoomview: {
      container: document.getElementById('zoomview-container')
    },
    overview: {
      container: document.getElementById('overview-container')
    },
    mediaElement: document.querySelector('audio'),
    webAudio: {
      audioContext: new AudioContext()
    }
};
 
const main = () => {

    Peaks.init(options, function(err, peaks) {
        console.log('init Peaks')

        peaks.on('player.seeked', (e) => {
            console.log('event player.seeked', e)
        });

        peaks.on('player.timeupdate', (e) => {
            console.log('event player.timeupdate', e)
        });

        const experience = new Experience(document.querySelector('canvas.webgl'), peaks)
    });

}

main()