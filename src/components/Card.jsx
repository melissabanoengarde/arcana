import React from "react";
import * as THREE from "three";
import { useTexture, Float } from "@react-three/drei";

function rd(min, max) {
  return Math.random() * (max - min) + min;
}

const Card = ({ data }) => {
  let imgUrl;

  if (data.img[0] === "m") {
    imgUrl = `major/${data.img}`;
  } else if (data.img[0] === "c") {
    imgUrl = `cups/${data.img}`;
  } else if (data.img[0] === "p") {
    imgUrl = `pentacles/${data.img}`;
  } else if (data.img[0] === "s") {
    imgUrl = `swords/${data.img}`;
  } else if (data.img[0] === "w") {
    imgUrl = `wands/${data.img}`;
  }

  const texture = useTexture(`cards/${imgUrl}`);

  return (
    <Float
      speed={1}
      rotationIntensity={1}
      floatIntensity={1}
      floatingRange={[-1, 1]}
    >
      <mesh
        position={[rd(-50, 50), rd(-20, 20), rd(-30, 10)]}
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
