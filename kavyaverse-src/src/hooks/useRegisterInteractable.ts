"use client";

import { useContext, useEffect } from "react";
import { useGameStore, type PanelContent } from "@/game/store";
import { ZoneOffsetContext } from "@/game/zoneOffsetContext";

/** `position` is local to the entity's parent zone group; converted to world space via zone offset context before registration. */
export function useRegisterInteractable(
  id: string,
  label: string,
  position: [number, number, number],
  content: PanelContent | null | undefined
) {
  const registerInteractable = useGameStore((s) => s.registerInteractable);
  const unregisterInteractable = useGameStore((s) => s.unregisterInteractable);
  const [ox, oy, oz] = useContext(ZoneOffsetContext);

  useEffect(() => {
    if (!content) return;
    const worldPosition: [number, number, number] = [position[0] + ox, position[1] + oy, position[2] + oz];
    registerInteractable({ id, label, position: worldPosition, content });
    return () => unregisterInteractable(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, label, position[0], position[1], position[2], ox, oy, oz, content]);
}
