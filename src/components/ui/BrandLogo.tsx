import clsx from "clsx";

interface BrandLogoProps {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "default",
  size = "md",
  showTagline = true,
  className,
}: BrandLogoProps) {
  const sizes = {
    sm: { icon: 36, title: "text-lg", tag: "text-[0.55rem]" },
    md: { icon: 44, title: "text-xl sm:text-2xl", tag: "text-[0.6rem] sm:text-xs" },
    lg: { icon: 56, title: "text-2xl sm:text-3xl", tag: "text-xs sm:text-sm" },
  };

  const colors = {
    default: {
      title: "text-surface-900",
      tag: "text-brand-600",
      line: "bg-brand-600",
    },
    light: {
      title: "text-white",
      tag: "text-brand-300",
      line: "bg-brand-400",
    },
    dark: {
      title: "text-white",
      tag: "text-brand-400",
      line: "bg-brand-500",
    },
  };

  const s = sizes[size];
  const c = colors[variant];

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        className="shrink-0 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="logoRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8eef4" />
            <stop offset="50%" stopColor="#b8c5d4" />
            <stop offset="100%" stopColor="#8899aa" />
          </linearGradient>
          <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#33a3ff" />
            <stop offset="100%" stopColor="#007fff" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#logoRing)"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="32" cy="32" r="24" fill="#007fff" opacity="0.12" filter="url(#logoGlow)" />
        <path
          d="M42 18C42 18 38 14 30 14C22 14 18 18 18 22C18 26 21 28 28 29L34 30C40 31 44 33 44 38C44 44 38 48 30 48C22 48 17 44 16 40"
          stroke="#d4dce6"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M42 34C42 34 38 38 30 38C24 38 20 36 20 32"
          stroke="url(#logoBlue)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M18 46C18 46 22 50 30 50C38 50 44 46 46 40"
          stroke="url(#logoBlue)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display font-bold uppercase tracking-[0.12em]",
            s.title,
            c.title
          )}
        >
          Sublime
        </span>
        {showTagline && (
          <div className="mt-1 flex items-center gap-2">
            <span className={clsx("h-px w-3", c.line)} />
            <span
              className={clsx(
                "font-display font-semibold uppercase tracking-[0.28em]",
                s.tag,
                c.tag
              )}
            >
              Sports Apparel
            </span>
            <span className={clsx("h-px w-3", c.line)} />
          </div>
        )}
      </div>
    </div>
  );
}
