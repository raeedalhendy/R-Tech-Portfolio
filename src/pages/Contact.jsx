import { useContext, useMemo, useState } from "react";
import PageTransition from "../components/PageTransition";
import { LangContext } from "../i18n/LangContext";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ✅ ضع قيم EmailJS هنا (من لوحة EmailJS)
const EMAILJS_SERVICE_ID = "service_n29ob9i";
const EMAILJS_TEMPLATE_ID = "template_junrkl9";
const EMAILJS_PUBLIC_KEY = "HSEYAhoCLt0HNfeyJ";

export default function Contact() {
  const { t, lang } = useContext(LangContext);

  const CONTACT = useMemo(
    () => ({
      email: "raeed.alhendy4@gmail.com",
      github: "https://github.com/raeedalhendy",
      // ⚠️ wa.me لازم بدون +
      whatsapp: "https://wa.me/963988141718",
    }),
    []
  );

  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [msg, setMsg] = useState("");
  const [senderEmail, setSenderEmail] = useState(""); // اختياري للرد عليه
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // ✅ البيانات التي ستصل لقالب EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name || "Unknown",
          reply_to: senderEmail || "no-reply",
          budget: budget || "-",
          project: project || "-",
          message: msg || "-",
          to_email: CONTACT.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setName("");
      setProject("");
      setBudget("");
      setMsg("");
      setSenderEmail("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl py-14 sm:py-20">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {t.contact.pill}
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <a
            href="/portfolio"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 w-fit"
          >
            {t.common.viewWork}
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Left cards */}
          <div className="space-y-4">
            <ContactCard
              icon={<FaEnvelope />}
              title={t.contact.cards.email.title}
              subtitle={CONTACT.email}
              openLabel={t.contact.open}
              href={`mailto:${CONTACT.email}`}
            />

            <ContactCard
              icon={<FaGithub />}
              title={t.contact.cards.github.title}
              subtitle={t.contact.cards.github.subtitle}
              openLabel={t.contact.open}
              href={CONTACT.github}
            />

            <ContactCard
              icon={<FaWhatsapp />}
              title={t.contact.cards.whatsapp.title}
              subtitle={t.contact.cards.whatsapp.subtitle}
              openLabel={t.contact.open}
              href={CONTACT.whatsapp}
            />

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">
                {t.contact.availabilityTitle}
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {t.contact.availabilityText}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {t.contact.availabilityHint}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="pointer-events-none absolute -inset-16 opacity-40 blur-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

              <div className="relative z-10">
                <div className="text-lg font-semibold">{t.contact.formTitle}</div>
                <p className="mt-2 text-sm text-white/70">{t.contact.formSub}</p>

                <form onSubmit={sendMessage} className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={t.contact.fields.name}
                      value={name}
                      onChange={setName}
                      placeholder={t.contact.fields.namePh}
                      required
                    />

                    {/* ايميل الشخص للرد عليه */}
                    <Field
                      label={lang === "ar" ? "إيميلك (للرد عليك)" : "Your Email (for reply)"}
                      value={senderEmail}
                      onChange={setSenderEmail}
                      placeholder={lang === "ar" ? "example@gmail.com" : "example@gmail.com"}
                      type="email"
                    />

                    <Field
                      label={t.contact.fields.budget}
                      value={budget}
                      onChange={setBudget}
                      placeholder={t.contact.fields.budgetPh}
                    />

                    <div className="sm:col-span-2">
                      <Field
                        label={t.contact.fields.project}
                        value={project}
                        onChange={setProject}
                        placeholder={t.contact.fields.projectPh}
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-white/80">
                        {t.contact.fields.message}
                      </label>
                      <textarea
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder={t.contact.fields.msgPh}
                        required
                        className="mt-2 h-36 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60"
                    >
                      {loading
                        ? lang === "ar"
                          ? "جاري الإرسال..."
                          : "Sending..."
                        : t.contact.sendEmail}
                    </button>

                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
                    >
                      {lang === "ar" ? "راسلني واتساب" : "WhatsApp me"}
                    </a>
                  </div>

                  {status === "success" && (
                    <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
                      {lang === "ar"
                        ? "تم إرسال الرسالة بنجاح ✅ رح وصلك الرد بأقرب وقت."
                        : "Message sent successfully ✅ I’ll get back to you soon."}
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">
                      {lang === "ar"
                        ? "صار خطأ بالإرسال. تأكد من إعدادات EmailJS وجرب مرة تانية."
                        : "Something went wrong. Please check EmailJS settings and try again."}
                    </div>
                  )}
                </form>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function ContactCard({ icon, title, subtitle, href, openLabel }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group block rounded-[28px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30 text-white/90">
          <span className="text-lg">{icon}</span>
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-1 text-xs text-white/60">{subtitle}</div>
        </div>
      </div>

      <div className="mt-4 text-xs text-white/60">
        <span className="inline-flex items-center gap-2">
          {openLabel}
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-white/70 group-hover:text-white transition">→</span>
        </span>
      </div>
    </a>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/80">
        {label} {required ? <span className="text-white/40">*</span> : null}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
      />
    </div>
  );
}
