"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { EASTER_EGG_POSITION } from "@/lib/constants";
import { playerPosition } from "@/game/playerRef";
import { useGameStore } from "@/game/store";
import { useSound } from "@/hooks/useSound";

export function EasterEgg() {
  const mesh = useRef<Mesh>(null);
  const found = useGameStore((s) => s.easterEggFound);
  const foundEasterEgg = useGameStore((s) => s.foundEasterEgg);
  const { confetti } = useSound();

  useFrame((state) => {
    if (!mesh.current || found) return;
    const t = state.clock.elapsedTime;
    mesh.current.position.y = EASTER_EGG_POSITION[1] + Math.sin(t * 2) * 0.2;
    mesh.current.rotation.y = t;

    const dx = EASTER_EGG_POSITION[0] - playerPosition.x;
    const dz = EASTER_EGG_POSITION[2] - playerPosition.z;
    if (Math.hypot(dx, dz) < 2) {
      foundEasterEgg();
      confetti();
    }
  });

  if (found) return null;

  return (
    <mesh ref={mesh} position={EASTER_EGG_POSITION}>
      <dodecahedronGeometry args={[0.35, 0]} />
      <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1.5} toneMapped={false} />
      <pointLight color="#fbbf24" intensity={1.2} distance={4} />
    </mesh>
  );
}
