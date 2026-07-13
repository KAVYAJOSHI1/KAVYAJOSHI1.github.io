"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { NeonPillar } from "@/game/entities/NeonPillar";
import { Building } from "@/game/entities/Building";
import { zoneById } from "@/lib/constants";
import { projectsByZone } from "@/data/projects";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("blockchain");
const blockchainProjects = projectsByZone("blockchain");
const COLORS = ["#a78bfa", "#f59e0b", "#06b6d4", "#ec4899"];

export function BlockchainDistrict() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {blockchainProjects.map((project, i) => {
        const angle = (i / blockchainProjects.length) * Math.PI * 2;
        const r = 9;
        return (
          <Building
            key={project.id}
            project={project}
            color={COLORS[i % COLORS.length]}
            height={3 + (i % 3)}
            position={[Math.sin(angle) * r, 0, Math.cos(angle) * r]}
          />
        );
      })}

      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = zone.radius - 1.2;
        return (
          <NeonPillar
            key={i}
            position={[Math.sin(angle) * r, 0, Math.cos(angle) * r]}
            color={COLORS[i % COLORS.length]}
            height={2 + (i % 4)}
          />
        );
      })}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
