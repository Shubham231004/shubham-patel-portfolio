import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { experience, experienceSection } from "@/content/experience";
import { about, capabilities, otherWork } from "@/content/homepage";
import { profile } from "@/content/profile";

export function OtherWorkSection() {
  return (
    <section className="other-work" aria-labelledby="other-work-title">
      <div className="site-container">
        <header
          className="site-grid other-work__header"
          data-motion="section-intro"
          data-reveal-group
        >
          <p data-motion-item="label">OTHER WORK</p>
          <h2 data-motion-item="heading" id="other-work-title">
            {otherWork.heading}
          </h2>
        </header>

        <div
          className="other-work__rows"
          data-motion="other-work"
          data-reveal-group
        >
          {otherWork.items.map((item, index) => (
            <article className="other-work__row" key={item.name}>
              <span className="other-work__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="other-work__copy">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.technologies}</span>
              </div>
              <div
                className={`other-work__preview other-work__preview--${index + 1}`}
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </div>
              <span className="other-work__arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const tmx = experience[0];
  const digipple = experience[1];
  const reliance = experience[2];

  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <header
          className="site-grid experience-section__header"
          data-motion="section-intro"
          data-reveal-group
        >
          <SectionLabel motionItem="label" tone="dark">
            {experienceSection.label}
          </SectionLabel>
          <div>
            <h2 data-motion-item="heading" id="experience-title">
              {experienceSection.heading}
            </h2>
            <p data-motion-item="copy">{experienceSection.supportingText}</p>
          </div>
        </header>

        <article
          className="tmx-experience"
          data-motion="tmx"
          data-reveal-group
        >
          <header>
            <p>
              {tmx.role} / {tmx.dates}
            </p>
            <span>{tmx.status}</span>
          </header>
          <div className="site-grid tmx-experience__body">
            <h3>{tmx.company}</h3>
            <p>{tmx.copy}</p>
          </div>
          <dl className="tmx-experience__metrics">
            {tmx.metrics?.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article
          className="digipple-experience"
          data-motion="digipple"
          data-reveal-group
        >
          <div className="site-grid digipple-experience__intro">
            <div>
              <p>PROGRESSION / 2023—2025</p>
              <h3>{digipple.company}</h3>
              <strong>{digipple.status}</strong>
            </div>
            <p>{digipple.copy}</p>
          </div>

          <ol className="digipple-experience__timeline">
            {digipple.progression?.map((role, index) => (
              <li key={role}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{role}</strong>
              </li>
            ))}
          </ol>

          <ul className="digipple-experience__facts">
            {digipple.selectedFacts?.slice(0, 3).map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </article>

        <article
          className="reliance-experience"
          data-motion="reliance"
          data-reveal-group
        >
          <div>
            <p>
              {reliance.role} / {reliance.dates}
            </p>
            <h3>{reliance.company}</h3>
          </div>
          <div>
            <strong>{reliance.status}</strong>
            <p>{reliance.copy}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div
        className="site-container site-grid about-section__grid"
        data-motion="about"
        data-reveal-group
      >
        <SectionLabel motionItem="label">{about.label}</SectionLabel>
        <div className="about-section__copy">
          <h2 data-motion-item="heading" id="about-title">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p data-motion-item="copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <strong data-motion-item="closing">{about.closing}</strong>
        </div>
        <dl className="about-section__labels" data-motion-item="composition">
          {about.labels.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      className="capabilities-section"
      aria-labelledby="capabilities-title"
    >
      <div className="site-container">
        <header
          className="site-grid capabilities-section__header"
          data-motion="section-intro"
          data-reveal-group
        >
          <p data-motion-item="label">TECHNICAL CAPABILITIES</p>
          <div>
            <h2 data-motion-item="heading" id="capabilities-title">
              {capabilities.heading}
            </h2>
            <p data-motion-item="copy">{capabilities.supportingText}</p>
          </div>
        </header>

        <div
          className="capabilities-section__groups"
          data-motion="capabilities"
          data-reveal-group
        >
          {capabilities.groups.map((group, index) => (
            <section key={group.name}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.name}</h3>
              </header>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="education-section" aria-labelledby="education-title">
      <div
        className="site-container site-grid education-section__grid"
        data-motion="education"
        data-reveal-group
      >
        <p>EDUCATION</p>
        <div>
          <h2 id="education-title">{profile.education.degree}</h2>
          <p>
            {profile.education.institution}, {profile.education.location}
          </p>
        </div>
        <strong>{profile.education.expected}</strong>
        <ul>
          {profile.education.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [emailName, emailDomain] = profile.email.split("@");
  const secondaryLinks: readonly {
    label: string;
    href: string;
    download?: string;
  }[] = [
    { label: "LinkedIn", href: profile.links.linkedin },
    { label: "GitHub", href: profile.links.github },
    {
      label: "Download résumé",
      href: profile.links.resume,
      download: "Shubham-Patel-Resume.pdf",
    },
  ];

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div
        className="site-container site-grid contact-section__grid"
        data-motion="contact"
        data-reveal-group
      >
        <SectionLabel motionItem="label" tone="dark">
          {profile.contact.sectionLabel}
        </SectionLabel>
        <div className="contact-section__content">
          <h2 data-motion-item="heading" id="contact-title">
            {profile.contact.heading}
          </h2>
          <p data-motion-item="copy">{profile.contact.supportingText}</p>

          <Link
            className="contact-section__email"
            data-copy-email
            data-motion-item="email"
            href={profile.links.email}
          >
            <span>Email me</span>
            <strong>
              <span>{emailName}</span>
              <wbr />
              <span>@{emailDomain}</span>
            </strong>
            <span
              aria-live="polite"
              className="contact-section__copied"
              data-copy-feedback
              role="status"
            />
            <i aria-hidden="true">↗</i>
          </Link>

          <nav
            className="contact-section__links"
            aria-label="Contact links"
            data-motion-item="links"
          >
            {secondaryLinks.map((link) => (
              <Link
                download={link.download}
                href={link.href}
                key={link.label}
                prefetch={link.download ? false : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                <span>{link.label}</span>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
