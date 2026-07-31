import {
  AegisGridVisual,
  HandShape,
  SignLanguageVisual,
  StockMarketVisual,
} from "@/components/projects/remaining-projects";
import { ZonalyzeVisual } from "@/components/projects/zonalyze-section";
import {
  aegisGridDemo,
  signLanguageDemo,
  type CaseStudyTheme,
  zonalyzeDemo,
} from "@/content/projects";

function assertNever(value: never): never {
  throw new Error(`Unsupported case-study theme: ${value}`);
}

export function CaseStudyHeroVisual({ theme }: { theme: CaseStudyTheme }) {
  switch (theme) {
    case "zonalyze":
      return <ZonalyzeVisual showCaption={false} />;
    case "aegisgrid":
      return <AegisGridVisual showCaption={false} />;
    case "stock-market":
      return <StockMarketVisual showCaption={false} />;
    case "sign-language":
      return <SignLanguageVisual showCaption={false} />;
    default:
      return assertNever(theme);
  }
}

function ZonalyzeSupportingVisuals() {
  const flow = [
    "AREA + RADIUS",
    "BUSINESS TYPE",
    "DEMAND ASSUMPTIONS",
    "CUSTOMER ESTIMATE",
    "REVENUE + RISK",
  ];

  return (
    <div className="case-visual-pair case-visual-pair--zonalyze">
      <figure
        className="case-panel case-forecast-panel"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>DEMO FORECAST / CUSTOMER + REVENUE</p>
          <p>SELECTED AREA</p>
        </header>
        <div className="case-forecast-panel__metrics">
          <div>
            <span>EXPECTED CUSTOMERS</span>
            <strong>{zonalyzeDemo.expectedCustomers}</strong>
            <small>PER DAY</small>
          </div>
          <div>
            <span>ESTIMATED REVENUE</span>
            <strong>{zonalyzeDemo.estimatedRevenue}</strong>
            <small>PER MONTH</small>
          </div>
          <div>
            <span>DEMAND</span>
            <strong>{zonalyzeDemo.demand}</strong>
          </div>
          <div>
            <span>RISK</span>
            <strong>{zonalyzeDemo.risk}</strong>
          </div>
        </div>
        <dl className="case-forecast-panel__inputs">
          <div>
            <dt>POPULATION</dt>
            <dd>{zonalyzeDemo.population}</dd>
          </div>
          <div>
            <dt>YOUNG-ADULT SHARE</dt>
            <dd>{zonalyzeDemo.youngAdultShare}</dd>
          </div>
          <div>
            <dt>NEARBY COFFEE SHOPS</dt>
            <dd>{zonalyzeDemo.nearbyCompetition}</dd>
          </div>
        </dl>
        <figcaption>
          Demonstration values keep the assumptions visible beside the result.
        </figcaption>
      </figure>

      <figure
        className="case-panel case-flow-panel"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>SYSTEM FLOW / ESTIMATE PATH</p>
          <p>05 STEPS</p>
        </header>
        <ol>
          {flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < flow.length - 1 ? <i aria-hidden="true">→</i> : null}
            </li>
          ))}
        </ol>
        <aside>
          <p>READING THE RESULT</p>
          <span>
            Inputs stay attached to the estimate so the final number does not
            look more certain than it is.
          </span>
        </aside>
        <figcaption>
          A simple path from location inputs to an opportunity summary.
        </figcaption>
      </figure>
    </div>
  );
}

function AegisGridSupportingVisuals() {
  return (
    <div className="case-visual-pair case-visual-pair--aegis">
      <figure
        className="case-panel case-allocation"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>PRIORITY / ALLOCATION CONTEXT</p>
          <p>SYNTHETIC SCENARIO</p>
        </header>
        <div className="case-allocation__body">
          <div className="case-allocation__priority">
            <p>REVIEW ORDER</p>
            <strong>{aegisGridDemo.priority}</strong>
            <span>{aegisGridDemo.priorityCluster} / HIGH RISK</span>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>C-03</strong>
              <small>REVIEW FIRST</small>
            </li>
            <li>
              <span>02</span>
              <strong>C-02</strong>
              <small>NEXT</small>
            </li>
            <li>
              <span>03</span>
              <strong>C-01</strong>
              <small>MONITOR</small>
            </li>
          </ol>
        </div>
        <div className="case-allocation__note">
          <p>ALLOCATION CONTEXT</p>
          <span>
            The interface keeps priority and response context adjacent without
            turning the simulation into a targeting display.
          </span>
        </div>
        <figcaption>
          Cluster risk creates a review order before explanation is added.
        </figcaption>
      </figure>

      <figure
        className="case-panel case-after-action"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>SITUATION / AFTER-ACTION SUMMARY</p>
          <p>ANALYTICAL REVIEW</p>
        </header>
        <div className="case-after-action__sequence">
          <div>
            <span>01</span>
            <strong>GROUP</strong>
            <p>Nearby synthetic objects form clusters.</p>
          </div>
          <div>
            <span>02</span>
            <strong>RANK</strong>
            <p>Cluster distance and risk shape priority.</p>
          </div>
          <div>
            <span>03</span>
            <strong>EXPLAIN</strong>
            <p>An optional layer describes the result afterward.</p>
          </div>
        </div>
        <blockquote>{aegisGridDemo.afterAction}</blockquote>
        <figcaption>
          Explanation follows the decision logic instead of replacing it.
        </figcaption>
      </figure>
    </div>
  );
}

function StockMarketSupportingVisuals() {
  const services = [
    "MARKET DATA",
    "ANALYSIS",
    "USER SERVICE",
    "DATABASE",
    "MONITOR VIEW",
  ];

  return (
    <div className="case-visual-pair case-visual-pair--stock">
      <figure
        className="case-panel case-service-map"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>SERVICE ARCHITECTURE</p>
          <p>RESPONSIBILITY MAP</p>
        </header>
        <div className="case-service-map__nodes">
          {services.map((service, index) => (
            <div key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service}</strong>
            </div>
          ))}
        </div>
        <p className="case-service-map__database">STORED MARKET + USER DATA</p>
        <figcaption>
          Each backend area keeps one clear responsibility.
        </figcaption>
      </figure>

      <figure
        className="case-panel case-request-flow"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>REQUEST / DATA FLOW</p>
          <p>CONCEPTUAL PATH</p>
        </header>
        <ol>
          <li>
            <span>01</span>
            <strong>REQUEST</strong>
            <p>A monitor view asks for market or analysis data.</p>
          </li>
          <li>
            <span>02</span>
            <strong>ROUTE</strong>
            <p>The API sends the request to the relevant service.</p>
          </li>
          <li>
            <span>03</span>
            <strong>READ / WRITE</strong>
            <p>The service works with its stored data.</p>
          </li>
          <li>
            <span>04</span>
            <strong>RESPONSE</strong>
            <p>The result returns to the monitoring layer.</p>
          </li>
        </ol>
        <figcaption>
          The diagram explains service communication without implying live
          update behaviour.
        </figcaption>
      </figure>
    </div>
  );
}

function SignLanguageSupportingVisuals() {
  const modelFlow = [
    "STATIC IMAGE",
    "PREPROCESSING",
    "FEATURES",
    "CLASSIFICATION",
    "LETTER OUTPUT",
  ];

  return (
    <div className="case-visual-pair case-visual-pair--sign">
      <figure
        className="case-panel case-preprocessing"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>PREPROCESSING / SAME HAND POSITION</p>
          <p>ASL LETTER L</p>
        </header>
        <div className="case-preprocessing__stages">
          <div>
            <span>01 / ORIGINAL</span>
            <HandShape />
          </div>
          <div>
            <span>02 / ISOLATED</span>
            <i aria-hidden="true" />
            <HandShape />
          </div>
          <div>
            <span>03 / MASK</span>
            <HandShape />
          </div>
        </div>
        <figcaption>
          The index, thumb and folded fingers stay consistent across every
          stage.
        </figcaption>
      </figure>

      <figure
        className="case-panel case-model-flow"
        data-motion="case-visual"
        data-reveal-group
      >
        <header>
          <p>STATIC-CLASS MODEL FLOW</p>
          <p>{signLanguageDemo.classContext}</p>
        </header>
        <ol>
          {modelFlow.map((stage, index) => (
            <li key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage}</strong>
              {index < modelFlow.length - 1 ? (
                <i aria-hidden="true">→</i>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="case-model-flow__output">
          <span>PREDICTED LETTER</span>
          <strong>{signLanguageDemo.prediction}</strong>
        </div>
        <figcaption>
          No percentage is attached to the conceptual feature response.
        </figcaption>
      </figure>
    </div>
  );
}

export function CaseStudySupportingVisuals({
  theme,
}: {
  theme: CaseStudyTheme;
}) {
  switch (theme) {
    case "zonalyze":
      return <ZonalyzeSupportingVisuals />;
    case "aegisgrid":
      return <AegisGridSupportingVisuals />;
    case "stock-market":
      return <StockMarketSupportingVisuals />;
    case "sign-language":
      return <SignLanguageSupportingVisuals />;
    default:
      return assertNever(theme);
  }
}
