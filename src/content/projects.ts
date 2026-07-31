export type ProjectLabel = {
  label: string;
  value: string;
};

export type CaseStudyTheme =
  | "zonalyze"
  | "aegisgrid"
  | "stock-market"
  | "sign-language";

export type CaseStudyContent = {
  index: "01" | "02" | "03" | "04";
  theme: CaseStudyTheme;
  seoDescription: string;
  problem: {
    label: string;
    heading: string;
    paragraphs: readonly string[];
  };
  context: {
    label: string;
    heading: string;
    paragraphs: readonly string[];
  };
  system: {
    label: string;
    heading: string;
    intro: string;
    steps: readonly string[];
  };
  visuals: {
    label: string;
    heading: string;
    supportingText: string;
  };
  learned: {
    label: string;
    heading: string;
    statement: string;
    observations: readonly string[];
  };
  currentState: {
    label: "WHERE IT STANDS NOW";
    statement: string;
    detail: string;
  };
  nextSlug: CaseStudyTheme;
};

export type PortfolioProject = {
  slug: string;
  publicName: string;
  heading: string;
  description: string;
  contribution?: string;
  labels: readonly ProjectLabel[];
  caseStudyHref: string;
  caseStudyCta: string;
  visualCaption?: "CONCEPT PRESENTATION";
  caseStudyVisualNote?: string;
  repositoryUrl?: string;
  showRepositoryLink: boolean;
  publicGuardrails: readonly string[];
  caseStudy: CaseStudyContent;
};

const conceptNote =
  "This visual was created for the portfolio to show the project idea clearly.";

export const projects = [
  {
    slug: "zonalyze",
    publicName: "Zonalyze",
    heading: "A clearer way to think about location.",
    description:
      "Opening a business involves a lot of guessing. Zonalyze is our attempt to make one part of it clearer: choosing the right location.",
    contribution:
      "I worked on the customer and revenue side of the platform. My part estimates demand, expected customers and possible monthly revenue based on the selected area.",
    labels: [
      { label: "ROLE", value: "Customer and revenue prediction" },
      {
        label: "BUILT WITH",
        value: "React · FastAPI · PostgreSQL · Docker",
      },
      { label: "PROJECT TYPE", value: "Eight-month capstone project" },
    ],
    caseStudyHref: "/work/zonalyze",
    caseStudyCta: "View case study",
    visualCaption: "CONCEPT PRESENTATION",
    caseStudyVisualNote: conceptNote,
    repositoryUrl:
      "https://github.com/Shubham231004/Group-14-Zonalyze",
    showRepositoryLink: false,
    publicGuardrails: [
      "Use Zonalyze as the public name.",
      "Treat demo values as context, not guaranteed results.",
    ],
    caseStudy: {
      index: "01",
      theme: "zonalyze",
      seoDescription:
        "A Zonalyze case study covering Shubham Patel’s work on customer and revenue prediction in an eight-month Computer Science capstone project.",
      problem: {
        label: "01 / CONTEXT",
        heading: "What we were trying to solve",
        paragraphs: [
          "Choosing a business location involves population, competition, costs and expected demand. These details often sit in different places, which makes comparison difficult.",
          "Zonalyze brings them into one location-based view so a user can change the area, business type and assumptions before comparing the result.",
        ],
      },
      context: {
        label: "02 / MY PART",
        heading: "The part I worked on",
        paragraphs: [
          "I worked on the customer and revenue side of the platform. My part estimates demand, expected customers and possible monthly revenue based on the selected area.",
          "The demand-level control lets the assumptions change before the customer and revenue estimates are read. Those values are presented as estimates, not guaranteed forecasts.",
        ],
      },
      system: {
        label: "03 / SYSTEM",
        heading: "How it comes together",
        intro:
          "The result becomes easier to read when the inputs and assumptions stay visible beside it.",
        steps: [
          "Location and radius",
          "Business type",
          "Population and age mix",
          "Competitor context",
          "Demand assumptions",
          "Customer estimate",
          "Revenue estimate",
          "Risk and opportunity summary",
        ],
      },
      visuals: {
        label: "04 / PROJECT VIEW",
        heading: "From a selected area to a usable estimate.",
        supportingText:
          "The supporting views separate the forecast from the inputs that shape it, then show how that information moves through the wider platform.",
      },
      learned: {
        label: "05 / REFLECTION",
        heading: "What I learned",
        statement:
          "An estimate is more useful when its assumptions are easier to understand than its headline number.",
        observations: [
          "Several inputs have to become one result without hiding where it came from.",
          "My module had to fit into a larger team project and keep frontend and backend data consistent.",
          "Forecasts are clearer when uncertainty is part of the presentation.",
        ],
      },
      currentState: {
        label: "WHERE IT STANDS NOW",
        statement: "An eight-month capstone project developed as a team.",
        detail:
          "The portfolio presentation uses demonstration values to explain the project idea clearly.",
      },
      nextSlug: "aegisgrid",
    },
  },
  {
    slug: "aegisgrid",
    publicName: "AegisGrid",
    heading: "Spot the threat before it gets close.",
    description:
      "We built AegisGrid as a synthetic drone-swarm simulation. It groups nearby threats, scores their risk and helps explain which ones need attention first.",
    labels: [
      { label: "PROJECT", value: "ConHacks hackathon" },
      {
        label: "BUILT WITH",
        value: "Python · React · TypeScript · scikit-learn",
      },
      { label: "FOCUS", value: "Threat grouping and risk analysis" },
    ],
    caseStudyHref: "/work/aegisgrid",
    caseStudyCta: "View case study",
    visualCaption: "CONCEPT PRESENTATION",
    caseStudyVisualNote: conceptNote,
    repositoryUrl: "https://github.com/Girish0744/AegisGrid",
    showRepositoryLink: false,
    publicGuardrails: [
      "Describe the project as a synthetic simulation.",
      "Do not list OpenAI API on the homepage.",
      "The case study may mention an optional AI explanation layer.",
    ],
    caseStudy: {
      index: "02",
      theme: "aegisgrid",
      seoDescription:
        "An AegisGrid case study about a synthetic drone-swarm simulation built for the ConHacks hackathon using clustering and risk analysis.",
      problem: {
        label: "01 / CONTEXT",
        heading: "What we were trying to solve",
        paragraphs: [
          "A large group of incoming objects can be difficult to review one at a time. The project explores how nearby threats can be grouped and prioritized before presenting the result clearly.",
          "Everything shown here stays inside a synthetic simulation.",
        ],
      },
      context: {
        label: "02 / TEAM",
        heading: "Team project",
        paragraphs: [
          "We combined clustering, risk scoring, resource allocation and a visual interface during the hackathon.",
          "An optional AI layer helped explain the result in plain language, but it sat outside the core decision loop.",
        ],
      },
      system: {
        label: "03 / SYSTEM",
        heading: "How it comes together",
        intro:
          "The decision path stays separate from the explanation shown after it.",
        steps: [
          "Synthetic incoming objects",
          "Movement and distance information",
          "DBSCAN-style grouping",
          "Cluster risk",
          "Priority ranking",
          "Response and allocation context",
          "Optional explanation layer",
          "After-action summary",
        ],
      },
      visuals: {
        label: "04 / SIMULATION VIEW",
        heading: "From moving points to a review order.",
        supportingText:
          "The supporting views show allocation context and a quieter after-action readout without turning the simulation into a game interface.",
      },
      learned: {
        label: "05 / REFLECTION",
        heading: "What I learned",
        statement:
          "A fast team build still needs a clear line between what makes a decision and what explains it.",
        observations: [
          "Clustering output becomes more useful when the interface gives it a readable order.",
          "Technical logic and explanation should remain separate.",
          "A serious visual tone can communicate urgency without becoming sensational.",
        ],
      },
      currentState: {
        label: "WHERE IT STANDS NOW",
        statement: "A hackathon simulation and working project concept.",
        detail:
          "The case study focuses on the grouping, priority and explanation flow created during the event.",
      },
      nextSlug: "stock-market",
    },
  },
  {
    slug: "stock-market",
    publicName: "Stock Market Project",
    heading: "Live prices without the constant refreshing.",
    description:
      "I worked on the backend structure for a stock-monitoring project, including market data, analysis and user services. The dashboard shown here is a concept for how those pieces could come together on one screen.",
    labels: [
      { label: "BUILT WITH", value: "Python · Flask · MongoDB" },
      { label: "FOCUS", value: "Market data and backend services" },
    ],
    caseStudyHref: "/work/stock-market",
    caseStudyCta: "View case study",
    visualCaption: "CONCEPT PRESENTATION",
    caseStudyVisualNote: conceptNote,
    repositoryUrl:
      "https://github.com/Shubham231004/Stock-Market-Project",
    showRepositoryLink: false,
    publicGuardrails: [
      "Do not publish unsupported speed, refresh-time or alert metrics.",
    ],
    caseStudy: {
      index: "03",
      theme: "stock-market",
      seoDescription:
        "A Stock Market Project case study covering Shubham Patel’s backend structure for market data, analysis and user services.",
      problem: {
        label: "01 / CONTEXT",
        heading: "What we were trying to solve",
        paragraphs: [
          "Market information can come from several services and quickly become difficult to follow. This project explored how data, analysis and user-facing services could be separated into smaller backend components.",
          "The work is presented as a backend and architecture prototype, not a finished live platform.",
        ],
      },
      context: {
        label: "02 / BACKEND",
        heading: "The backend structure",
        paragraphs: [
          "I worked on the backend structure for market data, analysis and user services, with database storage and an API or monitoring layer around them.",
          "The concept stops at the service boundaries and data flow. It does not present alerts or live updates as finished features.",
        ],
      },
      system: {
        label: "03 / CONCEPT",
        heading: "How the concept could look",
        intro:
          "The interface is a portfolio concept showing how the backend pieces could be presented together.",
        steps: [
          "Market-data service",
          "Analysis service",
          "User service",
          "API or monitoring layer",
          "Database storage",
          "Service communication",
        ],
      },
      visuals: {
        label: "04 / SERVICE VIEW",
        heading: "A backend structure, shown as one interface.",
        supportingText:
          "The supporting diagrams keep the architecture and request flow separate from the market-monitoring concept.",
      },
      learned: {
        label: "05 / REFLECTION",
        heading: "What I learned",
        statement:
          "A backend becomes easier to reason about when every service has one clear responsibility.",
        observations: [
          "Separating services makes the data flow easier to document.",
          "Architecture diagrams can explain work that does not have a polished interface.",
          "A good concept still needs to stay honest about the difference between an idea and a finished product.",
        ],
      },
      currentState: {
        label: "WHERE IT STANDS NOW",
        statement:
          "A backend and architecture prototype with a portfolio interface concept.",
        detail:
          "The visual shows one possible presentation of the service structure without claiming live market behaviour.",
      },
      nextSlug: "sign-language",
    },
  },
  {
    slug: "sign-language",
    publicName: "Sign Language Recognition",
    heading: "Teaching a computer to recognize hand signs.",
    description:
      "This project explores how static hand signs can be cleaned, processed and matched to letters. The visual follows the journey from the original image to the final prediction.",
    labels: [
      { label: "BUILT WITH", value: "Python · OpenCV · TensorFlow" },
      { label: "FOCUS", value: "Image processing and gesture recognition" },
    ],
    caseStudyHref: "/work/sign-language",
    caseStudyCta: "View case study",
    visualCaption: "CONCEPT PRESENTATION",
    caseStudyVisualNote: conceptNote,
    repositoryUrl:
      "https://github.com/Shubham231004/Sign-Language-Recognition",
    showRepositoryLink: false,
    publicGuardrails: [
      "Do not mention 98.6% accuracy.",
      "Do not claim real-time webcam prediction.",
      "Do not claim coverage of all 26 letters.",
    ],
    caseStudy: {
      index: "04",
      theme: "sign-language",
      seoDescription:
        "A Sign Language Recognition case study about preprocessing static hand-sign images and matching them across 24 letter classes.",
      problem: {
        label: "01 / CONTEXT",
        heading: "What we were trying to solve",
        paragraphs: [
          "Images of hand signs contain background, lighting and shape differences that can make recognition difficult. The project explores how preprocessing can isolate the hand before classification.",
          "The scope stays with static images rather than real-time webcam recognition.",
        ],
      },
      context: {
        label: "02 / PROJECT SCOPE",
        heading: "A focused processing study",
        paragraphs: [
          "The project follows 24 static letter classes from image input to letter output.",
          "It is an image-processing and classification experiment, not a finished accessibility product.",
        ],
      },
      system: {
        label: "03 / PIPELINE",
        heading: "How the image moves through the system",
        intro:
          "Each stage removes a little more visual noise before the final classification.",
        steps: [
          "Original static image",
          "Isolated hand region",
          "Processed mask",
          "Extracted or learned features",
          "Letter classification",
          "Output",
        ],
      },
      visuals: {
        label: "04 / PROCESSING VIEW",
        heading: "The image changes before the model sees it.",
        supportingText:
          "The supporting views compare the same L-shaped hand geometry through preprocessing, then show the static model flow.",
      },
      learned: {
        label: "05 / REFLECTION",
        heading: "What I learned",
        statement:
          "The quality of the input can matter as much as the model that reads it.",
        observations: [
          "Preprocessing makes the hand shape easier to separate from its background.",
          "Comparing raw and processed images exposes where classification can become difficult.",
          "A technical pipeline is easier to understand when every stage remains visually consistent.",
        ],
      },
      currentState: {
        label: "WHERE IT STANDS NOW",
        statement:
          "A static hand-sign recognition experiment and processing study.",
        detail:
          "The portfolio visual keeps the scope at 24 static letter classes and does not attach a confidence claim.",
      },
      nextSlug: "zonalyze",
    },
  },
] as const satisfies readonly PortfolioProject[];

export const zonalyzeDemo = {
  contextLabel: "DEMO LOCATION PROFILE",
  businessType: "COFFEE SHOP FEASIBILITY",
  population: "14,200",
  youngAdultShare: "65%",
  nearbyCompetition: "9",
  competitionRatio: "1 shop per 1,577 people",
  expectedCustomers: "45",
  estimatedRevenue: "$24K",
  demand: "High",
  risk: "Medium",
  opportunity:
    "A strong student share may support steady weekday demand, despite the nearby competition.",
} as const;

export const aegisGridDemo = {
  scenario: "SYNTHETIC SWARM / SCENARIO 04",
  priority: "01",
  priorityCluster: "C-03",
  priorityRisk: "High",
  groupedThreats: "5",
  clusters: [
    { id: "C-01", risk: "Low", points: "4 points" },
    { id: "C-02", risk: "Medium", points: "3 points" },
    { id: "C-03", risk: "High", points: "5 points" },
  ],
  situationNote:
    "Cluster C-03 has the shortest approach path and remains the first review priority.",
  afterAction:
    "Nearby points are grouped first, then ordered by risk for review.",
} as const;

export const stockMarketDemo = {
  session: "DEMO MARKET SESSION",
  selectedSymbol: "MARKET SAMPLE",
  lastPrice: "$184.20",
  referenceLevel: "$182.00",
  status: "Above reference",
  watchlist: [
    { symbol: "ALPHA", value: "$184.20" },
    { symbol: "NORTH", value: "$96.40" },
    { symbol: "FIELD", value: "$52.85" },
  ],
  services: [
    "MARKET DATA",
    "ANALYSIS SERVICE",
    "USER SERVICE",
    "MONITOR VIEW",
  ],
} as const;

export const signLanguageDemo = {
  input: "STATIC HAND SIGN",
  stages: [
    "ORIGINAL INPUT",
    "ISOLATED REGION",
    "PROCESSED MASK",
    "FEATURE RESPONSE",
  ],
  prediction: "L",
  context: "STATIC LETTER SAMPLE",
  classContext: "24 STATIC LETTER CLASSES",
} as const;
