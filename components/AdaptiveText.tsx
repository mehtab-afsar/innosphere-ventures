/**
 * Simple utility to add adaptive text color classes
 * Use: <p className={cn("adaptive-text", otherClasses)}>text</p>
 *
 * Text will be dark at top of page, white at bottom
 */

export function getAdaptiveTextClass() {
  return "adaptive-text";
}
