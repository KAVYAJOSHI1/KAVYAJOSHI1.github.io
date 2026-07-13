"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { WaterPlane } from "@/game/entities/WaterPlane";
import { Screen } from "@/game/entities/Screen";
import { zoneById } from "@/lib/constants";
import { projects } from "@/data/projects";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("beach");
const coastscan = projects.find((p) => p.id === "coastscan")!;

function Drone() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.set(Math.sin(t * 0.5) * 3, 3.2 + Math.sin(t * 2) * 0.15, 6 + Math.cos(t * 0.5) * 3);
    group.current.rotation.y = t * 0.5;
  });
  return (
    <group ref={group}>
      <mesh castShadow>
        <boxGeometry args={[0.5, 0.12, 0.5]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.7} roughness={0.2} />
      </mesh>
      {[[-0.3, 0, -0.3], [0.3, 0, -0.3], [-0.3, 0, 0.3], [0.3, 0, 0.3]].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <cylinderGeometry args={[0.16, 0.16, 0.03, 10]} />
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
      <pointLight color="#f59e0b" intensity={0.8} distance={3} />
    </group>
  );
}

export function CoastScanBeach() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />
      <mesh position={[0, 0.005, 0]} receiveShadow>
        <cylinderGeometry args={[zone.radius - 1, zone.radius - 1, 0.04, 48]} />
        <meshStandardMaterial color="#e2c78a" roughness={0.95} />
      </mesh>
      <WaterPlane position={[0, 0.02, -zone.radius + 6]} size={[zone.radius * 2, 22]} />
      <Drone />
      <Screen
        id="coastscan-station"
        position={[0, 1.1, 4]}
        label="CoastScan Field Station"
        color="#f59e0b"
        content={{ kind: "project", data: coastscan }}
      />
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[(i - 2) * 2.4, 0.3, 8]} castShadow>
          <sphereGeometry args={[0.35, 8, 8]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.9} />
        </mesh>
      ))}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
