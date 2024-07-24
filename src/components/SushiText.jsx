/* eslint-disable no-unused-vars */
import { Scroll, useScroll } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const TextSushi = () => {
  return (
    <group>
      <Text
        position={[1, 7, -7]}
        fontSize={4.5}
        color="white"
        font="/fonts/CevicheOne-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        而 Best Sushi in town 生
      </Text>
      <Text
        position={[0, -2, -20]}
        fontSize={3.5}
        color="white"
        font="/fonts/CevicheOne-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Enjoy the best dishes
      </Text>
    </group>
  );
};
