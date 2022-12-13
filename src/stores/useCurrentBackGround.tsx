import create from "zustand";

interface BackGroundType {
  isNight: boolean;
  setIsNight: (flg: boolean) => void;
}

export default create<BackGroundType>((set) => ({
  isNight: true,
  setIsNight: (flg: boolean) => {
    set(() => {
      return { isNight: flg };
    });
  },
}));
