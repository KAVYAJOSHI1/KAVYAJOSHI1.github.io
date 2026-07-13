import { Vector3 } from "three";

/** Updated every frame by the character controller; read by camera & interaction systems. */
export const playerPosition = new Vector3(0, 0, 0);
export const playerHeading = { yaw: 0 };

/** Owned by the follow camera (mouse-drag orbit); read by the controller for camera-relative movement. */
export const cameraOrbit = { yaw: 0, pitch: 0.45 };
