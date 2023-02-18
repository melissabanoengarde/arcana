import React from "react";
import { OrbitControls } from "@react-three/drei";
import Card from "./Card";
import Deck from "../deck";

const Stage = () => {
  const deck = Deck.cards;
  const major = deck.filter((x) => x.arcana === "Major Arcana");
  console.log(major.map((x) => x.img));

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.8} />
      <group>
        {major.map((x) => (
          <Card key={x.name} img={x.img} />
        ))}
      </group>
      group
    </>
  );
};

export default Stage;
