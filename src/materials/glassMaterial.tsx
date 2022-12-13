import * as THREE from "three";

const glassProperty = {
  name: "glass",
  roughness: 0,
  metalness: 0,
  transmission: 1,
  ior: 3.0,
};

export const glassMaterial = new THREE.MeshPhysicalMaterial(glassProperty);
