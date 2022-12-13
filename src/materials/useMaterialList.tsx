import * as THREE from "three";
import { glassMaterial } from "./glassMaterial";
import { goldMetalMaterial } from "./goldMetal";

import { physicalMaterial } from "./physicalMaterial";
import { physicalMaterRed } from "./physicalMaterRed";
import { woodFloorMaterial } from "./woodFloor";

const useMaterialList = () => {
  const materialList: THREE.Material[] = [
    physicalMaterial,
    physicalMaterRed,
    goldMetalMaterial,
    glassMaterial,
    woodFloorMaterial,
  ];

  return materialList;
};

export default useMaterialList;
