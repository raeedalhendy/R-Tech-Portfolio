import { useContext } from "react";
import PageTransition from "../components/PageTransition";
import { LangContext } from "../i18n/LangContext";

export default function About() {
  const { t } = useContext(LangContext);

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {t.about.pill}
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              {t.about.title1} <span className="text-white/60">{t.about.title2}</span>
            </h1>

            <p className="mt-5 text-base text-white/70 sm:text-lg leading-relaxed">
              {t.about.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/portfolio"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                {t.about.cta1}
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {t.about.cta2}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.about.highlights.map((h) => (
                <div
                  key={h.k}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold">{h.k}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{h.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-white/5 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-white/60">{t.about.profile.label}</div>
                  <div className="mt-1 text-xl font-semibold">{t.about.profile.name}</div>
                  <div className="mt-1 text-sm text-white/60">{t.about.profile.role}</div>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {t.about.skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-sm font-semibold">{group.title}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">{t.about.howTitle}</div>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {t.about.how.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
