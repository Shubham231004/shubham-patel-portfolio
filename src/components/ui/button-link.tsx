import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  showArrow?: boolean;
} & Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "download" | "target" | "rel"
>;

export function ButtonLink({
  children,
  href,
  variant = "primary",
  showArrow = false,
  ...anchorProps
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <span aria-hidden="true">↗</span> : null}
    </>
  );
  const className = `button-link button-link--${variant}`;

  if (href.startsWith("#") || href.startsWith("/#")) {
    return (
      <a className={className} href={href} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={href} {...anchorProps}>
      {content}
    </Link>
  );
}
