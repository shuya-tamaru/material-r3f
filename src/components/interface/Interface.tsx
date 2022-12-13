import { Select, Box, VStack, Text, Flex } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { ChangeEvent } from "react";
import useMaterialList from "../../materials/useMaterialList";
import useCurrntMaterial, {
  MaterialListType,
} from "../../stores/useCurrntMaterial";
import useCurrentBackGround from "../../stores/useCurrentBackGround";

const Interface = () => {
  const materialList = useMaterialList();
  const { setMaterial } = useCurrntMaterial();
  const { isNight, setIsNight } = useCurrentBackGround((state) => state);
  const handleMaterial = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value) as MaterialListType;
    setMaterial(value);
  };
  const handleBg = () => {
    setIsNight(!isNight);
  };

  return (
    <>
      <VStack sx={style}>
        <Flex alignItems={"center"} pt="10px">
          <Box>BackGround : </Box>
          {isNight ? (
            <SunIcon sx={iconStyle} onClick={handleBg} />
          ) : (
            <MoonIcon sx={iconStyle} onClick={handleBg} />
          )}
        </Flex>
        <Select
          sx={selectorStyle}
          placeholder="Select Material"
          onChange={handleMaterial}
          icon={<></>}
        >
          {materialList.map((material, index) => {
            return (
              <option key={index} value={index}>
                {material.name}
              </option>
            );
          })}
        </Select>
      </VStack>
    </>
  );
};

export default Interface;

const style = {
  display: "flex",
  color: "#fff",
  bg: "#333",
  top: "10",
  left: "10",
  ml: "10",
  textAlign: "center",
  position: "absolute",
};

const selectorStyle = {
  borderRadius: 0,
  color: "#666",
  fontWeight: 800,
  textAlign: "center",
};

const iconStyle = {
  fontSize: 20,
  cursor: "pointer",
  ml: "10px",
};
