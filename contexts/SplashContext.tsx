'use client';

import { createContext, useContext } from 'react';

interface SplashContextProps {
  splashDone: boolean;
}

export const SplashContext = createContext<SplashContextProps>({
  splashDone: false,
});

export const useSplash = () => useContext(SplashContext);
