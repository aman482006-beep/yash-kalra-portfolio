import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export default function GlowingEffect({
    children,
    className,
    glow = true,
    spread = 40,
    proximity = 64,
    inactiveZone = 0,
    borderWidth = 1,
    disabled = false,
}) {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current || disabled) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });

        // Calculate distance from borders
        const center = { x: rect.width / 2, y: rect.height / 2 };
        const distanceFromCenter = Math.sqrt(
            Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2)
        );

        if (inactiveZone > 0 && distanceFromCenter < inactiveZone) {
            setOpacity(0);
            return;
        }

        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative w-full h-full overflow-hidden rounded-[inherit]",
                className
            )}
        >
            <div
                className={cn(
                    "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
                    glow && "opacity-100"
                )}
                style={{
                    opacity: disabled ? 0 : opacity,
                    background: `radial-gradient(${spread}px circle at ${position.x}px ${position.y}px, var(--color-glow, rgba(255,255,255,0.15)), transparent 100%)`,
                }}
            />

            {/* Border Glow */}
            <div
                className={cn(
                    "absolute inset-0 rounded-[inherit]",
                    "pointer-events-none transition-opacity duration-300"
                )}
                style={{
                    opacity: disabled ? 0 : opacity,
                    background: `radial-gradient(${proximity}px circle at ${position.x}px ${position.y}px, var(--border-glow, rgba(255,255,255,0.5)), transparent 100%)`,
                    maskImage: `radial-gradient(${proximity}px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(${proximity}px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    padding: borderWidth,
                }}
            >
                <div className="h-full w-full bg-transparent rounded-[inherit]" />
            </div>

            <div className="relative h-full w-full rounded-[inherit] bg-background">
                {children}
            </div>
        </div>
    );
}
