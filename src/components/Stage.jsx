import React, { useState, useEffect, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import Card from "./Card";
import Loading from "./Loading";
import Deck from "../deck";

// function sortCards() {

// }

const Stage = () => {
  const deck = Deck.cards;
  const [isLoading, setIsLoading] = useState(true); // Loading state
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
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.8} />

      {/* major */}
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
    </>
  );
};

export default Stage;
