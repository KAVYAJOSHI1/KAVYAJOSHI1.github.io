"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Trophy } from "@/game/entities/Trophy";
import { zoneById } from "@/lib/constants";
import { achievements } from "@/data/achievements";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("hackathon-arena");

export function HackathonArena() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {/* stadium tiers */}
      {[zone.radius - 1, zone.radius - 3, zone.radius - 5].map((r, i) => (
        <mesh key={i} position={[0, 0.3 + i * 0.4, 0]}>
          <cylinderGeometry args={[r, r + 0.6, 0.3, 48, 1, true]} />
          <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.7} side={2} />
        </mesh>
      ))}

      {achievements.map((achievement, i) => {
        const angle = (i / achievements.length) * Math.PI * 2;
        const r = 10;
        return (
          <Trophy
            key={achievement.id}
            achievement={achievement}
            position={[Math.sin(angle) * r, 0, Math.cos(angle) * r]}
          />
        );
      })}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
