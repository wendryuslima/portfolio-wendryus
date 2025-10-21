"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: React.ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      disable: false,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
