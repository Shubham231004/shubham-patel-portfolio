"use client";

import { useEffect } from "react";

const activeSectionIds = ["work", "experience", "about", "contact"] as const;

export function MotionController({ email }: { email: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const forceReduced = new URLSearchParams(window.location.search).has(
      "reduced-motion",
    );
    const reduced = reducedQuery.matches || forceReduced;
    const groups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-group]"),
    );

    let observer: IntersectionObserver | undefined;

    if (reduced || !("IntersectionObserver" in window)) {
      root.classList.add("motion-reduced");
      groups.forEach((group) => group.classList.add("is-revealed"));
    } else {
      root.classList.add("motion-enabled");

      const pending = new Set(groups);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const group = entry.target as HTMLElement;
            group.classList.add("is-revealed");
            observer?.unobserve(group);
            pending.delete(group);
          });

          if (pending.size === 0) {
            observer?.disconnect();
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );

      pending.forEach((group) => observer?.observe(group));
    }

    const header = document.querySelector<HTMLElement>(".site-header");
    const sectionLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-section-link]"),
    );
    let frame = 0;

    const updateHeader = () => {
      frame = 0;
      root.classList.toggle("is-scrolled", window.scrollY > 24);

      const marker = (header?.offsetHeight ?? 0) + 24;
      let activeSection: string | undefined;

      activeSectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          activeSection = id;
        }
      });

      sectionLinks.forEach((link) => {
        const active = link.hash === `#${activeSection}`;
        link.toggleAttribute("data-active", active);

        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const requestHeaderUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateHeader);
      }
    };

    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
    window.addEventListener("resize", requestHeaderUpdate);

    if (window.scrollY > 24 || window.location.hash) {
      requestHeaderUpdate();
    }

    const mobileMenu =
      document.querySelector<HTMLDetailsElement>(".mobile-nav");
    const mobileMenuSummary =
      mobileMenu?.querySelector<HTMLElement>("summary");
    const closeMobileMenu = (returnFocus = false) => {
      if (!mobileMenu?.open) {
        return;
      }

      mobileMenu.open = false;

      if (returnFocus) {
        mobileMenuSummary?.focus();
      }
    };
    const handleMobileMenuClick = (event: MouseEvent) => {
      if ((event.target as Element).closest("a")) {
        closeMobileMenu();
      }
    };

    const markPointerInput = () => root.classList.add("is-pointer-input");
    const markKeyboardInput = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        root.classList.remove("is-pointer-input");
      }

      if (event.key === "Escape" && mobileMenu?.open) {
        event.preventDefault();
        closeMobileMenu(true);
      }
    };

    mobileMenu?.addEventListener("click", handleMobileMenuClick);
    window.addEventListener("pointerdown", markPointerInput, true);
    window.addEventListener("keydown", markKeyboardInput, true);

    const emailLink = document.querySelector<HTMLElement>("[data-copy-email]");
    const feedback = document.querySelector<HTMLElement>(
      "[data-copy-feedback]",
    );
    let feedbackTimer = 0;

    const copyEmail = (event: MouseEvent) => {
      if (!navigator.clipboard?.writeText || !feedback) {
        return;
      }

      event.preventDefault();

      void navigator.clipboard
        .writeText(email)
        .then(() => {
          window.clearTimeout(feedbackTimer);
          feedback.textContent = "Copied";
          feedback.classList.add("is-visible");
          feedbackTimer = window.setTimeout(() => {
            feedback.classList.remove("is-visible");
            feedback.textContent = "";
          }, 3000);
        })
        .catch(() => {
          window.location.href = emailLink?.getAttribute("href") ?? `mailto:${email}`;
        });
    };

    emailLink?.addEventListener("click", copyEmail);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(feedbackTimer);
      window.removeEventListener("scroll", requestHeaderUpdate);
      window.removeEventListener("resize", requestHeaderUpdate);
      window.removeEventListener("pointerdown", markPointerInput, true);
      window.removeEventListener("keydown", markKeyboardInput, true);
      mobileMenu?.removeEventListener("click", handleMobileMenuClick);
      emailLink?.removeEventListener("click", copyEmail);
      root.classList.remove(
        "motion-enabled",
        "motion-reduced",
        "is-scrolled",
        "is-pointer-input",
      );
      sectionLinks.forEach((link) => {
        link.removeAttribute("data-active");
        link.removeAttribute("aria-current");
      });
    };
  }, [email]);

  return null;
}
