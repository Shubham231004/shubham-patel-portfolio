import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Page not found | Shubham Patel",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="not-found" id="top">
        <div className="site-container not-found__inner">
          <p>404 / PAGE NOT FOUND</p>
          <h1>This page took a wrong turn.</h1>
          <p>The work is still where it should be.</p>
          <div className="not-found__actions">
            <ButtonLink href="/" showArrow>
              Back home
            </ButtonLink>
            <ButtonLink href="/#work" showArrow variant="secondary">
              View selected work
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
