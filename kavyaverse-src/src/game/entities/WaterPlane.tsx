"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface WaterPlaneProps {
  position: [number, number, number];
  size?: [number, number];
}

export function WaterPlane({ position, size = [40, 30] }: WaterPlaneProps) {
  const mesh = useRef<Mesh>(null);
  const basePositions = useRef<Float32Array | null>(null);

  useFrame((state) => {
    const geometry = mesh.current?.geometry;
    if (!geometry) return;
    const posAttr = geometry.attributes.position;

    if (!basePositions.current) {
      basePositions.current = Float32Array.from(posAttr.array);
    }
    const base = basePositions.current;

    const t = state.clock.elapsedTime;
    for (let i = 0; i < posAttr.count; i++) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      const wave = Math.sin(x * 0.35 + t * 1.1) * 0.12 + Math.cos(y * 0.4 + t * 0.8) * 0.1;
      posAttr.setZ(i, wave);
    }
    posAttr.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={mesh} position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[size[0], size[1], 32, 24]} />
      <meshStandardMaterial color="#0e7490" transparent opacity={0.82} metalness={0.3} roughness={0.25} />
    </mesh>
  );
}
