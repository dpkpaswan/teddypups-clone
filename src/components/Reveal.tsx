/**
 * Reveal — Reusable scroll animation component using IntersectionObserver.
 * Triggers fade & slide-in effects as elements enter the viewport.
 *
 * Props:
 * - direction: "up" | "down" | "left" | "right" | "scale" | "fade"
 * - delay: delay in milliseconds (e.g. 100, 200, 300 for staggered children)
 * - duration: duration in milliseconds (default 600)
 * - once: whether to animate only once (default true)
 * - threshold: intersection threshold 0 to 1 (default 0.15)
 *
 * Respects user's prefers-reduced-motion accessibility preference.
 */
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
  once = true,
  threshold = 0.05,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, show immediately without animating
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentEl);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px 80px 0px", // triggers smoothly just before element enters viewport
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  // Initial transform state before becoming visible
  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";

    switch (direction) {
      case "up":
        return "translate3d(0, 35px, 0)";
      case "down":
        return "translate3d(0, -35px, 0)";
      case "left":
        return "translate3d(40px, 0, 0)";
      case "right":
        return "translate3d(-40px, 0, 0)";
      case "scale":
        return "scale(0.92)";
      case "fade":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`will-change-transform ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // smooth spring ease-out
      }}
    >
      {children}
    </div>
  );
}
