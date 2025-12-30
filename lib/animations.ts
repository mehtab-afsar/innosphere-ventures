/**
 * Animation utility functions
 */

/**
 * Easing function: ease-in-out-quad
 * Creates smooth acceleration and deceleration
 */
export function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/**
 * Hook-friendly eased progress calculation
 * Use with useScrollProgress: const easedProgress = easeProgress(progress)
 */
export function easeProgress(progress: number): number {
  return easeInOutQuad(progress);
}
