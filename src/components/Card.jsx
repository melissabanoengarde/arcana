import React from "react";
import * as THREE from "three";
import { useTexture, useBounds, Float } from "@react-three/drei";

function rd(min, max) {
  return Math.random() * (max - min) + min;
}

const float = {
  speed: 0.25,
  rIntensity: 0.8,
  fIntensity: 8,
};

function Select({ children }) {
  const hook = useBounds();
  return (
    <group
      onClick={(e) => (
        e.delta <= 2 && e.stopPropagation(), hook.refresh(e.object).fit()
      )}
      onPointerMissed={(e) =>
        e.button === 0 && hook.refresh().to({ position: [0, -10, 20] })
      }
    >
      {children}
    </group>
  );
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
      speed={float.speed}
      rotationIntensity={float.rIntensity}
      floatIntensity={float.fIntensity}
    >
      <Select>
        <mesh
          position={[rd(-20, 20), rd(-10, 10), rd(-20, 20)]}
          rotation={[rd(-0.5, 0.5), rd(-0.5, 0.5), rd(-0.5, 0.5)]}
        >
          <planeGeometry args={[1, 1.8]} />
          <meshStandardMaterial map={texture} />

          {/* back */}
          <mesh position={[0, 0, -0.008]} scale={1.02}>
            <planeGeometry args={[1, 1.8, 30, 40]} />
            <meshBasicMaterial
              color={"white"}
              wireframe
              side={THREE.DoubleSide}
            />
          </mesh>
        </mesh>
      </Select>
    </Float>
  );
};

export default Card;
