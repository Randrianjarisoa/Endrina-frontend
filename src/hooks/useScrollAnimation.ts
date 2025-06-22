import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function useScrollAnimation(animationFn: () => void) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.config({ limitCallbacks: true });
      ScrollTrigger.normalizeScroll(true);
      animationFn();

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope }
  );

  return scope;
}
