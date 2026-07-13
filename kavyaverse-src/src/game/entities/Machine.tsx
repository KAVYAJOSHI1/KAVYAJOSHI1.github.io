"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { Text } from "@react-three/drei";
import { useRegisterInteractable } from "@/hooks/useRegisterInteractable";
import { skillLevelColor, type Skill } from "@/data/skills";

interface MachineProps {
  skill: Skill;
  position: [number, number, number];
}

export function Machine({ skill, position }: MachineProps) {
  const gear = useRef<Mesh>(null);
  const drum = useRef<Mesh>(null);
  const color = skillLevelColor[skill.level];

  useRegisterInteractable(`skill-${skill.name}`, skill.name, position, {
    kind: "skill",
    data: skill,
  });

  useFrame((_, delta) => {
    if (gear.current) gear.current.rotation.z += delta * 1.8;
    if (drum.current) drum.current.rotation.x += delta * 2.4;
  });

  return (
    <group position={position}>
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.9, 1.4]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh ref={drum} position={[0, 0.45, 0.78]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.5, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh ref={gear} position={[-0.55, 1.05, 0]}>
        <torusGeometry args={[0.28, 0.07, 8, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.55, 1.0, 0]}>
        <boxGeometry args={[0.3, 0.08, 0.3]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} toneMapped={false} />
      </mesh>
      <pointLight color={color} intensity={0.5} distance={2.5} position={[0, 1, 0.6]} />
      <Text
        position={[0, 1.55, 0]}
        fontSize={0.22}
        color="#f1f5f9"
        anchorX="center"
        anchorY="bottom"
        maxWidth={2}
        textAlign="center"
        outlineWidth={0.012}
        outlineColor="#060910"
      >
        {skill.name}
      </Text>
    </group>
  );
}
