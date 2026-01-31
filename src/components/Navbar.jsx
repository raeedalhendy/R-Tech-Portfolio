import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { LangContext } from "../i18n/LangContext";
import LanguageToggle from "./LanguageToggle";

const linkBase = "text-sm font-medium text-white/70 hover:text-white transition";
const linkActive = "text-white";

function useIsSmUp() {
  const [isSmUp, setIsSmUp] = useState(() =>
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const handler = (e) => setIsSmUp(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isSmUp;
}

export default function Navbar() {
  const { t, isAr } = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const isSmUp = useIsSmUp();
  const location = useLocation();

  /* -------------------------
     Close menu on route change
  ------------------------- */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* -------------------------
     Close when screen >= sm
  ------------------------- */
  useEffect(() => {
    if (isSmUp) setOpen(false);
  }, [isSmUp]);

  /* -------------------------
     LOCK SCROLL (important)
  ------------------------- */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  /* -------------------------
     ESC key closes menu
  ------------------------- */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = useMemo(
    () => [
      { to: "/", label: t.nav.home },
      { to: "/about", label: t.nav.about },
      { to: "/portfolio", label: t.nav.portfolio },
      { to: "/contact", label: t.nav.contact },
    ],
    [t]
  );

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / Title */}
        <div className="leading-tight">
          <div className="text-xs text-white/50">Freelance Dev</div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <LanguageToggle />

          {/* Hamburger */}
          <button
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`sm:hidden fixed inset-0 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          } bg-gradient-to-br from-indigo-900/80 via-black/80 to-fuchsia-900/80 backdrop-blur-md`}
        />

        {/* Drawer */}
        <aside
          dir={isAr ? "rtl" : "ltr"}
          className={`absolute top-0 h-full w-[100%] 
            transition-transform duration-300 ease-out
            ${isAr ? "right-0" : "left-0"}
            ${
              open
                ? "translate-x-0"
                : isAr
                ? "translate-x-full"
                : "-translate-x-full"
            }
            bg-gradient-to-br from-black via-neutral-900 to-zinc-900
            border border-white/10 backdrop-blur-xl shadow-2xl`}
        >
          <div className="p-5  bg-gradient-to-bl from-purple-950 via-black/80 to-purple-950 w-full ">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">
                {isAr ? "القائمة" : "Menu"}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition
                    ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/80 hover:bg-white/10"
                    }`
                  }
                >
                  <span>{l.label}</span>
                  <span className="text-white/40">{isAr ? "‹" : "›"}</span>
                </NavLink>
              ))}
            </div>

            
          </div>
        </aside>
      </div>
    </header>
  );
}
