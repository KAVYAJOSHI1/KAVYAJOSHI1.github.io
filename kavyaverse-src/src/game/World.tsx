"use client";

import { RigidBody } from "@react-three/rapier";
import { ZONES } from "@/lib/constants";
import { Tree } from "@/game/entities/Tree";
import { EasterEgg } from "@/game/entities/EasterEgg";
import { HomeBase } from "@/game/zones/HomeBase";
import { AIResearchLab } from "@/game/zones/AIResearchLab";
import { CoastScanBeach } from "@/game/zones/CoastScanBeach";
import { BlockchainDistrict } from "@/game/zones/BlockchainDistrict";
import { HackathonArena } from "@/game/zones/HackathonArena";
import { SkillsFactory } from "@/game/zones/SkillsFactory";
import { CareerTimeline } from "@/game/zones/CareerTimeline";
import { ProjectDistrict } from "@/game/zones/ProjectDistrict";
import { InnovationCenter } from "@/game/zones/InnovationCenter";
import { ContactCenter } from "@/game/zones/ContactCenter";

const treePositions: [number, number, number][] = ZONES.flatMap((zone, zi) =>
  Array.from({ length: 3 }).map((_, i): [number, number, number] => {
    const angle = (i / 3) * Math.PI * 2 + zi;
    const r = zone.radius + 4;
    return [zone.position[0] + Math.sin(angle) * r, 0, zone.position[2] + Math.cos(angle) * r];
  })
);

export function World() {
  return (
    <>
      <RigidBody type="fixed" colliders="cuboid" friction={0.9}>
        <mesh receiveShadow position={[0, -0.25, 0]}>
          <boxGeometry args={[520, 0.5, 520]} />
          <meshStandardMaterial color="#0b1120" roughness={0.95} />
        </mesh>
      </RigidBody>

      {treePositions.map((pos, i) => (
        <Tree key={i} position={pos} scale={0.8 + (i % 3) * 0.25} />
      ))}

      <EasterEgg />

      <HomeBase />
      <AIResearchLab />
      <CoastScanBeach />
      <BlockchainDistrict />
      <HackathonArena />
      <SkillsFactory />
      <CareerTimeline />
      <ProjectDistrict />
      <InnovationCenter />
      <ContactCenter />
    </>
  );
}
