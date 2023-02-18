import React from "react";
import * as THREE from "three";
import { useTexture, Float } from "@react-three/drei";

function rd(min, max) {
  return Math.random() * (max - min) + min;
}

const Card = ({ img }) => {
  const texture = useTexture(`cards/major/${img}`);

  return (
    <Float
      speed={1}
      rotationIntensity={1}
      floatIntensity={1}
      floatingRange={[-1, 1]}
    >
      <mesh
        position={[rd(-10, 10), rd(-10, 10), rd(-10, 5)]}
        rotation={[rd(-0.5, 0.5), rd(-0.5, 0.5), rd(-0.5, 0.5)]}
      >
        <planeGeometry args={[2, 3.5]} />
        <meshStandardMaterial map={texture} />

        {/* back */}
        <mesh position={[0, 0, -0.008]} scale={1.02}>
          <planeGeometry args={[2, 3.5, 30, 40]} />
          <meshBasicMaterial
            color={"white"}
            wireframe
            side={THREE.DoubleSide}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

export default Card;
