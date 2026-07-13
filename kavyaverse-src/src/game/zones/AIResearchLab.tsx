"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Hologram } from "@/game/entities/Hologram";
import { Building } from "@/game/entities/Building";
import { zoneById } from "@/lib/constants";
import { projectsByZone } from "@/data/projects";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("ai-lab");
const labProjects = projectsByZone("ai-lab");

const CONCEPTS = ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "MLOps"];

export function AIResearchLab() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {CONCEPTS.map((concept, i) => {
        const angle = (i / CONCEPTS.length) * Math.PI * 2;
        const r = 6;
        return (
          <Hologram
            key={concept}
            position={[Math.sin(angle) * r, 1.6, Math.cos(angle) * r]}
            color="#06b6d4"
            label={concept}
          />
        );
      })}

      {labProjects.map((project, i) => {
        const cols = 4;
        const spacing = 4.6;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (col - (cols - 1) / 2) * spacing;
        const z = 10 + row * spacing;
        return <Building key={project.id} project={project} color="#06b6d4" height={2.6} position={[x, 0, z]} />;
      })}

      {/* server racks */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} position={[(i - 2.5) * 2.2, 0.9, -9]} castShadow receiveShadow>
          <boxGeometry args={[1.1, 1.8, 1.1]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} emissive="#0891b2" emissiveIntensity={0.15} />
        </mesh>
      ))}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
