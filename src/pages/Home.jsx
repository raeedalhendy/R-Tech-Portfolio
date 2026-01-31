import { useContext } from "react";
import PageTransition from "../components/PageTransition";
import { LangContext } from "../i18n/LangContext";

export default function Home() {
  const { t } = useContext(LangContext);

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {t.home.pill}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.home.title1} <span className="text-white/60">{t.home.title2}</span>
            </h1>

            <p className="mt-5 text-base text-white/70 sm:text-lg">{t.home.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/portfolio"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                {t.home.cta1}
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {t.home.cta2}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 text-xs">
              {t.home.chips.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white/80">{t.home.profileTitle}</div>

              <div className="mt-4 flex items-center gap-4">
                <div>
                  <div className="text-lg font-semibold">{t.home.profileName}</div>
                  <div className="text-sm text-white/60">{t.home.profileRole}</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/70">{t.home.profileBio}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {t.home.quick.map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-medium"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
