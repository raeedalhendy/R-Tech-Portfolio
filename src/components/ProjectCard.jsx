import { Link } from "react-router-dom";

function ProjectImage({ src, alt }) {
  const onError = (e) => {
    e.currentTarget.style.display = "none";
    const fallback = e.currentTarget.nextSibling;
    if (fallback) fallback.style.display = "block";
  };

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10">
      <img
        src={src}
        alt={alt}
        onError={onError}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        style={{ display: "none" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%),linear-gradient(135deg,rgba(99,102,241,0.25),rgba(236,72,153,0.18),rgba(34,211,238,0.18))]"
      />
    </div>
  );
}

export default function ProjectCard({ p, t, lang }) {
  const title = p.title?.[lang] || p.title?.en || p.title;
  const desc = p.desc?.[lang] || p.desc?.en || p.desc;
  const tag = p.tag?.[lang] || p.tag?.en || "";

  const liveOk = p.liveUrl && p.liveUrl !== "#";
  const behanceOk = p.behanceUrl && p.behanceUrl !== "#";

  const isMobile = p.type === "mobile";

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          {!!tag && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
              {tag}
            </div>
          )}
        </div>

        <div className="mt-4">
          <ProjectImage src={p.image} alt={title} />
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
        {!!desc && (
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            {desc}
          </p>
        )}

        {Array.isArray(p.stack) && p.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {/* VIEW / DETAILS */}
          {isMobile ? (
            <Link
              to={`/projects/${p.id}`}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              {t.portfolio.live}
            </Link>
          ) : (
            liveOk && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                {t.portfolio.live}
              </a>
            )
          )}

          {/* BEHANCE */}
          {behanceOk && (
            <a
              href={p.behanceUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              {t.portfolio.behance}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
