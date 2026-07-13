"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Building } from "@/game/entities/Building";
import { zoneById } from "@/lib/constants";
import { projectsByZone } from "@/data/projects";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("project-district");
const districtProjects = projectsByZone("project-district");
const COLORS = ["#06b6d4", "#10b981", "#3b82f6", "#f59e0b", "#a78bfa", "#ef4444"];

export function ProjectDistrict() {
  const cols = 3;
  const spacing = 6.2;

  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {districtProjects.map((project, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (col - (cols - 1) / 2) * spacing;
        const z = (row - (Math.ceil(districtProjects.length / cols) - 1) / 2) * spacing;
        return (
          <Building
            key={project.id}
            project={project}
            color={COLORS[i % COLORS.length]}
            height={2.8 + (i % 3) * 0.6}
            position={[x, 0, z]}
          />
        );
      })}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
