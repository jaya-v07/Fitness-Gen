export default function FeatureCard({ title, description }) {
  return (
    <article className="group h-full rounded-2xl border border-soft-rose/40 bg-white p-7 shadow-[0_4px_20px_rgba(44,42,41,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(173,156,142,0.2)]">
      <h3 className="mb-3 text-lg font-semibold text-deep-charcoal">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-earth-taupe">
        {description}
      </p>
    </article>
  );
}
