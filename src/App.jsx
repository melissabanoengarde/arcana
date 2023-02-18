import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "./components";

function Loading() {
  return <h1>Loading...</h1>;
}

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <section className="canvas">
          <Canvas
            style={{
              background: "rgb(255,255,255)",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 9%, rgba(238,238,238,1) 97%)",
            }}
            camera={{ fov: 75, position: [0, 0, 10] }}
          >
            <Stage />
          </Canvas>
        </section>
      </main>

      <footer>
        Made by{" "}
        <a href="https://github.com/melissabanoengarde" target="_blank">
          Melissa Banoen-Garde
        </a>
      </footer>
    </Suspense>
  );
};

export default App;
