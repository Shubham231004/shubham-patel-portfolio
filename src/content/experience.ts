export type ExperienceMetric = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  company: string;
  role?: string;
  dates?: string;
  status?: string;
  copy: string;
  metrics?: readonly ExperienceMetric[];
  progression?: readonly string[];
  selectedFacts?: readonly string[];
};

export const experienceSection = {
  label: "02 / EXPERIENCE",
  heading: "Where I’ve worked",
  supportingText:
    "Three very different kinds of work. Each one taught me something I still use today.",
} as const;

export const experience = [
  {
    company: "TMX Group",
    role: "IT SUPPORT INTERN",
    dates: "SEP 2025 — DEC 2025",
    status: "RETURNING FALL 2026",
    copy:
      "I supported employees through the Tech Bar and directly on office floors. The work covered devices, account access, applications, network issues and the occasional problem that refused to make sense at first.",
    metrics: [
      { value: "50–60", label: "issues each week" },
      { value: "150+", label: "devices prepared" },
      { value: "300+", label: "asset records maintained" },
    ],
  },
  {
    company: "Digipple Digital Solutions",
    status: "Four roles. One steady move toward more technical work.",
    copy:
      "I started with website features and bug fixes. Later roles took me through data pipelines, Django backends, automation and applied machine learning.",
    progression: [
      "2023 — Software Developer Intern",
      "2024 — Data Engineer Intern",
      "2024–2025 — Junior Software Developer",
      "2025 — AI Developer Intern",
    ],
    selectedFacts: [
      "Built four TensorFlow/scikit-learn models using 5,000+ daily records.",
      "Created a defect-detection model that reached 91% accuracy.",
      "Built a BERT pipeline for more than 800 weekly reviews.",
      "Integrated Stripe and Twilio into Django applications.",
      "Maintained Selenium automation across eight web modules.",
    ],
  },
  {
    company: "Reliance Home Comfort",
    role: "CUSTOMER SERVICE REPRESENTATIVE",
    dates: "JAN 2023 — MAY 2025",
    status:
      "The role that taught me how to explain problems without making them sound more complicated.",
    copy:
      "I handled more than 50 customer conversations each day across billing, appointments, account changes and service issues. I also updated customer records and passed unresolved cases to the right internal teams.",
  },
] as const satisfies readonly ExperienceEntry[];
