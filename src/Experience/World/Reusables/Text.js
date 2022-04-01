import * as THREE from "three";
import Experience from "../../Experience.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

import { executeEffects } from "../../Utils/ExecuteEffects.js";

import { Config } from "Experience/Config/index.js";
import { get } from "lodash";

export default class Text {
  constructor(initialProperties) {
    // debugger;
    // this.timelineMetadata = timelineMetadata;
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeometry(initialProperties);
    this.setMaterial();
    this.setMesh();
  }

  setGeometry(initialProperties) {
    this.geometry = new TextGeometry(initialProperties.text, {
      font: this.experience.resources.items["helvetikerFont"],
      size: 1.0,
      height: 0.2,
      curveSegments: 24,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({
      color: "red",
    });
  }

  setMesh() {
    this.geometry.center();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.scene.add(this.mesh);
  }

  setInitialProperties(initializeProperties) {
    // initializeProperties(this, this.timelineMetadata, this.experience.time);
    initializeProperties(this, initializeProperties);
  }

  start() {}

  update(effects) {
    console.log("update Reusable Text");
    debugger;
    executeEffects(this, effects, this.experience.time.delta);
  }

  moveOffStage() {
    debugger;
    const offStagePlacement = get(Config, "offStage");
    console.log(get(Config, "offStage"));

    this.mesh.position.set(
      offStagePlacement.x,
      offStagePlacement.y,
      offStagePlacement.z
    );
  }

  destroy() {
    const object = this.scene.getObjectByProperty("uuid", this.mesh.uuid);
    object.geometry.dispose();
    object.material.dispose();
    this.scene.remove(object);
  }
}
