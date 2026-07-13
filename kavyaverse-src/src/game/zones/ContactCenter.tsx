"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Screen } from "@/game/entities/Screen";
import { Hologram } from "@/game/entities/Hologram";
import { zoneById } from "@/lib/constants";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("contact-center");

export function ContactCenter() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {/* desk */}
      <mesh position={[0, 0.4, 2]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.8, 1]} />
        <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.5} />
      </mesh>

      <Screen
        id="contact-terminal"
        position={[0, 1.2, 1.6]}
        label="Let's Build Something Amazing"
        color="#10b981"
        content={{ kind: "contact" }}
      />

      <Hologram position={[-4, 1.4, -2]} color="#0a66c2" label="LinkedIn" />
      <Hologram position={[4, 1.4, -2]} color="#94a3b8" label="GitHub" />
    </group>
    </ZoneOffsetContext.Provider>
  );
}
