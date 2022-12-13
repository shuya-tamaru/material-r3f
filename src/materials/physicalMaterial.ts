import * as THREE from "three";
import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";

const texture = new THREE.CanvasTexture(new FlakesTexture());
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 10;
texture.repeat.y = 6;

const physicalMaterialProperty = {
  name: "physicalMaterial",
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  metalness: 0.9,
  roughness: 0.5,
  color: "#8418ca",
  normalMap: texture,
  normalScale: new THREE.Vector2(0.15, 0.15),
};

export const physicalMaterial = new THREE.MeshPhysicalMaterial(
  physicalMaterialProperty
);
