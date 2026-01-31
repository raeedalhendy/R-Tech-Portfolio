import { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { LangContext } from "../i18n/LangContext";
import { projects } from "../data/projects";

function Img({ src, alt }) {
  const onError = (e) => {
    e.currentTarget.style.display = "none";
    const fallback = e.currentTarget.nextSibling;
    if (fallback) fallback.style.display = "block";
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <img
        src={src}
        alt={alt}
        onError={onError}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        style={{ display: "none" }}
        className="h-56 w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%),linear-gradient(135deg,rgba(99,102,241,0.25),rgba(236,72,153,0.18),rgba(34,211,238,0.18))]"
      />
    </div>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, lang, isAr } = useContext(LangContext);

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  const title = project?.title?.[lang] || project?.title?.en || project?.title;
  const desc = project?.desc?.[lang] || project?.desc?.en || project?.desc;
  const tag = project?.tag?.[lang] || project?.tag?.en || "";

  const isMobile = project?.type === "mobile";
  const shots = Array.isArray(project?.screenshots) ? project.screenshots : [];

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl py-14 sm:py-20">
        {/* Not found */}
        {!project && (
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-2xl font-semibold">
              {isAr ? "المشروع غير موجود" : "Project not found"}
            </div>
            <p className="mt-2 text-white/70">
              {isAr ? "تأكد من الرابط أو ارجع للصفحة السابقة." : "Check the URL or go back."}
            </p>
            <Link
              to="/portfolio"
              className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              {isAr ? "رجوع للأعمال" : "Back to Portfolio"}
            </Link>
          </div>
        )}

        {/* Found */}
        {project && (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {tag || (isAr ? "تفاصيل المشروع" : "Project Details")}
                </div>

                <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                  {title}
                </h1>

                {!!desc && (
                  <p className="mt-4 max-w-3xl text-sm text-white/70 sm:text-base leading-relaxed">
                    {desc}
                  </p>
                )}

                {Array.isArray(project.stack) && project.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className="shrink-0 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {isAr ? "رجوع" : "Back"}
              </Link>
            </div>

            {/* Only mobile shows screenshots */}
            {!isMobile && (
              <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-semibold">
                  {isAr ? "هذا المشروع ليس موبايل" : "This is not a mobile project"}
                </div>
                <p className="mt-2 text-sm text-white/70">
                  {isAr
                    ? "حسب إعداداتك، تفاصيل الصور موجودة فقط لمشاريع الموبايل."
                    : "Per your setup, screenshots are available only for mobile projects."}
                </p>
              </div>
            )}

            {isMobile && (
              <div className="mt-10">
                <div className="text-xl font-semibold">
                  {isAr ? "Screenshots" : "Screenshots"}
                </div>

                {shots.length === 0 ? (
                  <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                    {isAr
                      ? "ما في صور مضافة لهالمشروع حالياً. ضيف مسارات الصور داخل screenshots."
                      : "No screenshots added yet. Add image paths in the screenshots array."}
                  </div>
                ) : (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {shots.map((src, idx) => (
                      <Img key={`${src}-${idx}`} src={src} alt={`${title} screenshot ${idx + 1}`} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </PageTransition>
  );
}
