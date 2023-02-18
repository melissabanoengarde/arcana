import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const Card = () => {
  const texture = useTexture("cards/wands/w01.jpg");

  return (
    <mesh>
      <planeGeometry args={[2, 3.5]} />
      <meshBasicMaterial map={texture} />

      {/* back */}
      <mesh position={[0, 0, -0.001]} scale={1.02}>
        <planeGeometry args={[2, 3.5, 30, 40]} />
        <meshBasicMaterial color={"white"} wireframe side={THREE.DoubleSide} />
      </mesh>
    </mesh>
  );
};

export default Card;
