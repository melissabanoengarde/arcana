import React from "react";
import { OrbitControls } from "@react-three/drei";
import Card from "./Card";

const Stage = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />

      <group>
        <Card />
      </group>
    </>
  );
};

export default Stage;
