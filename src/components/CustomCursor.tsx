/**
 * CustomCursor — A whimsical, dual-element custom cursor matching TeddyPups.
 * Consists of an inner target dot and an outer smooth-trailing follower ring.
 *
 * Behaviors:
 * - Expands and highlights over links (<a>), buttons (<button>), and cards ([data-cursor="card"]).
 * - Automatically hidden on touch devices and when prefers-reduced-motion is set.
 * - Robust against Windows touchscreens (uses pointer events without false touch locks).
 * - Smooth 60+ FPS physics with requestAnimationFrame and lerp interpolation.
 * - Hides the native OS cursor via body.has-custom-cursor only while mouse is active.
 */
"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(true);
  const [hoverState, setHoverState] = useState<"default" | "link" | "card">("default");
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hasPositioned = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Accessibility: respect prefers-reduced-motion
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    // Pure touch check (no hover and coarse pointer only)
    const isPureTouch =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches &&
      !window.matchMedia("(any-hover: hover)").matches;

    if (isPureTouch) {
      setEnabled(false);
      return;
    }

    // 2. Mouse / Pointer tracking
    const onPointerMove = (e: PointerEvent) => {
      // If a pure touch event occurred, hide custom cursor
      if (e.pointerType === "touch") {
        setIsVisible(false);
        document.body.classList.remove("has-custom-cursor");
        return;
      }

      if (!hasPositioned.current) {
        ringPos.current = { x: e.clientX, y: e.clientY };
        hasPositioned.current = true;
      }

      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      document.body.classList.add("has-custom-cursor");

      // Instantly position the inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Detect element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCard = target.closest(".door-card, [data-cursor='card'], .group\\/card");
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer, label"
      );

      if (isCard) {
        setHoverState("card");
      } else if (interactive) {
        setHoverState("link");
      } else {
        setHoverState("default");
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      setIsPressed(true);
    };

    const onPointerUp = () => {
      setIsPressed(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove("has-custom-cursor");
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add("has-custom-cursor");
    };

    // 3. Smooth trailing animation loop using lerp (Linear Interpolation)
    const animate = () => {
      // Lerp ring toward mouse position (spring ease factor: 0.18)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  // Scale and style calculations based on hover & pressed states
  let ringClasses = "w-9 h-9 -ml-[18px] -mt-[18px] border-2 border-[#a85220]/50 bg-[#eeb96a]/15";
  if (isPressed) {
    ringClasses = "w-7 h-7 -ml-3.5 -mt-3.5 border-2 border-[#a85220] bg-[#a85220]/30 scale-75 shadow-sm";
  } else if (hoverState === "card") {
    ringClasses = "w-16 h-16 -ml-8 -mt-8 border-2 border-[#a85220] bg-[#eeb96a]/35 shadow-[0_0_18px_rgba(238,185,106,0.55)] scale-110";
  } else if (hoverState === "link") {
    ringClasses = "w-12 h-12 -ml-6 -mt-6 border-2 border-[#a85220] bg-[#a85220]/20 shadow-[0_0_14px_rgba(168,82,32,0.35)] scale-110";
  }

  let dotClasses = "w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-[#3b2010]";
  if (isPressed) {
    dotClasses = "w-2 h-2 -ml-1 -mt-1 bg-[#a85220] scale-90";
  } else if (hoverState === "card" || hoverState === "link") {
    dotClasses = "w-2 h-2 -ml-1 -mt-1 bg-[#a85220]";
  }

  return (
    <div
      className={`custom-cursor-container pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer trailing follower ring with spring physics */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-200 ease-out will-change-transform flex items-center justify-center pointer-events-none backdrop-blur-[0.5px] ${ringClasses}`}
      >
        {hoverState === "card" && !isPressed && (
          <span className="text-[14px] select-none text-[#a85220] font-black animate-pulse">
            🐾
          </span>
        )}
        {hoverState === "link" && !isPressed && (
          <span className="text-[10px] select-none text-[#a85220] font-black">
            🐾
          </span>
        )}
      </div>

      {/* Inner sharp target dot (sticks directly to mouse coordinate) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-100 ease-out will-change-transform pointer-events-none shadow-sm ${dotClasses}`}
      />
    </div>
  );
}
