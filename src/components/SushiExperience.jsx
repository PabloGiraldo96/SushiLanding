/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { SushiSticks } from "./SushiSticks";

export const SushiExperience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={4} />
      <SushiSticks />
    </>
  );
};
