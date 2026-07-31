import Link from "next/link";
import {
  aegisGridDemo,
  projects,
  signLanguageDemo,
  stockMarketDemo,
  type PortfolioProject,
} from "@/content/projects";

const aegisGrid = projects[1];
const stockMarket = projects[2];
const signLanguage = projects[3];

function ProjectMetadata({
  motionItem,
  project,
  tone = "light",
}: {
  motionItem?: "composition";
  project: PortfolioProject;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`project-meta project-meta--${tone}`}
      data-motion-item={motionItem}
    >
      <dl>
        {project.labels.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      <Link className="project-meta__cta" href={project.caseStudyHref}>
        <span>{project.caseStudyCta}</span>
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}

export function AegisGridVisual({
  showCaption = true,
}: {
  showCaption?: boolean;
}) {
  return (
    <figure
      className="aegis-visual"
      data-motion="aegis"
      data-reveal-group
    >
      <header className="aegis-visual__header">
        <p>{aegisGridDemo.scenario}</p>
        <p>THREAT GROUPING / RISK REVIEW</p>
      </header>

      <div className="aegis-visual__body">
        <div className="aegis-field">
          <svg
            aria-hidden="true"
            className="aegis-field__drawing"
            focusable="false"
            viewBox="0 0 900 460"
          >
            <g className="aegis-field__paths">
              <path d="M14 402C158 354 204 286 321 228C435 172 524 171 642 96" />
              <path d="M35 86C184 119 242 162 362 203C496 249 603 284 882 327" />
              <path d="M155 444C256 338 306 305 435 265C574 222 684 166 853 32" />
              <path d="M90 243C229 248 344 289 461 351C575 411 699 419 868 393" />
            </g>
            <g className="aegis-field__clusters">
              <ellipse cx="234" cy="159" rx="108" ry="73" />
              <ellipse cx="525" cy="306" rx="98" ry="68" />
              <ellipse className="aegis-field__cluster--risk" cx="708" cy="151" rx="124" ry="88" />
            </g>
          </svg>

          <div className="aegis-field__points" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="aegis-field__cluster-label aegis-field__cluster-label--one">
            <span>C-01</span>
            <strong>LOW</strong>
          </div>
          <div className="aegis-field__cluster-label aegis-field__cluster-label--two">
            <span>C-02</span>
            <strong>MEDIUM</strong>
          </div>
          <div className="aegis-field__cluster-label aegis-field__cluster-label--three">
            <span>C-03</span>
            <strong>HIGH</strong>
          </div>
        </div>

        <aside className="aegis-priority" aria-label="Threat priority">
          <p>THREAT PRIORITY</p>
          <strong>{aegisGridDemo.priority}</strong>
          <dl>
            <div>
              <dt>CLUSTER</dt>
              <dd>{aegisGridDemo.priorityCluster}</dd>
            </div>
            <div>
              <dt>RISK</dt>
              <dd>{aegisGridDemo.priorityRisk}</dd>
            </div>
            <div>
              <dt>GROUPED POINTS</dt>
              <dd>{aegisGridDemo.groupedThreats}</dd>
            </div>
          </dl>
          <div className="aegis-priority__note">
            <p>SITUATION NOTE</p>
            <span>{aegisGridDemo.situationNote}</span>
          </div>
        </aside>
      </div>

      <div className="aegis-summary">
        {aegisGridDemo.clusters.map((cluster) => (
          <div key={cluster.id}>
            <p>{cluster.id}</p>
            <strong>{cluster.risk}</strong>
            <span>{cluster.points}</span>
          </div>
        ))}
        <div className="aegis-summary__after-action">
          <p>AFTER-ACTION</p>
          <span>{aegisGridDemo.afterAction}</span>
        </div>
      </div>

      {showCaption ? <figcaption>{aegisGrid.visualCaption}</figcaption> : null}
    </figure>
  );
}

export function AegisGridSection() {
  return (
    <article
      className="featured-project aegis-project"
      id={aegisGrid.slug}
      aria-labelledby="aegisgrid-title"
    >
      <div className="site-container">
        <header
          className="site-grid aegis-project__header"
          data-motion="project-header"
          data-reveal-group
        >
          <div className="aegis-project__copy">
            <p className="featured-project__index" data-motion-item="label">
              PROJECT 02 / AEGISGRID
            </p>
            <h2 data-motion-item="heading" id="aegisgrid-title">
              {aegisGrid.heading}
            </h2>
            <p data-motion-item="copy">{aegisGrid.description}</p>
          </div>
          <ProjectMetadata
            motionItem="composition"
            project={aegisGrid}
            tone="dark"
          />
        </header>
        <AegisGridVisual />
      </div>
    </article>
  );
}

export function StockMarketVisual({
  showCaption = true,
}: {
  showCaption?: boolean;
}) {
  return (
    <figure
      className="stock-visual"
      data-motion="stock"
      data-reveal-group
    >
      <header className="stock-visual__header">
        <p>{stockMarketDemo.session}</p>
        <p>MARKET MONITOR / SERVICE VIEW</p>
      </header>

      <div className="stock-visual__main">
        <dl className="stock-watchlist">
          <div className="stock-watchlist__heading">
            <dt>WATCHLIST</dt>
            <dd>SELECTED</dd>
          </div>
          {stockMarketDemo.watchlist.map((item, index) => (
            <div className={index === 0 ? "is-selected" : undefined} key={item.symbol}>
              <dt>{item.symbol}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="stock-chart">
          <div className="stock-chart__heading">
            <div>
              <p>{stockMarketDemo.selectedSymbol}</p>
              <strong>{stockMarketDemo.lastPrice}</strong>
            </div>
            <div>
              <p>STATUS</p>
              <span>{stockMarketDemo.status}</span>
            </div>
          </div>

          <svg
            aria-hidden="true"
            className="stock-chart__drawing"
            focusable="false"
            viewBox="0 0 780 330"
          >
            <g className="stock-chart__grid">
              <path d="M0 55H780M0 135H780M0 215H780M0 295H780" />
              <path d="M90 0V330M260 0V330M430 0V330M600 0V330" />
            </g>
            <path
              className="stock-chart__reference"
              d="M0 212H780"
            />
            <path
              className="stock-chart__line"
              d="M0 260L61 248L119 266L173 211L231 225L294 184L348 202L407 153L462 173L522 118L581 139L642 82L702 97L780 45"
            />
          </svg>
          <p className="stock-chart__reference-label">
            REFERENCE / {stockMarketDemo.referenceLevel}
          </p>
        </div>
      </div>

      <div className="stock-services" aria-label="Conceptual service flow">
        {stockMarketDemo.services.map((service, index) => (
          <div key={service}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{service}</strong>
            {index < stockMarketDemo.services.length - 1 ? (
              <i aria-hidden="true">→</i>
            ) : null}
          </div>
        ))}
      </div>

      {showCaption ? <figcaption>{stockMarket.visualCaption}</figcaption> : null}
    </figure>
  );
}

export function StockMarketSection() {
  return (
    <article
      className="featured-project stock-project"
      id={stockMarket.slug}
      aria-labelledby="stock-market-title"
    >
      <div className="site-container site-grid stock-project__grid">
        <StockMarketVisual />
        <div
          className="stock-project__copy"
          data-motion="project-copy"
          data-reveal-group
        >
          <p className="featured-project__index" data-motion-item="label">
            PROJECT 03 / STOCK MARKET
          </p>
          <h2 data-motion-item="heading" id="stock-market-title">
            {stockMarket.heading}
          </h2>
          <p data-motion-item="copy">{stockMarket.description}</p>
          <ProjectMetadata motionItem="composition" project={stockMarket} />
        </div>
      </div>
    </article>
  );
}

export function HandShape() {
  return (
    <svg
      aria-hidden="true"
      className="sign-hand"
      focusable="false"
      viewBox="0 0 160 220"
    >
      <path
        className="sign-hand__silhouette"
        d="M55 218c-2-15-5-30-9-45H20C8 173 0 165 0 154c0-10 8-18 20-19h36V92c0-10 7-17 17-17 9 0 16 7 16 17v28h4V31C93 13 102 3 116 3s24 10 24 28v105c0 21-8 34-15 48-5 11-8 22-9 34H55Z"
      />
      <g className="sign-hand__creases">
        <path d="M61 119c7-9 17-10 27-3" />
        <path d="M61 140c10-10 23-10 34-1" />
        <path d="M67 160c10-8 22-8 33 0" />
      </g>
    </svg>
  );
}

export function SignLanguageVisual({
  showCaption = true,
}: {
  showCaption?: boolean;
}) {
  return (
    <figure
      className="sign-visual"
      data-motion="sign-language"
      data-reveal-group
    >
      <header className="sign-visual__header">
        <p>{signLanguageDemo.input}</p>
        <p>{signLanguageDemo.context}</p>
      </header>

      <div className="sign-process">
        <div className="sign-stage sign-stage--input">
          <p>01 / {signLanguageDemo.stages[0]}</p>
          <div className="sign-stage__frame">
            <HandShape />
          </div>
        </div>

        <div className="sign-stage sign-stage--region">
          <p>02 / {signLanguageDemo.stages[1]}</p>
          <div className="sign-stage__frame">
            <span className="sign-region" aria-hidden="true" />
            <HandShape />
          </div>
        </div>

        <div className="sign-stage sign-stage--mask">
          <p>03 / {signLanguageDemo.stages[2]}</p>
          <div className="sign-stage__frame">
            <HandShape />
          </div>
        </div>

        <div className="sign-stage sign-stage--response">
          <p>04 / {signLanguageDemo.stages[3]}</p>
          <div className="sign-features" aria-hidden="true">
            {Array.from({ length: 7 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <span>{signLanguageDemo.classContext}</span>
        </div>

        <div className="sign-output">
          <p>PREDICTED LETTER /</p>
          <strong>{signLanguageDemo.prediction}</strong>
          <span>STATIC LETTER OUTPUT</span>
        </div>
      </div>

      {showCaption ? <figcaption>{signLanguage.visualCaption}</figcaption> : null}
    </figure>
  );
}

export function SignLanguageSection() {
  return (
    <article
      className="featured-project sign-project"
      id={signLanguage.slug}
      aria-labelledby="sign-language-title"
    >
      <div className="site-container">
        <header
          className="site-grid sign-project__header"
          data-motion="project-header"
          data-reveal-group
        >
          <div className="sign-project__copy">
            <p className="featured-project__index" data-motion-item="label">
              PROJECT 04 / SIGN LANGUAGE RECOGNITION
            </p>
            <h2 data-motion-item="heading" id="sign-language-title">
              {signLanguage.heading}
            </h2>
            <p data-motion-item="copy">{signLanguage.description}</p>
          </div>
          <ProjectMetadata
            motionItem="composition"
            project={signLanguage}
            tone="dark"
          />
        </header>
        <SignLanguageVisual />
      </div>
    </article>
  );
}
