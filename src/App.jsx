import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "./components";

const App = () => {
  return (
    <main>
      <section className="canvas">
        <Canvas>
          <Stage />
        </Canvas>
      </section>
    </main>
  );
};

export default App;
