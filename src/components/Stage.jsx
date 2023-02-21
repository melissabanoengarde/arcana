import React, { useState, useEffect } from "react";
import { OrbitControls, Sparkles, Bounds } from "@react-three/drei";
import Card from "./Card";
import Loading from "./Loading";
import Deck from "../deck";

const Stage = () => {
  const deck = Deck.cards;

  const [isLoading, setIsLoading] = useState(true);
  const [major, setMajor] = useState(null);
  const [cups, setCups] = useState(null);
  const [pentacles, setPentacles] = useState(null);
  const [swords, setSwords] = useState(null);
  const [wands, setWands] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const m = deck.filter((m) => m.arcana === "Major Arcana");
      const c = deck.filter((c) => c.suit === "Cups");
      const p = deck.filter((p) => p.suit === "Pentacles");
      const s = deck.filter((s) => s.suit === "Swords");
      const w = deck.filter((w) => w.suit === "Wands");

      setMajor(m);
      setCups(c);
      setPentacles(p);
      setSwords(s);
      setWands(w);

      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
        minAzimuthAngle={-1}
        maxAzimuthAngle={Math.PI / 3.75}
        // minZoom={-15}
        // maxZoom={10}
      />
      <ambientLight intensity={0.8} />

      <Sparkles
        color={"#33423A"}
        scale={(100, 50, 100)}
        count={1000}
        size={7}
        noise={7}
        speed={1}
      />

      <Bounds
        //fit
        clip
        observe
        //</>margin={0.2}
      >
        <group>
          {major.map((m) => (
            <Card key={m.name} data={m} />
          ))}
        </group>

        <group>
          {cups.map((c) => (
            <Card key={c.name} data={c} />
          ))}
        </group>

        <group>
          {pentacles.map((p) => (
            <Card key={p.name} data={p} />
          ))}
        </group>

        <group>
          {swords.map((s) => (
            <Card key={s.name} data={s} />
          ))}
        </group>

        <group>
          {wands.map((w) => (
            <Card key={w.name} data={w} />
          ))}
        </group>
      </Bounds>
    </>
  );
};

export default Stage;
