import * as THREE from "three";
import Experience from "Experience/Experience.js";

import { executeEffects } from "Experience/Utils/ExecuteEffects.js";
import { executeInitializeEffects } from "Experience/Utils/ExecuteInitializeEffects.js";

import { Config } from "Experience/Config/index.js";
import { get } from "lodash";

export default class Globe {
  constructor(initialProperties) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resource = this.resources.items.globeModel;
    this.instanceName = initialProperties.instanceName;

    this.setModel(initialProperties);
  }

  setModel(initialProperties) {
    this.model = this.resource.scene;
    // this.setInitialProperties()

    this.model.position.set(
      initialProperties.position.x,
      initialProperties.position.y,
      initialProperties.position.z
    );

    let axisX = new THREE.Vector3(1, 0, 0).normalize();
    let axisY = new THREE.Vector3(0, 1, 0).normalize();
    let axisZ = new THREE.Vector3(0, 0, 1).normalize();
    let tiltAxis = new THREE.Vector3(0, 1, 0).normalize();

    this.model.rotateOnAxis(axisX, (Math.PI * 27) / 100);

    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  initializeEffects(effects) {
    executeInitializeEffects(this, effects, this.experience.time);
  }

  update(effects) {
    executeEffects(
      this,
      effects,
      this.experience.time.delta,
      this.experience.time.elapsed
    );
  }

  moveOffStage() {
    const offStagePlacement = get(Config, "offStage");

    this.model.position.set(
      offStagePlacement.x,
      offStagePlacement.y,
      offStagePlacement.z
    );
  }

  destroy() {
    const object = this.scene.getObjectByProperty(
      "uuid",
      this.resource.scene.uuid
    );

    this.resource.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });

    this.scene.remove(object);
  }
}
