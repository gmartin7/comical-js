// This is the interface for storing the state of a bubble.

export interface Bubble {
  version: string; // currently 1.0
  style: string; // currently one of speech or shout
  tips: Tip[];
  level: number; // relative z-index, bubbles with same one merge, larger overlay (not implemented yet)
  borderStyle?: string; // not implemented or fully designed yet
  backgroundColors?: string[]; //  just 1 color for solid, multiple for gradient. Omit for white. Top to bottom.
  outerBorderColor?: string; // omit for black; not implemented.
}
// Design has a parentBubble attribute...not sure whether we need this, so leaving out for now.
// Do we need to control things like angle of gradient?

export interface Tip {
  targetX: number; // tip point, relative to the main image on which the bubble is placed
  targetY: number;
  midpointX: number; // notionally, tip's curve passes through this point
  midpointY: number;
}
// Do we need to specify a width? Other attributes for bezier curve?
// Current design: start with three points, the target, midpoint, and the root (center of the text block).
// imagine a straight line from the root to the target.
// Imagine two line segments at right angles to this, a base length centered at the root,
// and half that length centered at the midpoint.
// The tip is made up of two curves each defined by the target, one end of the root segment,
// and the corresponding end of the midpoint segment.
