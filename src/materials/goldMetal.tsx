import * as THREE from "three";

const goldMetalProperty = {
  name: "goldMetal",
  roughness: 0,
  metalness: 0.5,
  color: 0xffea00,
};

export const goldMetalMaterial = new THREE.MeshPhysicalMaterial(
  goldMetalProperty
);
