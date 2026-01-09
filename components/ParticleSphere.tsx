"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
  radius?: number;
  pulseAngle?: number | null; // Angle in radians for directional pulse
}

function Particles({ count = 5000, radius = 2, pulseAngle = null }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const prevPulseAngleRef = useRef<number | null>(null);
  const pulsePhaseRef = useRef(0); // 0 = idle, progresses to 1 = fully expanded

  // Generate particles on sphere surface
  const { positions, colors, originalPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution for even spacing
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Sophisticated vertical gradient layering - Y-axis based
      // Normalize Y position to 0-1 range
      const normalizedY = (y / radius + 1) / 2; // Map from [-radius, radius] to [0, 1]

      // Premium darker color gradient: Deep teal → Muted coral → Subdued cyan → Warm gold
      let r, g, b;

      if (normalizedY < 0.25) {
        // Bottom layer: Very deep ocean teal (#0d3d4f) to darker teal (#1a5f6f)
        const t = normalizedY / 0.25;
        r = 0.051 + t * (0.102 - 0.051);  // 13 → 26
        g = 0.239 + t * (0.373 - 0.239);  // 61 → 95
        b = 0.310 + t * (0.435 - 0.310);  // 79 → 111
      } else if (normalizedY < 0.5) {
        // Mid-lower: Darker teal (#1a5f6f) to muted coral (#cc5647)
        const t = (normalizedY - 0.25) / 0.25;
        r = 0.102 + t * (0.800 - 0.102);  // 26 → 204
        g = 0.373 + t * (0.337 - 0.373);  // 95 → 86
        b = 0.435 + t * (0.278 - 0.435);  // 111 → 71
      } else if (normalizedY < 0.75) {
        // Mid-upper: Muted coral (#cc5647) to subdued cyan (#5fccb3)
        const t = (normalizedY - 0.5) / 0.25;
        r = 0.800 + t * (0.373 - 0.800);  // 204 → 95
        g = 0.337 + t * (0.800 - 0.337);  // 86 → 204
        b = 0.278 + t * (0.702 - 0.278);  // 71 → 179
      } else {
        // Top layer: Subdued cyan (#5fccb3) to warm gold (#ccaa00)
        const t = (normalizedY - 0.75) / 0.25;
        r = 0.373 + t * (0.800 - 0.373);  // 95 → 204
        g = 0.800 + t * (0.667 - 0.800);  // 204 → 170
        b = 0.702 + t * (0.0 - 0.702);    // 179 → 0
      }

      // Add subtle variation for depth (±3%)
      const variation = (Math.random() - 0.5) * 0.06;
      colors[i * 3] = Math.max(0, Math.min(1, r + variation));
      colors[i * 3 + 1] = Math.max(0, Math.min(1, g + variation));
      colors[i * 3 + 2] = Math.max(0, Math.min(1, b + variation));
    }

    return {
      positions,
      colors,
      originalPositions: new Float32Array(positions),
    };
  }, [count, radius]);

  // Create geometry
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  // Create material with premium aesthetics
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending, // Additive blending for glow effect
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;

    // Detect new hover (pulseAngle changed from null or to different angle)
    const isNewHover = pulseAngle !== null && prevPulseAngleRef.current !== pulseAngle;
    if (isNewHover) {
      pulsePhaseRef.current = 0; // Reset phase for new beat
    }
    prevPulseAngleRef.current = pulseAngle;

    // Animate pulse phase: expand to 1 and hold when hovered, return to 0 when not
    const targetPhase = pulseAngle !== null ? 1 : 0;
    const phaseSpeed = pulseAngle !== null ? 0.08 : 0.05; // Faster expansion, slower return
    pulsePhaseRef.current += (targetPhase - pulsePhaseRef.current) * phaseSpeed;

    // Rotate the sphere slowly
    pointsRef.current.rotation.y = time * 0.08;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.15;

    // Animate particles with organic movement
    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      // Normalize and apply displacement
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / len;
      const ny = oy / len;
      const nz = oz / len;

      // Base noise-like displacement
      const noise = Math.sin(time * 0.5 + i * 0.01) * 0.04;
      const basePulse = Math.sin(time * 1.5 + i * 0.02) * 0.02;

      // Uniform sphere expansion - entire sphere expands when hovered
      const expansion = 0.08 * pulsePhaseRef.current;

      const factor = 1 + noise + basePulse + expansion;

      array[i3] = nx * len * factor;
      array[i3 + 1] = ny * len * factor;
      array[i3 + 2] = nz * len * factor;
    }

    positionAttribute.needsUpdate = true;

    // Animate light
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 0.4) * 4;
      lightRef.current.position.z = Math.cos(time * 0.4) * 4;
    }
  });

  return (
    <group>
      <pointLight ref={lightRef} intensity={1.5} distance={12} color="#ffffff" />
      <points ref={pointsRef} geometry={geometry} material={material} />
    </group>
  );
}

interface ParticleSphereProps {
  className?: string;
  pulseAngle?: number | null;
  scale?: number;
}

export function ParticleSphere({ className = "", pulseAngle = null, scale = 1.0 }: ParticleSphereProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <Particles count={6000} radius={1.76} pulseAngle={pulseAngle} />
      </Canvas>
    </div>
  );
}
