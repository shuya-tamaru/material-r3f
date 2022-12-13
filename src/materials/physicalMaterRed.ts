import * as THREE from "three";
import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";

const texture = new THREE.CanvasTexture(new FlakesTexture());
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 10;
texture.repeat.y = 6;

const physicalMaterialProperty = {
  name: "physicalMaterRed",
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  metalness: 0.9,
  roughness: 0.5,
  color: "#ff0000",
  normalMap: texture,
  normalScale: new THREE.Vector2(0.15, 0.15),
};

export const physicalMaterRed = new THREE.MeshPhysicalMaterial(
  physicalMaterialProperty
);
