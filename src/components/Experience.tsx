import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import useCurrntMaterial from "../stores/useCurrntMaterial";
import useMaterialList from "../materials/useMaterialList";
import useCurrentBackGround from "../stores/useCurrentBackGround";

const sphereGeometry = new THREE.SphereGeometry(100, 64, 64);

const Experience = () => {
  const materialList = useMaterialList();
  const { material } = useCurrntMaterial((state) => state);
  const { isNight } = useCurrentBackGround((state) => state);
  const currentMaterial = materialList[material];

  return (
    <>
      <OrbitControls makeDefault autoRotate />
      <pointLight />
      {isNight ? (
        <Environment preset="sunset" />
      ) : (
        <Environment files="/sky.hdr" background />
      )}
      <mesh geometry={sphereGeometry} material={currentMaterial} />
    </>
  );
};

export default Experience;
