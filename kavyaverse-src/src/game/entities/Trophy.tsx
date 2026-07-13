"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { Text } from "@react-three/drei";
import { useRegisterInteractable } from "@/hooks/useRegisterInteractable";
import type { Achievement } from "@/data/achievements";

const BADGE_COLOR: Record<Achievement["badge"], string> = {
  winner: "#f59e0b",
  finalist: "#3b82f6",
  prof: "#10b981",
  "2x": "#a78bfa",
};

interface TrophyProps {
  achievement: Achievement;
  position: [number, number, number];
}

export function Trophy({ achievement, position }: TrophyProps) {
  const group = useRef<Group>(null);
  const color = BADGE_COLOR[achievement.badge];

  useRegisterInteractable(achievement.id, achievement.title, position, {
    kind: "achievement",
    data: achievement,
  });

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.6;
    group.current.position.y = position[1] + Math.sin(t * 1.4) * 0.08;
  });

  return (
    <group position={position}>
      <mesh position={[0, 0, 0]} receiveShadow>
        <cylinderGeometry args={[0.55, 0.65, 0.18, 8]} />
        <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.6} />
      </mesh>
      <group ref={group} position={[0, 0.5, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.16, 0.5, 10]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} emissive={color} emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, 0.35, 0]} castShadow>
          <sphereGeometry args={[0.28, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.65]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.15} emissive={color} emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, -0.28, 0]}>
          <torusGeometry args={[0.22, 0.04, 8, 16]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} emissive={color} emissiveIntensity={0.4} />
        </mesh>
      </group>
      <pointLight color={color} intensity={0.9} distance={3.5} position={[0, 0.8, 0]} />
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.26}
        color="#f1f5f9"
        anchorX="center"
        anchorY="bottom"
        maxWidth={3}
        textAlign="center"
        outlineWidth={0.015}
        outlineColor="#060910"
      >
        {achievement.title}
      </Text>
    </group>
  );
}
