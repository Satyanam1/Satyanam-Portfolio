
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PARTICLE_COUNT = 10;

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const effectsRef = useRef(null);

    useGSAP(() => {
        const cursor = cursorRef.current;

        if (!cursor || !window.matchMedia("(pointer: fine)").matches) {
            return;
        }

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
        });

        const moveX = gsap.quickTo(cursor, "x", {
            duration: 0.5,
            ease: "power3.out",
        });

        const moveY = gsap.quickTo(cursor, "y", {
            duration: 0.5,
            ease: "power3.out",
        });

        const moveCursor = (event) => {
            moveX(event.clientX);
            moveY(event.clientY);
        };

        window.addEventListener("mousemove", moveCursor, {
            passive: true,
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    });

    useGSAP(() => {
        const container = effectsRef.current;
        if (!container) return;

        const colors = ["#84CC16", "#A3E635", "#0F5132", "#D9F99D"];

        const handleInteraction = (event) => {
            // Ignore secondary mouse buttons.
            if (event.type === "click" && event.button !== 0) return;

            // Avoid creating bursts when interacting with text selection.
            if (window.getSelection()?.toString()) return;

            const x = event.clientX;
            const y = event.clientY;

            const burst = document.createElement("div");

            Object.assign(burst.style, {
                position: "fixed",
                left: `${x}px`,
                top: `${y}px`,
                width: "1px",
                height: "1px",
                pointerEvents: "none",
                zIndex: "9998",
            });

            container.appendChild(burst);

            const timeline = gsap.timeline({
                onComplete: () => burst.remove(),
            });

            // Two expanding ripple rings.
            [0, 1].forEach((index) => {
                const ring = document.createElement("div");

                Object.assign(ring.style, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "14px",
                    height: "14px",
                    border: `1.5px solid ${index === 0 ? "#84CC16" : "#0F5132"}`,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                });

                burst.appendChild(ring);

                timeline.fromTo(
                    ring,
                    {
                        scale: 0.3,
                        opacity: 0.9,
                    },
                    {
                        scale: index === 0 ? 4.5 : 7,
                        opacity: 0,
                        duration: 0.65,
                        ease: "power2.out",
                    },
                    index * 0.08
                );
            });

            // Tiny particles flying outward.
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const particle = document.createElement("div");
                const angle = (Math.PI * 2 * i) / PARTICLE_COUNT;
                const distance = gsap.utils.random(24, 58);
                const size = gsap.utils.random(3, 6);

                Object.assign(particle.style, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                    backgroundColor: colors[i % colors.length],
                    boxShadow: `0 0 8px ${colors[i % colors.length]}`,

                });

                burst.appendChild(particle);

                timeline.fromTo(
                    particle,
                    {
                        x: 0,
                        y: 0,
                        xPercent: -50,
                        yPercent: -50,
                        scale: 1,
                        opacity: 1,
                    },
                    {
                        x: Math.cos(angle) * distance,
                        y: Math.sin(angle) * distance,
                        scale: 0,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    0
                );
            }
        };

        document.addEventListener("click", handleInteraction);

        // Touch devices can produce a click after a tap, so one listener
        // is sufficient and avoids duplicate bursts.
        return () => {
            document.removeEventListener("click", handleInteraction);
        };
    });

    return (
        <>
            <div
                ref={cursorRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-white shadow-md"
                style={{
                    mixBlendMode: "difference",
                }}
            />

            <div
                ref={effectsRef}
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
            />
        </>
    );
};

export default CustomCursor;
