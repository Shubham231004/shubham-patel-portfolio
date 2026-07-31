import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/content/profile";

const secondaryLinks = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Email", href: profile.links.email },
] as const;

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__guides" aria-hidden="true" />

      <div className="site-container site-grid hero__grid">
        <div className="hero__intro">
          <p className="hero__label">{profile.hero.label}</p>
          <h1 className="hero-title" id="hero-title">
            <span className="hero-title__intro">
              {profile.hero.headline.intro}
            </span>{" "}
            <span className="hero-title__statement">
              {profile.hero.headline.statementLines.map((line, index) => (
                <span className="hero-title__line" key={line}>
                  {line}
                  {index < profile.hero.headline.statementLines.length - 1
                    ? " "
                    : null}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <figure className="hero-portrait">
          <div className="hero-portrait__rule" aria-hidden="true" />
          <div className="hero-portrait__mask">
            <Image
              alt="Shubham Patel wearing a dark suit and white shirt"
              className="hero-portrait__image"
              fill
              priority
              sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 48vw, 36vw"
              src="/images/portrait/shubham-patel-portrait.png"
            />
          </div>
        </figure>

        <div className="hero__details">
          <p className="hero__supporting">{profile.hero.supportingText}</p>

          <div className="hero__actions">
            <ButtonLink href="#work">See my work</ButtonLink>
            <ButtonLink
              href={profile.links.resume}
              variant="secondary"
              download="Shubham-Patel-Resume.pdf"
            >
              Download résumé
            </ButtonLink>
          </div>

          <nav className="hero__secondary-links" aria-label="Profile links">
            {secondaryLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="hero-strip">
        <ul className="site-container" aria-label="Professional focus">
          {profile.hero.strip.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
