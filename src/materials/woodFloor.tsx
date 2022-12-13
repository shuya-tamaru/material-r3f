import * as THREE from "three";
import { textureLoader } from "../utils/textureLoader";

const texture = textureLoader.load("/floor/floor_diff.jpg");
const disp = textureLoader.load("/floor/floor_disp.png");
texture.repeat.x = 4;
texture.repeat.y = 3;
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.magFilter = THREE.NearestFilter;

const woodFloorProperty = {
  name: "woodFloor",
  map: texture,
  displacementMap: disp,
  displacementScale: 0.5,
  metalness: 1,
};

export const woodFloorMaterial = new THREE.MeshPhysicalMaterial(
  woodFloorProperty
);
