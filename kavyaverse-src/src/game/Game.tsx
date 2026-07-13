"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { PlayerController } from "@/game/physics/PlayerController";
import { FollowCamera } from "@/game/camera/FollowCamera";
import { World } from "@/game/World";
import { InteractionSystem } from "@/game/InteractionSystem";
import { LoadingScreen } from "@/ui/LoadingScreen";
import { HUD } from "@/ui/HUD";
import { InteractionPrompt } from "@/ui/InteractionPrompt";
import { Panel } from "@/ui/Panel";
import { MobileControls } from "@/ui/MobileControls";
import { useGameStore } from "@/game/store";

const KEY_MAP = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "jump", keys: ["Space"] },
  { name: "sprint", keys: ["ShiftLeft", "ShiftRight"] },
  { name: "interact", keys: ["KeyE"] },
];

export default function Game() {
  const setMobile = useGameStore((s) => s.setMobile);

  useEffect(() => {
    const check = () => setMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [setMobile]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#060910]">
      <KeyboardControls map={KEY_MAP}>
        <Canvas shadows dpr={[1, 1.6]} camera={{ fov: 55, near: 0.1, far: 300, position: [0, 4, 12] }}>
          <color attach="background" args={["#060910"]} />
          <fog attach="fog" args={["#060910", 45, 230]} />
          <ambientLight intensity={0.45} color="#93c5fd" />
          <hemisphereLight color="#3b82f6" groundColor="#0b1120" intensity={0.5} />
          <directionalLight
            position={[30, 40, 10]}
            intensity={1.1}
            color="#dbeafe"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-80}
            shadow-camera-right={80}
            shadow-camera-top={80}
            shadow-camera-bottom={-80}
            shadow-camera-far={200}
          />
          <Stars radius={180} depth={60} count={2500} factor={4} saturation={0} fade speed={0.4} />

          <Suspense fallback={null}>
            <Physics gravity={[0, -24, 0]}>
              <PlayerController />
              <World />
            </Physics>
            <InteractionSystem />
          </Suspense>

          <FollowCamera />

          <EffectComposer multisampling={0}>
            <Bloom luminanceThreshold={0.35} luminanceSmoothing={0.25} intensity={0.65} mipmapBlur />
            <Vignette eskil={false} offset={0.15} darkness={0.65} />
          </EffectComposer>
        </Canvas>
      </KeyboardControls>

      <HUD />
      <InteractionPrompt />
      <Panel />
      <MobileControls />
      <LoadingScreen />
    </div>
  );
}
