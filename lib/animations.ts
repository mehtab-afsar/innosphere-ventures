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
 * Calculate scroll progress based on element position
 */
export function calculateScrollProgress(
  rect: DOMRect,
  windowHeight: number,
  start: number,
  end: number
): number {
  const startY = windowHeight * start;
  const endY = windowHeight * end;

  if (rect.top <= startY && rect.top >= endY) {
    const p = 1 - (rect.top - endY) / (startY - endY);
    return Math.max(0, Math.min(1, p));
  } else if (rect.top < endY) {
    return 1;
  }
  return 0;
}

/**
 * Hook-friendly eased progress calculation
 * Use with useScrollProgress: const easedProgress = easeProgress(progress)
 */
export function easeProgress(progress: number): number {
  return easeInOutQuad(progress);
}
