import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import useCurrntMaterial from "../stores/useCurrntMaterial";
import useMaterialList from "../materials/useMaterialList";
import useCurrentBackGround from "../stores/useCurrentBackGround";

const sphereGeometry = new THREE.SphereGeometry(100, 64, 64);

// const testMaterial = new THREE.MeshStandardMaterial({});

const Experience = () => {
  const materialList = useMaterialList();
  const { material } = useCurrntMaterial((state) => state);
  const { isNight } = useCurrentBackGround((state) => state);
  const currentMaterial = materialList[material];

  return (
    <>
      <OrbitControls makeDefault autoRotate />
      {isNight ? (
        <Environment preset="apartment" />
      ) : (
        <Environment files="/sky.hdr" background />
      )}
      <mesh geometry={sphereGeometry} material={currentMaterial} />
      {/* <mesh geometry={sphereGeometry} material={testMaterial} /> */}
    </>
  );
};

export default Experience;
