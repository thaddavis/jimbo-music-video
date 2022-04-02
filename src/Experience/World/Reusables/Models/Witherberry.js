import * as THREE from "three";
import Experience from "Experience/Experience.js";

// import { executeEffect } from 'Experience/Utils/Effect.js'
// import { initializeEffect } from 'Experience/Utils/InitializeEffect.js'

export default class WitherberryLogo {
  constructor(timelineMetadata) {
    this.timelineMetadata = timelineMetadata;
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resource = this.resources.items.witherberryLogo;

    this.setModel();

    this.start();
  }

  setModel() {
    this.model = this.resource.scene;
    // this.model.scale.set(1, 1, 1)
    // this.model.position.set(0,-4, 2)
    // this.model.position.set(0,0,0)

    this.setInitialProperties();

    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  setInitialProperties() {
    // initializeEffect(this.model, this.timelineMetadata, this.experience.time)
  }

  start() {
    // console.log('starting Floor.js', this.mesh.position)
    // debugger
  }

  update() {
    // debugger
    // executeEffect(this.model, this.timelineMetadata, this.experience.time.delta, this.experience.time)
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
