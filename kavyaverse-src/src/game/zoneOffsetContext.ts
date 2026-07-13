"use client";

import { createContext } from "react";

/** Provided by each Zone component (its world-space zone.position) so entities registering
 *  interactables with their local, zone-relative coordinates can convert to world space. */
export const ZoneOffsetContext = createContext<[number, number, number]>([0, 0, 0]);
