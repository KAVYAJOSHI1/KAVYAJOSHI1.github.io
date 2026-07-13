"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { Text } from "@react-three/drei";
import { useGameStore } from "@/game/store";
import { playerPosition } from "@/game/playerRef";
import type { ZoneDefinition } from "@/lib/constants";

interface ZonePlatformProps {
  zone: ZoneDefinition;
}

export function ZonePlatform({ zone }: ZonePlatformProps) {
  const ring = useRef<Mesh>(null);
  const markZoneVisited = useGameStore((s) => s.markZoneVisited);
  const hasVisited = useRef(false);

  useFrame((state) => {
    if (ring.current) ring.current.rotation.z = state.clock.elapsedTime * 0.15;
    if (!hasVisited.current) {
      const dx = zone.position[0] - playerPosition.x;
      const dz = zone.position[2] - playerPosition.z;
      if (Math.hypot(dx, dz) < zone.radius) {
        hasVisited.current = true;
        markZoneVisited(zone.id);
      }
    }
  });

  return (
    <group>
      <mesh receiveShadow position={[0, 0.01, 0]}>
        <cylinderGeometry args={[zone.radius, zone.radius, 0.05, 48]} />
        <meshStandardMaterial color={zone.color} transparent opacity={0.14} emissive={zone.color} emissiveIntensity={0.25} />
      </mesh>
      <mesh ref={ring} position={[0, 0.04, 0]}>
        <ringGeometry args={[zone.radius - 0.4, zone.radius - 0.15, 64]} />
        <meshBasicMaterial color={zone.accent} transparent opacity={0.5} side={2} />
      </mesh>
      <Text
        position={[0, 4.2, 0]}
        fontSize={0.9}
        color="#f8fafc"
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.03}
        outlineColor="#060910"
      >
        {zone.name}
      </Text>
    </group>
  );
}
