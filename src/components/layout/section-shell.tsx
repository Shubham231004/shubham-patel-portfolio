import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/section-label";

type SectionShellProps = {
  id: string;
  label: string;
  title: string;
  tone?: "ivory" | "charcoal";
  children?: ReactNode;
};

export function SectionShell({
  id,
  label,
  title,
  tone = "ivory",
  children,
}: SectionShellProps) {
  const isDark = tone === "charcoal";

  return (
    <section
      className={`section-shell section-shell--${tone}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="site-container site-grid section-shell__grid">
        <SectionLabel tone={isDark ? "dark" : "light"}>{label}</SectionLabel>
        <div className="section-shell__content">
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="section-shell__placeholder" aria-hidden="true">
            <span />
            <span />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
