"use client";

import React, { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";
import type { ActiveSectionContextType } from "@/lib/types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<SectionName>("Home");
  const [timeofLastClick, setTimeofLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{ active, setActive, timeofLastClick, setTimeofLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContext"
    );
  }
  return context;
}
