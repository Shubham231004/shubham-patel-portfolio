import Link from "next/link";
import {
  CaseStudyHeroVisual,
  CaseStudySupportingVisuals,
} from "@/components/case-studies/case-study-visuals";
import { ContactSection } from "@/components/home/remaining-sections";
import { SiteShell } from "@/components/layout/site-shell";
import type { PortfolioProject } from "@/content/projects";
import { projects } from "@/content/projects";

function CaseStudyMetadata({ project }: { project: PortfolioProject }) {
  return (
    <dl className="case-study__metadata" data-motion-item="composition">
      {project.labels.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudyPage({ project }: { project: PortfolioProject }) {
  const { caseStudy } = project;
  const nextProject = projects.find(
    (candidate) => candidate.slug === caseStudy.nextSlug,
  );

  if (!nextProject) {
    throw new Error(`Missing next project for ${project.slug}`);
  }

  return (
    <SiteShell>
      <article
        className={`case-study case-study--${caseStudy.theme}`}
        data-case-study={caseStudy.theme}
      >
        <section className="case-study__hero" id="top">
          <div className="site-container">
            <nav
              aria-label="Project navigation"
              className="case-study__project-nav"
            >
              <a href="/#work">
                <span aria-hidden="true">←</span> Back to selected work
              </a>
              <p>
                CASE STUDY {caseStudy.index} /{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
            </nav>

            <div className="site-grid case-study__hero-grid">
              <header
                className="case-study__hero-copy"
                data-motion="case-hero"
                data-reveal-group
              >
                <p data-motion-item="label">
                  PROJECT {caseStudy.index} / {project.publicName.toUpperCase()}
                </p>
                <h1 data-motion-item="heading">{project.heading}</h1>
                <p data-motion-item="copy">{project.description}</p>
                <CaseStudyMetadata project={project} />
              </header>

              <div className="case-study__hero-visual">
                <CaseStudyHeroVisual theme={caseStudy.theme} />
                <p className="case-study__visual-note">
                  {project.caseStudyVisualNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Project context and role"
          className="case-study__story"
        >
          <div className="site-container site-grid case-study__story-grid">
            {[caseStudy.problem, caseStudy.context].map((section) => (
              <div
                className="case-study__story-block"
                data-motion="case-section"
                data-reveal-group
                key={section.label}
              >
                <p data-motion-item="label">{section.label}</p>
                <h2 data-motion-item="heading">{section.heading}</h2>
                <div data-motion-item="copy">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby={`${project.slug}-system-title`}
          className="case-study__system"
        >
          <div className="site-container site-grid case-study__system-grid">
            <header
              className="case-study__section-heading"
              data-motion="case-section"
              data-reveal-group
            >
              <p data-motion-item="label">{caseStudy.system.label}</p>
              <h2
                data-motion-item="heading"
                id={`${project.slug}-system-title`}
              >
                {caseStudy.system.heading}
              </h2>
              <p data-motion-item="copy">{caseStudy.system.intro}</p>
            </header>

            <ol
              className="case-study__system-steps"
              data-motion="case-list"
              data-reveal-group
            >
              {caseStudy.system.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby={`${project.slug}-visuals-title`}
          className="case-study__visuals"
        >
          <div className="site-container">
            <header
              className="site-grid case-study__visuals-heading"
              data-motion="case-section"
              data-reveal-group
            >
              <p data-motion-item="label">{caseStudy.visuals.label}</p>
              <div>
                <h2
                  data-motion-item="heading"
                  id={`${project.slug}-visuals-title`}
                >
                  {caseStudy.visuals.heading}
                </h2>
                <p data-motion-item="copy">
                  {caseStudy.visuals.supportingText}
                </p>
              </div>
            </header>

            <CaseStudySupportingVisuals theme={caseStudy.theme} />
          </div>
        </section>

        <section
          aria-labelledby={`${project.slug}-learned-title`}
          className="case-study__reflection"
        >
          <div
            className="site-container site-grid case-study__reflection-grid"
            data-motion="case-section"
            data-reveal-group
          >
            <p data-motion-item="label">{caseStudy.learned.label}</p>
            <div>
              <h2
                data-motion-item="heading"
                id={`${project.slug}-learned-title`}
              >
                {caseStudy.learned.heading}
              </h2>
              <blockquote data-motion-item="copy">
                {caseStudy.learned.statement}
              </blockquote>
              <ol data-motion-item="composition">
                {caseStudy.learned.observations.map((observation, index) => (
                  <li key={observation}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{observation}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="case-study__current">
          <div
            className="site-container site-grid case-study__current-grid"
            data-motion="case-section"
            data-reveal-group
          >
            <p data-motion-item="label">{caseStudy.currentState.label}</p>
            <div>
              <h2 data-motion-item="heading">
                {caseStudy.currentState.statement}
              </h2>
              <p data-motion-item="copy">{caseStudy.currentState.detail}</p>
            </div>
          </div>
        </section>

        <nav
          aria-label={`Next project: ${nextProject.publicName}`}
          className="case-study__next"
          data-motion="case-section"
          data-reveal-group
        >
          <Link href={nextProject.caseStudyHref}>
            <span data-motion-item="label">NEXT PROJECT</span>
            <strong data-motion-item="heading">
              {nextProject.publicName}
            </strong>
            <p data-motion-item="copy">{nextProject.heading}</p>
            <i aria-hidden="true">→</i>
          </Link>
        </nav>
      </article>

      <ContactSection />
    </SiteShell>
  );
}
