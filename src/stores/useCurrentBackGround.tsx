import create from "zustand";

interface BackGroundType {
  isNight: boolean;
  setIsNight: (flg: boolean) => void;
}

export default create<BackGroundType>((set) => ({
  isNight: false,
  setIsNight: (flg: boolean) => {
    set(() => {
      return { isNight: flg };
    });
  },
}));
