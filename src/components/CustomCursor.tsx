import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Mouse coordinate tracker
  const mousePos = useRef({ x: 0, y: 0 });

  // Cinematic Lerp Trail: Array of points representing the chained trail
  // 10 segments for an incredibly smooth, fluid comet-like tail
  const TRAIL_LENGTH = 10;
  const pointsRef = useRef<{ x: number; y: number; currentX: number; currentY: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0, currentX: 0, currentY: 0 }))
  );

  // Keep references to individual segment elements for zero-re-render updating
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      setIsHidden(false);

      // Map spotlight coordinates on root Element for Tailwind gradients across the portfolio
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Watch for dynamic DOM elements to bind premium hover actions
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'button, a, input, textarea, [role="button"], .interactive-element, select, .nav-link, .interactive-card, .credentials-btn, .project-card'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    addHoverListeners();

    // Recheck DOM when React dynamically renders or updates components
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let animFrameId: number;

    const updatePhysics = () => {
      const mX = mousePos.current.x;
      const mY = mousePos.current.y;

      // Update positions of trail segments using Linear Interpolation (Lerp)
      // Every segment follows the one ahead of it in a smooth delayed chain, producing a gorgeous cinematic curve
      pointsRef.current.forEach((pt, index) => {
        // Segment 0 targets the absolute mouse position.
        // Segment 1 starts from the bottom-right tail of the cursor arrow (+8px, +16px).
        // Subsequent segments target the coordinates of the segment in front of them.
        let targetX = mX;
        let targetY = mY;

        if (index === 0) {
          targetX = mX;
          targetY = mY;
        } else if (index === 1) {
          targetX = pointsRef.current[0].currentX + 5;
          targetY = pointsRef.current[0].currentY + 12;
        } else {
          targetX = pointsRef.current[index - 1].currentX;
          targetY = pointsRef.current[index - 1].currentY;
        }

        // Custom lerp factor setup for each index:
        // Index 0 (lead dot) is hyper-responsive. Subsequent segments are heavier for a slow, premium, silky sweep.
        const lerpFactor = index === 0 ? 0.35 : 0.18 - (index * 0.012);

        pt.currentX += (targetX - pt.currentX) * lerpFactor;
        pt.currentY += (targetY - pt.currentY) * lerpFactor;

        // Update corresponding DOM element directly for pristine hardware performance (avoiding React paint overhead)
        const el = segmentRefs.current[index];
        if (el) {
          // Dynamic scale calculated based on click and hover conditions
          let baseScale = 1.0;
          if (isHovered) {
            // Scale pointer slightly on hover, and tail segments modestly
            baseScale = index === 0 ? 1.25 : 1.2;
          }
          if (isClicking) {
            // Pinch/contract trail tightly on user action for tactile responsive feeling
            baseScale *= 0.65;
          }

          if (index === 0) {
            // Top-left alignment for the cursor tip to sit exactly under the click coordinate
            el.style.transform = `translate3d(${pt.currentX}px, ${pt.currentY}px, 0) translate(-1px, -1px) scale(${baseScale})`;
            
            // Dynamic color/glow rendering for SVG path - pure premium white
            const pathEl = el.querySelector("path");
            const svgEl = el.querySelector("svg");
            if (pathEl) {
              pathEl.style.fill = "rgba(255, 255, 255, 0.95)";
              pathEl.style.stroke = "rgba(255, 255, 255, 1.0)";
            }
            if (svgEl) {
              if (isHovered) {
                svgEl.style.filter = "drop-shadow(0 0 10px rgba(255, 255, 255, 0.85))";
              } else {
                svgEl.style.filter = "drop-shadow(0 0 6px rgba(255, 255, 255, 0.5))";
              }
            }
          } else {
            // Trailing circles centered translation
            el.style.transform = `translate3d(${pt.currentX}px, ${pt.currentY}px, 0) translate(-50%, -50%) scale(${baseScale})`;
            
            // Hover color changes - Previous Cyan and Purple/Indigo trail gradient
            if (isHovered) {
              el.style.backgroundColor = `rgba(139, 92, 246, ${1.0 - index * 0.1})`; // Purple gradient trail on hover
              el.style.boxShadow = "0 0 10px rgba(139, 92, 246, 0.4)";
            } else {
              el.style.backgroundColor = `rgba(6, 182, 212, ${0.75 - index * 0.075})`; // Soft cyan cinematic glow trail by default
              el.style.boxShadow = "none";
            }
          }
        }
      });

      animFrameId = requestAnimationFrame(updatePhysics);
    };

    animFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      cancelAnimationFrame(animFrameId);
    };
  }, [isHovered, isClicking]);

  if (isHidden) return null;

  return (
    <>
      {/* Background ambient spotlight effect following mouse pointer */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-1 w-full h-full spotlight-glow transition-opacity duration-300 hidden lg:block"
        style={{
          opacity: isHidden ? 0 : 1,
        }}
      />

      {/* Cinematic Lerp-based Tail Trail System */}
      <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
        {Array.from({ length: TRAIL_LENGTH }).map((_, index) => {
          // Calculate tapering proportions for each joint/segment
          const maxWidth = 8; // main trailing joint size
          const minWidth = 2; // tail end size
          const segmentWidth = maxWidth - (index * ((maxWidth - minWidth) / (TRAIL_LENGTH - 1)));
          
          if (index === 0) {
            // First segment is the high-tech futuristic cursor arrow
            return (
              <div
                key={index}
                ref={(el) => {
                  segmentRefs.current[index] = el;
                }}
                className="absolute top-0 left-0 pointer-events-none will-change-transform z-[150]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="transition-all duration-200"
                  style={{
                    transform: "rotate(-10deg)", // futuristic slanted posture
                  }}
                >
                  <path
                    d="M4.5 3V17.5L9.2 12.8L14.5 18.2L17.2 15.5L11.9 10.1L16.5 10.1L4.5 3Z"
                    className="transition-all duration-200"
                  />
                </svg>
              </div>
            );
          }

          return (
            <div
              key={index}
              ref={(el) => {
                segmentRefs.current[index] = el;
              }}
              className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform mix-blend-screen transition-colors duration-200"
              style={{
                width: `${segmentWidth}px`,
                height: `${segmentWidth}px`,
                // Opacity falls off gracefully down the train joints
                opacity: 0.85 - index * 0.085,
                zIndex: 100 - index,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
