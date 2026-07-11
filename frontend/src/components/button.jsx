
export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const isPrimary = variant === 'primary';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        font-semibold rounded-full cursor-pointer select-none transition-all duration-300 ease-out outline-none hover:-translate-y-0.5 active:translate-y-0
        ${isPrimary
          ? 'px-9 py-4 text-base bg-deep-charcoal text-white shadow-[0_4px_15px_rgba(44,42,41,0.2)] hover:shadow-[0_8px_25px_rgba(44,42,41,0.35)]'
          : 'px-5.5 py-2.5 text-sm border-1.5 border-earth-taupe text-deep-charcoal hover:bg-champagne/25'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
