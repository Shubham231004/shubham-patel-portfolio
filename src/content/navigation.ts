export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
  download?: string;
};

export const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  {
    label: "Résumé",
    href: "/resume/Shubham-Patel-Resume.pdf",
    download: "Shubham-Patel-Resume.pdf",
  },
  { label: "Contact", href: "/#contact" },
];

export const navigationCta = {
  label: "Say hello",
  href: "mailto:sspatel231004@gmail.com",
} as const;
