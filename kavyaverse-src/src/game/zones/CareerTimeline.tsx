"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Screen } from "@/game/entities/Screen";
import { zoneById } from "@/lib/constants";
import { timeline } from "@/data/timeline";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("career-timeline");

const KIND_COLOR: Record<string, string> = {
  academic: "#3b82f6",
  experience: "#10b981",
  goal: "#a78bfa",
};

export function CareerTimeline() {
  const spacing = 3.6;
  const startZ = -((timeline.length - 1) * spacing) / 2;

  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {/* walking path */}
      <mesh position={[0, 0.015, 0]} receiveShadow>
        <boxGeometry args={[1.6, 0.03, timeline.length * spacing]} />
        <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.6} />
      </mesh>

      {timeline.map((stage, i) => (
        <Screen
          key={stage.id}
          id={stage.id}
          position={[i % 2 === 0 ? -1.4 : 1.4, 1.1, startZ + i * spacing]}
          rotationY={i % 2 === 0 ? Math.PI / 5 : -Math.PI / 5}
          label={`${stage.period} · ${stage.title}`}
          color={KIND_COLOR[stage.kind]}
          content={{ kind: "timeline", data: stage }}
        />
      ))}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
