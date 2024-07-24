import "./App.css";
import { Canvas } from "@react-three/fiber";
import { SushiExperience } from "./components/SushiExperience";
import { ScrollControls } from "@react-three/drei";
//import { NumberFloors } from "./components/SushiSticks";
import { TextSushi } from "./components/SushiText";

function App() {
  return (
    <Canvas
      camera={{
        fov: 90,
        position: [0, 5, 5],
      }}
    >
      <ScrollControls pages={1} damping={2} />
      <TextSushi />
      <SushiExperience />
    </Canvas>
  );
}

export default App;
