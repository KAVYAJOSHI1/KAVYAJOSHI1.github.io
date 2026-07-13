export interface MobileInputState {
  x: number;
  y: number;
  jump: boolean;
  interact: boolean;
  sprint: boolean;
}

/**
 * Mutable singleton read every physics frame by the character controller.
 * Kept out of React state so joystick drags never trigger re-renders.
 */
export const mobileInput: MobileInputState = {
  x: 0,
  y: 0,
  jump: false,
  interact: false,
  sprint: false,
};

export function resetMobileInput() {
  mobileInput.x = 0;
  mobileInput.y = 0;
  mobileInput.jump = false;
  mobileInput.sprint = false;
}
