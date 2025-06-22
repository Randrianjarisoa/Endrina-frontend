// src/providers/AnimationProvider.tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimationProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Ajoute la classe 'ready' après l'hydratation
    document.body.classList.add("ready");

    // Nettoyage
    return () => {
      document.body.classList.remove("ready");
    };
  }, []);

  useGSAP(() => {
    gsap.defaults({ ease: "power3.out" });
    ScrollTrigger.defaults({
      markers: process.env.NODE_ENV === "development",
    });
  });

  return <>{children}</>;
}
