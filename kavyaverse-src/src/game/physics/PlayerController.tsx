"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { RigidBody, CapsuleCollider, CuboidCollider, type RapierRigidBody } from "@react-three/rapier";
import { Group, Vector3, Quaternion } from "three";
import { RobotCharacter } from "@/game/entities/RobotCharacter";
import { playerPosition, playerHeading, cameraOrbit } from "@/game/playerRef";
import { mobileInput } from "@/hooks/useMobileInput";
import { useSound } from "@/hooks/useSound";
import { useGameStore } from "@/game/store";
import { PLAYER_START } from "@/lib/constants";

const WALK_SPEED = 6.5;
const SPRINT_SPEED = 11;
const JUMP_SPEED = 7.5;

const tmpDir = new Vector3();
const tmpQuat = new Quaternion();
const UP = new Vector3(0, 1, 0);

export function PlayerController() {
  const rigidBody = useRef<RapierRigidBody>(null);
  const visual = useRef<Group>(null);
  const speedRef = useRef(0);
  const airborneRef = useRef(false);
  const groundContacts = useRef(0);
  const jumpEdge = useRef(false);
  const footstepClock = useRef(0);

  const getKeys = useKeyboardControls()[1];
  const { jump: playJump, footstep } = useSound();

  useFrame((_, delta) => {
    const rb = rigidBody.current;
    if (!rb) return;

    const panelOpen = !!useGameStore.getState().activePanel;
    const keys = getKeys();
    const kx = panelOpen ? 0 : (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    const kz = panelOpen ? 0 : (keys.backward ? 1 : 0) - (keys.forward ? 1 : 0);
    const usingKeyboard = kx !== 0 || kz !== 0;

    let inputX = kx;
    let inputZ = kz;
    if (!usingKeyboard && !panelOpen) {
      inputX = mobileInput.x;
      inputZ = -mobileInput.y;
    }

    const sprinting = !!keys.sprint || mobileInput.sprint;
    const speed = sprinting ? SPRINT_SPEED : WALK_SPEED;
    const inputLen = Math.min(1, Math.hypot(inputX, inputZ));

    const yaw = cameraOrbit.yaw;
    tmpDir.set(inputX, 0, inputZ);
    if (inputLen > 0.001) {
      tmpDir.normalize().applyAxisAngle(UP, yaw);
    }

    const currentVel = rb.linvel();
    const targetVelX = tmpDir.x * speed * inputLen;
    const targetVelZ = tmpDir.z * speed * inputLen;

    rb.setLinvel({ x: targetVelX, y: currentVel.y, z: targetVelZ }, true);

    const grounded = groundContacts.current > 0;
    airborneRef.current = !grounded;

    const jumpPressed = !panelOpen && (!!keys.jump || mobileInput.jump);
    if (jumpPressed && !jumpEdge.current && grounded) {
      rb.setLinvel({ x: currentVel.x, y: JUMP_SPEED, z: currentVel.z }, true);
      playJump();
    }
    jumpEdge.current = jumpPressed;

    const translation = rb.translation();
    playerPosition.set(translation.x, translation.y, translation.z);

    const horizSpeed = Math.hypot(targetVelX, targetVelZ);
    speedRef.current = horizSpeed;

    if (visual.current) {
      if (horizSpeed > 0.6) {
        const facing = Math.atan2(-tmpDir.x, -tmpDir.z);
        // RobotCharacter's rest pose faces +Z, while `facing` follows the world/camera yaw
        // convention where 0 points toward -Z, so the visual mesh needs an extra half-turn.
        tmpQuat.setFromAxisAngle(UP, facing + Math.PI);
        visual.current.quaternion.slerp(tmpQuat, Math.min(1, delta * 10));
        playerHeading.yaw = facing;
      }
    }

    if (grounded && horizSpeed > 0.6) {
      footstepClock.current += delta * (sprinting ? 6.5 : 4.2);
      if (footstepClock.current > 1) {
        footstepClock.current = 0;
        footstep();
      }
    } else {
      footstepClock.current = 0.5;
    }
  });

  return (
    <RigidBody
      ref={rigidBody}
      colliders={false}
      type="dynamic"
      position={PLAYER_START}
      enabledRotations={[false, false, false]}
      friction={0.9}
      linearDamping={0.5}
      mass={1}
    >
      <CapsuleCollider args={[0.35, 0.35]} />
      <CuboidCollider
        args={[0.28, 0.08, 0.28]}
        position={[0, -0.78, 0]}
        sensor
        onIntersectionEnter={() => {
          groundContacts.current += 1;
        }}
        onIntersectionExit={() => {
          groundContacts.current = Math.max(0, groundContacts.current - 1);
        }}
      />
      <group ref={visual} position={[0, -0.9, 0]}>
        <RobotCharacter speedRef={speedRef} airborneRef={airborneRef} />
      </group>
    </RigidBody>
  );
}
