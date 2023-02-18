import React from "react";
import { OrbitControls } from "@react-three/drei";

const Stage = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />

      <mesh>
        <planeGeometry args={[3, 5]} />
        <meshBasicMaterial color={"blue"} wireframe />
      </mesh>
    </>
  );
};

export default Stage;
