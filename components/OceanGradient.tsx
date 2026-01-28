"use client";

import { ReactNode } from "react";

type GradientVariant =
  | 'landing'
  | 'portfolio'
  | 'philosophy'
  | 'technical'
  | 'culture'
  | 'application'
  | 'legal';

interface OceanGradientProps {
  variant: GradientVariant;
  children: ReactNode;
}

const gradientConfigs: Record<GradientVariant, string> = {
  landing: `linear-gradient(
    to bottom,
    #7dd3c0 0%,
    #6bc9b8 10%,
    #58bfb0 20%,
    #46b5a8 30%,
    #3aa9a0 40%,
    #2e9898 50%,
    #248790 60%,
    #1b7688 70%,
    #14627d 80%,
    #0f4e6e 90%,
    #0a3a5f 100%
  )`,

  portfolio: `linear-gradient(
    to bottom,
    #fef5f0 0%,
    #f9e7dc 10%,
    #f0d8c8 20%,
    #a8bdc8 30%,
    #7ca8b8 40%,
    #5a92a8 50%,
    #3d7591 60%,
    #26566f 70%,
    #143a4d 85%,
    #0a1f2e 100%
  )`,

  philosophy: `linear-gradient(
    to bottom,
    #f0f4f7 0%,
    #e2ecf1 10%,
    #c8dce8 20%,
    #7fb3cc 30%,
    #5a9bb8 40%,
    #3d82a3 50%,
    #266b8a 60%,
    #145470 70%,
    #0c3d56 85%,
    #061f2d 100%
  )`,

  technical: `linear-gradient(
    to bottom,
    #f5f9fa 0%,
    #ebf4f7 10%,
    #d6e9f0 20%,
    #92cbe0 30%,
    #6ab8d3 40%,
    #4aa0c0 50%,
    #2e89ab 60%,
    #1d6b8a 70%,
    #104d68 85%,
    #083546 100%
  )`,

  culture: `linear-gradient(
    to bottom,
    #fdf6f0 0%,
    #f8ede3 10%,
    #f0e1d2 20%,
    #c5c8ca 30%,
    #a4b8c2 40%,
    #819fb0 50%,
    #5d849c 60%,
    #3e6a85 70%,
    #244f6b 85%,
    #133750 100%
  )`,

  application: `linear-gradient(
    to bottom,
    #f8f8f3 0%,
    #f1f2ea 10%,
    #e4e9e2 20%,
    #b4cdc7 30%,
    #93b9b8 40%,
    #6fa3a8 50%,
    #4d8b95 60%,
    #2f7280 70%,
    #1a5768 85%,
    #0d3d50 100%
  )`,

  legal: `linear-gradient(
    to bottom,
    #f9fafb 0%,
    #f3f5f7 15%,
    #e8ecf0 30%,
    #d8e0e8 45%,
    #c2cfd9 60%,
    #a8b9c7 75%,
    #8ba3b5 90%,
    #6e8da3 100%
  )`,
};

export function OceanGradient({ variant, children }: OceanGradientProps) {
  const gradient = gradientConfigs[variant];

  return (
    <div className="min-h-screen relative">
      {/* Absolute Background Gradient Layer - scrolls with content */}
      <div
        className="absolute top-0 left-0 w-full min-h-full z-0"
        style={{
          background: gradient,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
