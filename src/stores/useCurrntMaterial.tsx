import create from "zustand";

export const MaterialList = {
  physicalMaterial: 0,
  physicalMaterRed: 1,
  goldMetalMaterial: 2,
  glassMaterial: 3,
  woodFloorMaterial: 4,
} as const;

export type MaterialListType = typeof MaterialList[keyof typeof MaterialList];
export const AllMaterialType = Object.values(MaterialList);

interface Material {
  material: MaterialListType;
  setMaterial: (_material: MaterialListType) => void;
}

export default create<Material>((set) => ({
  material: MaterialList.physicalMaterial,
  setMaterial: (_material: MaterialListType) => {
    set(() => {
      return { material: _material };
    });
  },
}));
