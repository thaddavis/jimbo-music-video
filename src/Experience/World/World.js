import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

import { v4 as uuidv4 } from 'uuid';

import { addTimelineEvents_intro } from '../Timeline/Intro'
import { addTimelineEvents_1st_verse_1st_phrase } from '../Timeline/1stStanza/1stVerse1stPhrase'
import { addTimelineEvents_1st_verse_2nd_phrase } from '../Timeline/1stStanza/1stVerse2ndPhrase'
import { addTimelineEvents_1st_verse_3rd_phrase } from '../Timeline/1stStanza/1stVerse3rdPhrase'
import { addTimelineEvents_ad_libs_for_you_for_you } from '../Timeline/AdLibs/ForYouForYou'

import { addTimelineEvents_2nd_verse_1st_phrase } from '../Timeline/2ndStanza/2ndStanza1stPhrase'
import { addTimelineEvents_2nd_verse_2nd_phrase } from '../Timeline/2ndStanza/2ndStanza2ndPhrase'
import { addTimelineEvents_2nd_verse_3rd_phrase } from '../Timeline/2ndStanza/2ndStanza3rdPhrase'
import { addTimelineEvents_ad_libs_for_you_for_you_alt } from '../Timeline/AdLibs/ForYouForYouAlt'

import { addTimelineEvents_3rd_stanza_1st_phrase } from '../Timeline/3rdStanza/3rdStanza1stPhrase'
import { addTimelineEvents_3rd_stanza_2nd_phrase } from '../Timeline/3rdStanza/3rdStanza2ndPhrase'
import { addTimelineEvents_3rd_stanza_3rd_phrase } from '../Timeline/3rdStanza/3rdStanza3rdPhrase'

import { addTimelineEvents_ad_libs_for_you_up } from '../Timeline/AdLibs/ForYouForYouUp'

import { addTimelineEvents_4th_stanza_1st_phrase } from '../Timeline/4thStanza/4thStanza1stPhrase'
import { addTimelineEvents_4th_stanza_2nd_phrase } from '../Timeline/4thStanza/4thStanza2ndPhrase'
import { addTimelineEvents_4th_stanza_3rd_phrase } from '../Timeline/4thStanza/4thStanza3rdPhrase'

import { addTimelineEvents_b_section_background } from 'Experience/Timeline/BSection/Background'
import { addTimelineEvents_b_section_camera } from 'Experience/Timeline/BSection/Camera'
import { addTimelineEvents_b_section_light } from 'Experience/Timeline/BSection/Light'

import { addTimelineEvents_b_section_1st_phrase } from 'Experience/Timeline/BSection/Phrase1'
import { addTimelineEvents_b_section_phrase1a } from 'Experience/Timeline/BSection/Phrase1a'
import { addTimelineEvents_b_section_phrase1b } from 'Experience/Timeline/BSection/Phrase1b';
import { addTimelineEvents_b_section_2nd_phrase } from 'Experience/Timeline/BSection/Phrase2'
import { addTimelineEvents_b_section_phrase2a } from 'Experience/Timeline/BSection/Phrase2a';
import { addTimelineEvents_b_section_phrase2b } from 'Experience/Timeline/BSection/Phrase2b';

import { addTimelineEvents_b_section_flag_cutaway } from 'Experience/Timeline/BSection/Cutaways/BSectionFlag.js';

import { 
    EFFECTS,
    GLOBAL_UPDATABLES
} from '../Utils/Enums.js';

import {
    set,
    get,
} from 'lodash'


export default class World
{
    constructor()
    {
        console.log('World constructor')

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.timelineOfEvents = {};
        this.updatables = {};

        // Wait for resources

        console.log('definite on ready handler')

        this.resources.on('ready', () =>
        {
            console.log('ready')
            // Setup
            
            addTimelineEvents_intro(this.timelineOfEvents)
            addTimelineEvents_1st_verse_1st_phrase(this.timelineOfEvents)
            addTimelineEvents_1st_verse_2nd_phrase(this.timelineOfEvents)
            addTimelineEvents_1st_verse_3rd_phrase(this.timelineOfEvents)
            addTimelineEvents_ad_libs_for_you_for_you(this.timelineOfEvents)

            addTimelineEvents_2nd_verse_1st_phrase(this.timelineOfEvents)
            addTimelineEvents_2nd_verse_2nd_phrase(this.timelineOfEvents)
            addTimelineEvents_2nd_verse_3rd_phrase(this.timelineOfEvents)
            addTimelineEvents_ad_libs_for_you_for_you_alt(this.timelineOfEvents)

            addTimelineEvents_3rd_stanza_1st_phrase(this.timelineOfEvents)
            addTimelineEvents_3rd_stanza_2nd_phrase(this.timelineOfEvents)
            addTimelineEvents_3rd_stanza_3rd_phrase(this.timelineOfEvents)
            addTimelineEvents_ad_libs_for_you_up(this.timelineOfEvents)

            addTimelineEvents_4th_stanza_1st_phrase(this.timelineOfEvents)
            addTimelineEvents_4th_stanza_2nd_phrase(this.timelineOfEvents)
            addTimelineEvents_4th_stanza_3rd_phrase(this.timelineOfEvents)

            addTimelineEvents_b_section_background(this.timelineOfEvents)
            addTimelineEvents_b_section_camera(this.timelineOfEvents)
            addTimelineEvents_b_section_light(this.timelineOfEvents)

            addTimelineEvents_b_section_1st_phrase(this.timelineOfEvents)
            addTimelineEvents_b_section_phrase1a(this.timelineOfEvents)
            addTimelineEvents_b_section_phrase1b(this.timelineOfEvents)
            addTimelineEvents_b_section_2nd_phrase(this.timelineOfEvents)
            addTimelineEvents_b_section_phrase2a(this.timelineOfEvents)
            addTimelineEvents_b_section_phrase2b(this.timelineOfEvents)

            addTimelineEvents_b_section_flag_cutaway(this.timelineOfEvents)

            this.environment = new Environment()
        })
    }

    update()
    {
        // debugger
        // console.log(this.experience.playerInstance.player.getCurrentTime())
        // console.log('this.experience.time', this.experience.time)
        // debugger

        for (let updatableId in this.timelineOfEvents) {
            const updatable = this.timelineOfEvents[updatableId]

            if (
              [
                EFFECTS.FROM_TO
              ].includes(updatable.effect.name)
            ) {

                if (
                    this.experience.playerInstance.player.getCurrentTime() >= updatable.effect.startAt &&
                    this.experience.playerInstance.player.getCurrentTime() <= updatable.effect.endAt &&
                    updatable.started === false
                ) {
                    // debugger
                    this.updatables[updatableId] = new updatable.theClass(updatable)
                    updatable.started = true
                } else if (
                    this.experience.playerInstance.player.getCurrentTime() > updatable.effect.endAt &&
                    updatable.started === true
                ) {
                    // debugger
                    // dispose and delete
                    this.updatables[updatableId].destroy()
                    this.timelineOfEvents[updatableId].started = false
                    delete this.updatables[updatableId]
                }
            } else if (
                [
                    EFFECTS.GLOBAL_FROM_TO
                ].includes(updatable.effect.name)
            ) {
                if (
                    this.experience.playerInstance.player.getCurrentTime() >= updatable.effect.startAt &&
                    this.experience.playerInstance.player.getCurrentTime() <= updatable.effect.endAt &&
                    updatable.started === false
                ) {
                    // debugger
                    // this.updatables[updatableId] = new updatable.theClass(updatable)
                    // debugger
                    this.updatables[updatableId] = {
                        isGlobal: true,
                        updatable: updatable
                    }
                    // debugger

                    // vvv initialize camera to from value for effect vvv
                    if ([
                        GLOBAL_UPDATABLES.CAMERA_INSTANCE
                    ].includes(get(this.updatables[updatableId], 'updatable.effect.pathToExperienceGlobal'))
                    ) {
                        // debugger
                        window.experience.camera.setCameraToInitialValue(this.updatables[updatableId].updatable)
                    }
                    // ^^^ initialize camera to from value for effect ^^^

                    updatable.started = true
                } else if (
                    this.experience.playerInstance.player.getCurrentTime() > updatable.effect.endAt &&
                    updatable.started === true
                ) {
                    // delete
                    this.timelineOfEvents[updatableId].started = false
                    delete this.updatables[updatableId]
                }
            } else {

            }
        }

        // debugger

        for (let updatableId in this.updatables) {
            
            if (
                this.updatables[updatableId]
                &&
                this.updatables[updatableId].isGlobal
            ) {
                
                if ([
                    GLOBAL_UPDATABLES.CAMERA_INSTANCE
                ].includes(get(this.updatables[updatableId], 'updatable.effect.pathToExperienceGlobal'))
                ) {
                    // debugger
                    window.experience.camera.updateCamera(this.updatables[updatableId].updatable)
                }

            } else {
                this.updatables[updatableId].update()
            }
        }
    }

    reset() {

    }
}