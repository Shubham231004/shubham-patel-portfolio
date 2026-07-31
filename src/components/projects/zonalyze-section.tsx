import Link from "next/link";
import { selectedWork } from "@/content/homepage";
import { projects, zonalyzeDemo } from "@/content/projects";
import { SectionLabel } from "@/components/ui/section-label";

const project = projects[0];

export function ZonalyzeVisual({
  showCaption = true,
}: {
  showCaption?: boolean;
}) {
  return (
    <figure
      className="zonalyze-visual"
      data-motion="zonalyze"
      data-reveal-group
    >
      <div className="zonalyze-visual__header">
        <p>{zonalyzeDemo.contextLabel}</p>
        <p>{zonalyzeDemo.businessType}</p>
      </div>

      <div className="zonalyze-map">
        <svg
          aria-hidden="true"
          className="zonalyze-map__drawing"
          focusable="false"
          viewBox="0 0 900 520"
        >
          <g className="zonalyze-map__plots">
            <path d="M42 38H244L291 156L241 245H43Z" />
            <path d="M303 25H523L546 128L497 218H309L276 142Z" />
            <path d="M594 31H855V175L766 218H589L548 127Z" />
            <path d="M45 291H216L279 368L229 488H46Z" />
            <path d="M287 263H490L550 340L497 491H264L239 411Z" />
            <path d="M578 250H850V487H548L520 393Z" />
          </g>
          <g className="zonalyze-map__roads">
            <path d="M-32 242C164 228 270 239 443 223C613 208 745 216 934 184" />
            <path d="M251 -25C280 114 330 213 415 292C491 362 568 414 668 552" />
            <path d="M539 -24C524 121 506 212 483 319C469 389 466 455 470 550" />
            <path d="M-20 391C151 362 274 372 399 406C544 446 686 436 928 390" />
            <path d="M710 -20C690 106 681 199 703 284C725 370 783 436 893 506" />
          </g>
          <circle className="zonalyze-map__radius" cx="491" cy="255" r="142" />
          <g className="zonalyze-map__competition">
            <circle cx="367" cy="136" r="5" />
            <circle cx="642" cy="124" r="5" />
            <circle cx="704" cy="206" r="5" />
            <circle cx="342" cy="302" r="5" />
            <circle cx="630" cy="335" r="5" />
            <circle cx="775" cy="349" r="5" />
            <circle cx="225" cy="421" r="5" />
            <circle cx="565" cy="442" r="5" />
            <circle cx="801" cy="458" r="5" />
          </g>
        </svg>

        <div className="zonalyze-map__selected">
          <span aria-hidden="true" />
          <p>SELECTED BUSINESS LOCATION</p>
        </div>

        <p className="zonalyze-map__radius-label">SELECTED RADIUS</p>

        <div className="zonalyze-map__competition-key">
          <strong>{zonalyzeDemo.nearbyCompetition}</strong>
          <span>NEARBY COFFEE SHOPS</span>
        </div>

        <aside className="zonalyze-opportunity">
          <p>OPPORTUNITY NOTE</p>
          <strong>{zonalyzeDemo.opportunity}</strong>
        </aside>
      </div>

      <div className="zonalyze-forecast" aria-label="Demo forecast">
        <div className="zonalyze-forecast__metric">
          <p>EXPECTED CUSTOMERS</p>
          <strong>{zonalyzeDemo.expectedCustomers}</strong>
          <span>PER DAY</span>
        </div>
        <div className="zonalyze-forecast__metric">
          <p>ESTIMATED REVENUE</p>
          <strong>{zonalyzeDemo.estimatedRevenue}</strong>
          <span>PER MONTH</span>
        </div>
        <div className="zonalyze-forecast__status zonalyze-forecast__status--positive">
          <p>DEMAND</p>
          <strong>{zonalyzeDemo.demand}</strong>
        </div>
        <div className="zonalyze-forecast__status">
          <p>RISK</p>
          <strong>{zonalyzeDemo.risk}</strong>
        </div>
      </div>

      <dl className="zonalyze-context">
        <div>
          <dt>POPULATION</dt>
          <dd>{zonalyzeDemo.population}</dd>
        </div>
        <div>
          <dt>STUDENT / YOUNG ADULT</dt>
          <dd>{zonalyzeDemo.youngAdultShare}</dd>
        </div>
        <div>
          <dt>COMPETITION</dt>
          <dd>{zonalyzeDemo.nearbyCompetition} nearby shops</dd>
        </div>
        <div>
          <dt>RATIO</dt>
          <dd>{zonalyzeDemo.competitionRatio}</dd>
        </div>
      </dl>

      {showCaption ? <figcaption>{project.visualCaption}</figcaption> : null}
    </figure>
  );
}

export function ZonalyzeSection() {
  return (
    <section className="selected-work" id="work" aria-labelledby="work-title">
      <header className="selected-work__intro">
        <div
          className="site-container site-grid selected-work__intro-grid"
          data-motion="section-intro"
          data-reveal-group
        >
          <SectionLabel motionItem="label">{selectedWork.label}</SectionLabel>
          <div className="selected-work__intro-copy">
            <h2 data-motion-item="heading" id="work-title">
              {selectedWork.heading}
            </h2>
            <p data-motion-item="copy">{selectedWork.supportingText}</p>
            <span aria-hidden="true" data-motion-item="rule" />
          </div>
        </div>
      </header>

      <article
        className="zonalyze-project"
        id={project.slug}
        aria-labelledby="zonalyze-title"
      >
        <div className="site-container site-grid zonalyze-project__grid">
          <div
            className="zonalyze-project__copy"
            data-motion="project-copy"
            data-reveal-group
          >
            <p className="zonalyze-project__index" data-motion-item="label">
              PROJECT 01 / {project.publicName.toUpperCase()}
            </p>
            <h3 data-motion-item="heading" id="zonalyze-title">
              {project.heading}
            </h3>
            <p
              className="zonalyze-project__description"
              data-motion-item="copy"
            >
              {project.description}
            </p>

            <div
              className="zonalyze-project__contribution"
              data-motion-item="composition"
            >
              <p>CONTRIBUTION</p>
              <span>{project.contribution}</span>
            </div>

            <dl
              className="zonalyze-project__metadata"
              data-motion-item="composition"
            >
              {project.labels.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              className="zonalyze-project__cta"
              data-motion-item="composition"
              href={project.caseStudyHref}
            >
              <span>{project.caseStudyCta}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <ZonalyzeVisual />
        </div>
      </article>

      <div
        className="next-project-boundary"
        aria-label="Next project"
        data-motion="boundary"
        data-reveal-group
      >
        <div className="site-container">
          <p>
            NEXT PROJECT / AEGISGRID <span aria-hidden="true">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
