import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function SlowStars() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.010; 
    ref.current.rotation.x = t * 0.008;
  });

  return (
    <Stars
      ref={ref}
      radius={45}
      depth={30}
      count={400}
      factor={2}   
      fade
      speed={0.1}   
    />
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={1.25}
        gl={{ antialias: false, alpha: true }}
      >
        <SlowStars />
      </Canvas>
    </div>
  );
}
