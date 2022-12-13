import create from "zustand";

export const MaterialList = {
  physicalMaterial: 0,
  physicalMaterRed: 1,
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
