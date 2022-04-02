import * as THREE from "three";
import Experience from "Experience/Experience.js";

import { executeEffects } from "Experience/Utils/ExecuteEffects.js";
import { executeInitializeEffects } from "Experience/Utils/ExecuteInitializeEffects.js";

import FlagVertexShader from "Experience/Shaders/Flag/vertex.glsl";
import FlagFragmentShader from "Experience/Shaders/Flag/fragment.glsl";

import { Config } from "Experience/Config/index.js";
import { get } from "lodash";

export default class Flag {
  constructor(initialProperties) {
    // this.timelineMetadata = timelineMetadata;
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.instanceName = initialProperties.instanceName;

    this.setGeometry();
    this.setTextures();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

    const count = this.geometry.attributes.position.count;
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random();
    }

    this.geometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(randoms, 1)
    );
  }

  setTextures() {
    this.textures = {};

    this.textures.color = this.resources.items.polishFlag;
    this.textures.color.encoding = THREE.sRGBEncoding;
  }

  setMaterial() {
    // Material
    this.material = new THREE.ShaderMaterial({
      vertexShader: FlagVertexShader,
      fragmentShader: FlagFragmentShader,
      uniforms: {
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("red") },
        uTexture: { value: this.textures.color },
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.y = 2 / 3;
    this.scene.add(this.mesh);
  }

  initializeEffects(effects) {
    executeInitializeEffects(this, effects, this.experience.time);
  }

  update(effects) {
    this.material.uniforms.uTime.value = this.experience.time.elapsed;
    executeEffects(this, effects, this.experience.time.delta);
  }

  moveOffStage() {
    const offStagePlacement = get(Config, "offStage");

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
