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
        // console.log('init Peaks')

        window.peaks = peaks

        peaks.on('player.seeked', (e) => {
            // console.log('event player.seeked', e)
        });

        peaks.on('player.timeupdate', (e) => {
            // console.log('event player.timeupdate', e)

            if (e > 52) {
                window.peaks.player.seek(29)
            }
        });

        peaks.on('player.playing', (e) => {
            // console.log('event player.playing', e)
        });

        peaks.on('player.seeked', function(e) {
            // console.log('event player.seeked', e)

            // debugger

            if (
                window && window.experience    
            ) {
                // console.log('DESTROYING...')

                window.experience.destroy()
                delete window.experience
                const experience = new Experience(document.querySelector('canvas.webgl'), window.peaks)

                // console.log('DESTROYING...')
                // debugger
            }
            

            
        });

        const experience = new Experience(document.querySelector('canvas.webgl'), peaks)
    });

    const audio = document.querySelector('audio');
    if (audio) {

        window.addEventListener('keydown', function (event) {
      
          var key = event.which || event.keyCode;
      
          if (key === 32) { // spacebar
      
            // eat the spacebar, so it does not scroll the page
            event.preventDefault();
      
            audio.paused ? audio.play() : audio.pause();
            
          }
      
        });
      }

}

main()