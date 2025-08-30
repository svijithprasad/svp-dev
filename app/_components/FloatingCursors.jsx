"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { MousePointer2 } from "lucide-react";

export default function FloatingCursors({
    size = 40,
    color = "#A374FF",
    top = "50%",
    left = "50%",
    tooltipText = "Tooltip",
    movementRange = 20, // how far it can drift
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring for organic movement
    const springX = useSpring(x, { stiffness: 50, damping: 20 });
    const springY = useSpring(y, { stiffness: 50, damping: 20 });

    useEffect(() => {
        let animationFrame;

        const randomMovement = () => {
            // pick a tiny random offset within movement range
            const offsetX = Math.random() * movementRange - movementRange / 2;
            const offsetY = Math.random() * movementRange - movementRange / 2;

            x.set(offsetX);
            y.set(offsetY);

            // schedule next movement
            animationFrame = setTimeout(randomMovement, 500 + Math.random() * 500); // random interval between moves
        };

        randomMovement();

        return () => clearTimeout(animationFrame);
    }, [x, y, movementRange]);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: top,
                left: left,
                width: size,
                height: size,
                pointerEvents: "none",
                zIndex: 9999,
                x: springX,
                y: springY,
            }}
        >
            {/* Mouse Icon */}
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: color,
                }}
            >
                <MousePointer2 size={size} strokeWidth={1} color="white" fill={color} />
            </motion.div>

            {/* Tooltip */}
            <motion.div
                style={{
                    position: "absolute",
                    top: 50,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: color,
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                }}
                animate={{
                    y: [-2, 2, -2],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            >
                {tooltipText}
            </motion.div>
        </motion.div>
    );
}
