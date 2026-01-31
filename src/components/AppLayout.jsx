import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Navbar";
import BackgroundFX from "./BackgroundFX";

export default function AppLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07070b] text-white overflow-x-hidden">
      <BackgroundFX />
      <Navbar />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
