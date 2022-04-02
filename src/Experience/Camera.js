import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { executeEffects } from "./Utils/ExecuteEffects.js";
import { executeInitializeEffects } from "./Utils/ExecuteInitializeEffects";
export default class Camera {
  constructor() {
    // this.instanceName = initialProperties.instanceName;
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.instance.position.set(0, 0, 22);
    this.scene.add(this.instance);
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }

  initializeEffects(effects) {
    console.log("initializeEffects CAMERA");
    executeInitializeEffects(this, effects, this.experience.time);
  }

  updateCamera(updatable) {
    debugger;
    executeEffects(
      this,
      updatable.effects,
      this.experience.time.delta,
      this.experience.time
    );
  }
}
