"use client";

import { createContext, useContext, useState, useEffect } from "react";

type SplashContextType = {
  showSplash: boolean;
};

const SplashContext = createContext<SplashContextType>({ showSplash: true });

export const useSplash = () => useContext(SplashContext);

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 3 seconds baad splash hide ho jayega
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider value={{ showSplash }}>
      {children}
    </SplashContext.Provider>
  );
}