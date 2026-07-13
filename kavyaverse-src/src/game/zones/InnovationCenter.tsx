"use client";

import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Hologram } from "@/game/entities/Hologram";
import { Screen } from "@/game/entities/Screen";
import { zoneById } from "@/lib/constants";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("innovation-center");

const THEMES = ["Research", "Startups", "Open Source", "Robotics"];

export function InnovationCenter() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      {THEMES.map((theme, i) => {
        const angle = (i / THEMES.length) * Math.PI * 2;
        const r = 7;
        return (
          <Hologram
            key={theme}
            position={[Math.sin(angle) * r, 1.6, Math.cos(angle) * r]}
            color="#a78bfa"
            label={theme}
            scale={1.1}
          />
        );
      })}

      <Screen
        id="innovation-kiosk"
        position={[0, 1.1, 3.5]}
        label="What's Next"
        color="#a78bfa"
        content={{ kind: "innovation" }}
      />
    </group>
    </ZoneOffsetContext.Provider>
  );
}
