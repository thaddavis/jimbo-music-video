// import Background from 'Experience/World/Reusables/Background'
// import Light from 'Experience/World/Reusables/Light'
// import Text from 'Experience/World/Reusables/Text'

// import { Vector2, Vector3 } from 'three';
// import { v4 as uuidv4 } from 'uuid';

import JimboIntroTitle from "./Reusables/Titles/JimboIntroTitle";
import i_told_you_i_meant_it from "./Reusables/Titles/SectionA/1-i-told-you-i-meant-it";
import i_told_you_i_swept_it from "./Reusables/Titles/SectionA/2-i-told-you-i-swept-it";
import i_told_you_ill_spend_it_for_you from "./Reusables/Titles/SectionA/3-i-told-you-ill-spend-it-for-you";

import emotions_got_blended from "./Reusables/Titles/SectionA/4-emotions-got-blended";
import its_time_that_i_sent_it from "./Reusables/Titles/SectionA/5-its-time-that-i-sent-it";
import i_told_you_ill_rep_you_for_you from "./Reusables/Titles/SectionA/6-i-told-you-ill-rep-you-for-you";
import i_told_you_ill_rep_it_all_for_you from "./Reusables/Titles/SectionA/7-i-told-you-ill-rep-it-all-for-you";

import for_you_a from "./Reusables/Titles/SectionA/ad_libs/for_you_a";
import for_you_b from "./Reusables/Titles/SectionA/ad_libs/for_you_b";

import Flag from "./Reusables/Flag";

import BackgroundSkin1 from "./Reusables/BackgroundSkin1";
import BackgroundSkin2 from "./Reusables/BackgroundSkin2";

import i_just_wanna_feel_your_skin from "./Reusables/Titles/SectionB/1-i-just-wanna-feel-your-skin";
import up_on_mine from "./Reusables/Titles/SectionB/2-up-on-mine";

import Light from "./Reusables/Light";
import Globe from "./Reusables/Globe";
import Background from "./Reusables/Background";
import Cross from "./Reusables/Cross";

import { INSTANCE_NAMES } from "../Utils/Enums";

export function initializeReusables(reusables) {
  reusables[INSTANCE_NAMES.JIMBO_INTRO_TITLE] = JimboIntroTitle;
  reusables[INSTANCE_NAMES.LIGHT] = Light;
  reusables[INSTANCE_NAMES.GLOBE] = Globe;
  reusables[INSTANCE_NAMES.BACKGROUND] = Background;
  reusables[INSTANCE_NAMES.CROSS] = Cross;

  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_1] = i_told_you_i_meant_it;
  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_2] = i_told_you_i_swept_it;
  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_3] =
    i_told_you_ill_spend_it_for_you;

  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_4] = emotions_got_blended;
  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_5] = its_time_that_i_sent_it;
  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_6] = i_told_you_ill_rep_you_for_you;
  reusables[INSTANCE_NAMES.SECTION_A_PHRASE_7] =
    i_told_you_ill_rep_it_all_for_you;

  reusables[INSTANCE_NAMES.SECTION_A_AD_LIBS_FOR_YOU_A] = for_you_a;
  reusables[INSTANCE_NAMES.SECTION_A_AD_LIBS_FOR_YOU_B] = for_you_b;

  reusables[INSTANCE_NAMES.FLAG] = Flag;

  reusables[INSTANCE_NAMES.BACKGROUND_SKIN_1] = BackgroundSkin1;
  reusables[INSTANCE_NAMES.BACKGROUND_SKIN_2] = BackgroundSkin2;

  reusables[INSTANCE_NAMES.SECTION_B_PHRASE_1] = i_just_wanna_feel_your_skin;
  reusables[INSTANCE_NAMES.SECTION_B_PHRASE_2] = up_on_mine;

  for (let r in reusables) {
    // console.log("r", r);

    reusables[r] = new reusables[r].theClass(reusables[r].initialProperties);

    // debugger;
    reusables[r].moveOffStage();
  }
}
