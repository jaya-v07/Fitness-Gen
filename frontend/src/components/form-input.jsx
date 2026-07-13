export default function FormInput({ label, type = "text", children, ...props }) {
  const baseClasses =
    "w-full rounded-xl border border-soft-rose/50 bg-input px-4 py-3 text-deep-charcoal outline-none transition-all duration-200 placeholder:text-earth-taupe/70 focus:border-earth-taupe focus:ring-2 focus:ring-champagne";

  return (
    <div>
      {label && <label className="mb-1 block text-sm font-medium text-deep-charcoal">{label}</label>}
      
      {type === "select" ? (
        <select className={baseClasses} {...props}>
          {children}
        </select>
      ) : (
        <input type={type} className={baseClasses} {...props} />
      )}
    </div>
  );
}
