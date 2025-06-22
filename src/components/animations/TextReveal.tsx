"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function TextReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = new SplitText(containerRef.current, {
        type: "chars,words",
        wordsClass: "word",
        charsClass: "char",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 80,
        rotationX: 180,
        duration: 0.8,
        stagger: 0.02,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="text-4xl font-bold">
      {text}
    </div>
  );
}
