"use client";

import { Text } from "@react-three/drei";
import { ZonePlatform } from "@/game/entities/ZonePlatform";
import { Hologram } from "@/game/entities/Hologram";
import { Screen } from "@/game/entities/Screen";
import { NeonPillar } from "@/game/entities/NeonPillar";
import { zoneById } from "@/lib/constants";
import { profile } from "@/data/profile";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

const zone = zoneById("home-base");

export function HomeBase() {
  return (
    <ZoneOffsetContext.Provider value={zone.position}>
    <group position={zone.position}>
      <ZonePlatform zone={zone} />

      <Text
        position={[0, 3.4, 0]}
        fontSize={1.3}
        color="#f8fafc"
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.035}
        outlineColor="#060910"
      >
        {profile.name}
      </Text>
      <Text
        position={[0, 2.55, 0]}
        fontSize={0.32}
        color="#93c5fd"
        anchorX="center"
        anchorY="bottom"
        maxWidth={8}
        textAlign="center"
      >
        {profile.roles.join(" • ")}
      </Text>

      {profile.stats.map((stat, i) => {
        const angle = (i / profile.stats.length) * Math.PI * 2;
        const r = 8;
        return (
          <Hologram
            key={stat.label}
            position={[Math.sin(angle) * r, 1.4, Math.cos(angle) * r]}
            color={i % 2 === 0 ? "#3b82f6" : "#06b6d4"}
            label={`${stat.value} — ${stat.label}`}
            scale={0.8}
          />
        );
      })}

      <Screen
        id="home-console"
        position={[0, 1.1, 5.5]}
        label="Profile Console"
        color="#3b82f6"
        content={{ kind: "home" }}
      />

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = zone.radius - 1.5;
        return (
          <NeonPillar
            key={i}
            position={[Math.sin(angle) * r, 0, Math.cos(angle) * r]}
            color={i % 2 === 0 ? "#3b82f6" : "#a78bfa"}
            height={2.5 + (i % 3)}
          />
        );
      })}
    </group>
    </ZoneOffsetContext.Provider>
  );
}
