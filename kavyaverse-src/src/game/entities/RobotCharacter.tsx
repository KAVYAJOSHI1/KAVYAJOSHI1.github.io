"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh, MeshStandardMaterial } from "three";

interface RobotCharacterProps {
  speedRef: React.RefObject<number>;
  airborneRef: React.RefObject<boolean>;
}

/**
 * The player's avatar and NPC guide, built entirely from primitives
 * (no external .glb models exist for this project).
 */
export function RobotCharacter({ speedRef, airborneRef }: RobotCharacterProps) {
  const group = useRef<Group>(null);
  const leftArm = useRef<Mesh>(null);
  const rightArm = useRef<Mesh>(null);
  const leftLeg = useRef<Mesh>(null);
  const rightLeg = useRef<Mesh>(null);
  const eye = useRef<Mesh>(null);
  const antenna = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const speed = speedRef.current ?? 0;
    const walking = speed > 0.5 && !airborneRef.current;
    const bobSpeed = walking ? 10 : 2.5;
    const bobAmount = walking ? 0.06 : 0.035;

    if (group.current) {
      group.current.position.y = Math.sin(t * bobSpeed) * bobAmount + (airborneRef.current ? 0.1 : 0);
      group.current.rotation.z = walking ? Math.sin(t * bobSpeed) * 0.04 : 0;
    }
    const swing = walking ? Math.sin(t * bobSpeed) * 0.55 : Math.sin(t * 1.2) * 0.05;
    if (leftArm.current) leftArm.current.rotation.x = swing;
    if (rightArm.current) rightArm.current.rotation.x = -swing;
    if (leftLeg.current) leftLeg.current.rotation.x = -swing;
    if (rightLeg.current) rightLeg.current.rotation.x = swing;
    if (eye.current) {
      const pulse = 0.75 + Math.sin(t * 3) * 0.25;
      (eye.current.material as MeshStandardMaterial).emissiveIntensity = pulse * 2;
    }
    if (antenna.current) antenna.current.rotation.y = t * 1.5;
  });

  return (
    <group ref={group}>
      {/* body */}
      <mesh castShadow position={[0, 0.55, 0]}>
        <capsuleGeometry args={[0.32, 0.5, 4, 12]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.25} />
      </mesh>
      {/* chest light */}
      <mesh position={[0, 0.6, 0.3]}>
        <circleGeometry args={[0.12, 16]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
      {/* head */}
      <mesh castShadow position={[0, 1.15, 0]}>
        <boxGeometry args={[0.42, 0.34, 0.4]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* eye visor */}
      <mesh ref={eye} position={[0, 1.17, 0.21]}>
        <boxGeometry args={[0.28, 0.1, 0.03]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      {/* antenna */}
      <group position={[0, 1.4, 0]} ref={antenna}>
        <mesh position={[0.15, 0, 0]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.6} toneMapped={false} />
        </mesh>
      </group>
      {/* arms */}
      <mesh ref={leftArm} castShadow position={[-0.38, 0.75, 0]}>
        <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh ref={rightArm} castShadow position={[0.38, 0.75, 0]}>
        <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* legs */}
      <mesh ref={leftLeg} castShadow position={[-0.16, 0.15, 0]}>
        <capsuleGeometry args={[0.1, 0.3, 4, 8]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh ref={rightLeg} castShadow position={[0.16, 0.15, 0]}>
        <capsuleGeometry args={[0.1, 0.3, 4, 8]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.4} />
      </mesh>
      <pointLight color="#3b82f6" intensity={0.6} distance={4} position={[0, 1, 0]} />
    </group>
  );
}
