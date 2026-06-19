import clsx from "clsx";

type BgVariant = "white" | "light" | "brand" | "dark" | "mesh";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bg?: BgVariant;
}

const bgStyles: Record<BgVariant, string> = {
  white: "bg-white",
  light: "bg-gradient-to-b from-brand-50/80 to-white",
  brand: "bg-gradient-to-br from-brand-600/5 via-brand-50 to-white",
  dark: "bg-surface-900 text-white",
  mesh: "section-mesh",
};

export default function SectionWrapper({
  id,
  children,
  className,
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden py-24 lg:py-32",
        bgStyles[bg],
        className
      )}
    >
      {bg === "mesh" && (
        <>
          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
