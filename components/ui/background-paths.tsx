"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // Paths travel from bottom-left to top-right across the 696×316 viewBox
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M${820 + i * 4 * position} ${420 + i * 4}C${400 - i * 2 * position} ${310 - i * 5} ${-50 - i * 2 * position} ${60 - i * 5} ${-300 - i * 4 * position} ${-180 - i * 4}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#0f172a"
                        strokeWidth={path.width}
                        strokeOpacity={0.06 + path.id * 0.012}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + (path.id * 7919) % 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}
