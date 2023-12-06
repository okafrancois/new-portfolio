import { RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseAnimationOptions {
  ref: RefObject<HTMLElement | null>;
  duration: number;
  delay?: number;
  triggerScroll?: boolean;
  ease?: string;
  animationType?: "fadeIn" | "fadeInUp" | "fadeInDown";
}

export const useFadeInAnimation = ({
  ref,
  duration,
  delay = 0,
  triggerScroll = false,
  ease = "power1.inOut",
  animationType = "fadeIn",
}: UseAnimationOptions) => {
  useEffect(() => {
    const elem = ref.current;

    const tl = gsap.timeline({
      scrollTrigger: triggerScroll
        ? {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart none none none",
          }
        : undefined,
    });

    // Determine the initial 'y' position based on animation type
    let startY;
    switch (animationType) {
      case "fadeInUp":
        startY = 100;
        break;
      case "fadeInDown":
        startY = -100;
        break;
      default:
        startY = 0;
    }

    tl.fromTo(
      elem,
      { opacity: 0, y: startY },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: ease,
      },
    );
  }, [ref, duration, delay, triggerScroll, ease, animationType]);
};