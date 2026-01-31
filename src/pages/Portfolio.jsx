import { useContext, useMemo, useState } from "react";
import PageTransition from "../components/PageTransition";
import { LangContext } from "../i18n/LangContext";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const FILTERS = ["all", "mobile", "web", "uiux"];

export default function Portfolio() {
  const { t, lang, isAr } = useContext(LangContext);
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  const labels = useMemo(() => {
    if (!t?.portfolio?.filters) {
      // fallback if you didn’t add strings yet
      return {
        all: isAr ? "الكل" : "All",
        mobile: isAr ? "موبايل" : "Mobile",
        web: isAr ? "ويب" : "Web",
        uiux: isAr ? "UI/UX" : "UI/UX",
      };
    }
    return t.portfolio.filters;
  }, [t, isAr]);

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl py-14 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
              {t.portfolio.pill}
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              {t.portfolio.title}
            </h1>

            <p className="mt-3 text-sm text-white/70 sm:text-base max-w-2xl leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>

          <a
            href="/contact"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 w-fit"
          >
            {t.portfolio.hireBtn}
          </a>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((key) => {
            const active = filter === key;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={[
                  "rounded-2xl px-4 py-2 text-sm font-semibold border transition",
                  active
                    ? "bg-white text-black border-white/40"
                    : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10",
                ].join(" ")}
              >
                {labels[key]}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} t={t} lang={lang} />
          ))}
        </div>

        <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-semibold">{t.portfolio.ctaTitle}</div>
              <p className="mt-1 text-sm text-white/70">{t.portfolio.ctaSub}</p>
            </div>
            <a
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 w-fit"
            >
              {t.portfolio.ctaBtn}
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
