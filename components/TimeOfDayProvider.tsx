"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type TimeOfDay = "dawn" | "day" | "dusk" | "night";

interface TimeOfDayContextType {
  timeOfDay: TimeOfDay;
  setTimeOfDay: (time: TimeOfDay) => void;
}

const TimeOfDayContext = createContext<TimeOfDayContextType>({
  timeOfDay: "night",
  setTimeOfDay: () => {},
});

export function TimeOfDayProvider({ children }: { children: React.ReactNode }) {
  const [timeOfDay, setTimeOfDayState] = useState<TimeOfDay>("night");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTime = localStorage.getItem("timeOfDay") as TimeOfDay;
    if (savedTime && ["dawn", "day", "dusk", "night"].includes(savedTime)) {
      setTimeOfDayState(savedTime);
    }
  }, []);

  const setTimeOfDay = (time: TimeOfDay) => {
    setTimeOfDayState(time);
    localStorage.setItem("timeOfDay", time);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <TimeOfDayContext.Provider value={{ timeOfDay, setTimeOfDay }}>
      {children}
    </TimeOfDayContext.Provider>
  );
}

export function useTimeOfDay() {
  return useContext(TimeOfDayContext);
}
