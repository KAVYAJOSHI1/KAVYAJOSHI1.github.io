"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useGameStore } from "@/game/store";
import { playerPosition } from "@/game/playerRef";
import { mobileInput } from "@/hooks/useMobileInput";
import { useSound } from "@/hooks/useSound";

const INTERACT_RANGE = 5.5;

export function useInteraction() {
  const interactPressedRef = useRef(false);
  const mobileInteractRef = useRef(false);
  const { interact: playInteract } = useSound();
  const getKeys = useKeyboardControls()[1];

  useFrame(() => {
    const { interactables, setNearestInteractable, nearestInteractable, openPanel, activePanel } =
      useGameStore.getState();

    let closest: (typeof interactables)[number] | null = null;
    let closestDist = INTERACT_RANGE;
    for (const item of interactables) {
      const dx = item.position[0] - playerPosition.x;
      const dz = item.position[2] - playerPosition.z;
      const d = Math.sqrt(dx * dx + dz * dz);
      if (d < closestDist) {
        closestDist = d;
        closest = item;
      }
    }

    if (closest?.id !== nearestInteractable?.id) {
      setNearestInteractable(closest);
    }

    const keys = getKeys();
    const keyDown = !!keys.interact;
    const mobileDown = mobileInput.interact;

    const edgeTriggered =
      (keyDown && !interactPressedRef.current) || (mobileDown && !mobileInteractRef.current);

    interactPressedRef.current = keyDown;
    mobileInteractRef.current = mobileDown;

    if (edgeTriggered && closest && !activePanel) {
      openPanel(closest.content);
      playInteract();
    }
  });
}
