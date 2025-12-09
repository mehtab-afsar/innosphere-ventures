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

      // Color gradient - cyan to purple to rose
      const t = i / count;
      if (t < 0.33) {
        // Cyan
        colors[i * 3] = 0.4 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 1;
      } else if (t < 0.66) {
        // Purple
        colors[i * 3] = 0.6 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      } else {
        // Rose/Amber
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.4 + Math.random() * 0.2;
      }
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

  // Create material
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
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
      const expansion = 0.15 * pulsePhaseRef.current;

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
}

export function ParticleSphere({ className = "", pulseAngle = null }: ParticleSphereProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <Particles count={3500} radius={1.8} pulseAngle={pulseAngle} />
      </Canvas>
    </div>
  );
}
