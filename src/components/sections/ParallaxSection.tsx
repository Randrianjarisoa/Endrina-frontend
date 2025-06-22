"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        yPercent: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="h-[150vh] relative overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover"
      />
      <h1 className="relative z-10 text-white">Endrina</h1>
    </section>
  );
}
