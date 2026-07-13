"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, MathUtils } from "three";
import { playerPosition, playerHeading, cameraOrbit } from "@/game/playerRef";
import { useGameStore } from "@/game/store";

const DISTANCE = 8.5;
const BASE_HEIGHT = 1.3;
const MIN_PITCH = 0.15;
const MAX_PITCH = 1.15;
const ROTATE_SPEED = 0.0032;

const desired = new Vector3();
const lookTarget = new Vector3();

export function FollowCamera() {
  const { camera, gl } = useThree();
  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dom = gl.domElement;

    const onPointerDown = (e: PointerEvent) => {
      if (useGameStore.getState().isMobile) return;
      dragging.current = true;
      lastPointer.current = { x: e.clientX, y: e.clientY };
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;
      lastPointer.current = { x: e.clientX, y: e.clientY };
      cameraOrbit.yaw -= dx * ROTATE_SPEED;
      cameraOrbit.pitch = MathUtils.clamp(cameraOrbit.pitch - dy * ROTATE_SPEED, MIN_PITCH, MAX_PITCH);
    };
    const onPointerUp = () => {
      dragging.current = false;
    };

    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      dom.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [gl]);

  useFrame((_, delta) => {
    if (!dragging.current) {
      const diff = ((playerHeading.yaw - cameraOrbit.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      cameraOrbit.yaw += diff * Math.min(1, delta * 1.6);
    }

    const horizDist = DISTANCE * Math.cos(cameraOrbit.pitch);
    const height = DISTANCE * Math.sin(cameraOrbit.pitch) + BASE_HEIGHT;

    desired.set(
      playerPosition.x + Math.sin(cameraOrbit.yaw) * horizDist,
      playerPosition.y + height,
      playerPosition.z + Math.cos(cameraOrbit.yaw) * horizDist
    );

    const damp = 1 - Math.pow(0.0001, delta);
    camera.position.lerp(desired, damp);

    lookTarget.set(playerPosition.x, playerPosition.y + 1.2, playerPosition.z);
    camera.lookAt(lookTarget);
  });

  return null;
}
