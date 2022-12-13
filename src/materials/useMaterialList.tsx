import * as THREE from "three";

import { physicalMaterial } from "./physicalMaterial";
import { physicalMaterRed } from "./physicalMaterRed";

const useMaterialList = () => {
  const materialList: THREE.Material[] = [physicalMaterial, physicalMaterRed];

  return materialList;
};

export default useMaterialList;
