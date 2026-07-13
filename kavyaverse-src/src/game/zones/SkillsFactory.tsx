"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Machine } from "@/game/entities/Machine";
import { zoneById } from "@/lib/constants";
import { skills } from "@/data/skills";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("skills-factory");

export function SkillsFactory() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {skills.map((skill, i) => {
        const cols = 5;
        const spacing = 3.4;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (col - (cols - 1) / 2) * spacing;
        const z = (row - 0.5) * spacing;
        return <Machine key={skill.name} skill={skill} position={[x, 0, z]} />;
      })}

      {/* conveyor belt strip */}
      <mesh position={[0, 0.02, 0]} receiveShadow>
        <boxGeometry args={[5 * 3.4, 0.05, 1.4]} />
        <meshStandardMaterial color="#111827" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
    </ZoneOffsetContext.Provider>
  );
}
