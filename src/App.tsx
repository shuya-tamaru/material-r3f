import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import "./App.css";
import Experience from "./components/Experience";
import Interface from "./components/interface/Interface";

function App() {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          background: "#141414",
        }}
        camera={{
          fov: 75,
          near: 0.01,
          far: 2000,
          position: [0, 0, 300],
        }}
        gl={{
          outputEncoding: sRGBEncoding,
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
