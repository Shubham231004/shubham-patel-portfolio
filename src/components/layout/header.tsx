import { navigation, navigationCta } from "@/content/navigation";
import { profile } from "@/content/profile";

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return navigation.map((item) => (
    <a
      className={mobile ? "mobile-nav__link" : "desktop-nav__link"}
      data-section-link={item.href.includes("#") ? "" : undefined}
      download={item.download}
      href={item.href}
      key={item.label}
    >
      {item.label}
    </a>
  ));
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <a className="site-brand" href="#top" aria-label="Shubham Patel, home">
          {profile.name.toUpperCase()}
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
          <a className="header-cta" href={navigationCta.href}>
            {navigationCta.label}
          </a>
        </nav>

        <details className="mobile-nav">
          <summary>
            <span className="mobile-nav__menu-label">Menu</span>
            <span className="mobile-nav__close-label">Close</span>
          </summary>
          <nav className="mobile-nav__panel" aria-label="Mobile navigation">
            <NavigationLinks mobile />
            <a className="header-cta" href={navigationCta.href}>
              {navigationCta.label}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
