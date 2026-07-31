import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { MotionController } from "@/components/motion/motion-controller";
import { profile } from "@/content/profile";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <MotionController email={profile.email} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div
          className="site-container"
          data-motion="footer"
          data-reveal-group
        >
          <p className="site-footer__line">{profile.footer.line}</p>
          <div className="site-footer__inner">
            <p>{profile.footer.copyright}</p>
            <p>{profile.footer.location}</p>
            <a href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
