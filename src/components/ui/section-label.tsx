type SectionLabelProps = {
  children: string;
  motionItem?: "label";
  tone?: "light" | "dark";
};

export function SectionLabel({
  children,
  motionItem,
  tone = "light",
}: SectionLabelProps) {
  return (
    <p
      className={`section-label section-label--${tone}`}
      data-motion-item={motionItem}
    >
      {children}
    </p>
  );
}
