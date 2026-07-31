export const selectedWork = {
  label: "01 / SELECTED WORK",
  heading: "Work I’m proud of",
  supportingText:
    "A few projects that taught me the most—and made me restart more than once.",
} as const;

export const otherWork = {
  heading: "A few more things I’ve worked on",
  items: [
    {
      name: "Loan Approval Prediction",
      description:
        "Compared and served classification models with MLflow and FastAPI.",
      technologies: "PYTHON · SCIKIT-LEARN · MLFLOW · FASTAPI",
    },
    {
      name: "AWS Streaming ETL Pipeline",
      description:
        "Built a streaming data flow with Kinesis, Lambda, Glue, S3 and Athena.",
      technologies: "AWS · KINESIS · LAMBDA · GLUE · ATHENA",
    },
    {
      name: "Aircraft–Ground Control System",
      description:
        "Built and tested a C++ client-server system around safety states, telemetry and commands.",
      technologies: "C++ · CLIENT/SERVER · TESTING · SAFETY STATES",
    },
  ],
} as const;

export const about = {
  label: "03 / ABOUT",
  heading: "A little more about me",
  paragraphs: [
    "I moved from Ahmedabad to Canada in 2022 to study Computer Science. Since then, I have worked in customer service, software development, AI and enterprise IT.",
    "It is not the neatest career path on paper, but it has been a useful one. I have learned how to write code, explain problems clearly and stay calm when something breaks five minutes before it is needed.",
  ],
  closing:
    "I enjoy work where I can understand the problem, build something useful and see how people actually use it.",
  labels: [
    { label: "FROM", value: "AHMEDABAD" },
    { label: "BASED", value: "WATERLOO" },
    { label: "DEGREE", value: "COMPUTER SCIENCE" },
    { label: "GRADUATING", value: "AUGUST 2026" },
  ],
} as const;

export const capabilities = {
  heading: "What I work with",
  supportingText:
    "The tools I have spent the most time using. No giant wall of logos required.",
  groups: [
    {
      name: "Software",
      items: [
        "Python",
        "TypeScript",
        "React",
        "FastAPI",
        "Django",
        "Flask",
        "Java",
        "C#",
      ],
    },
    {
      name: "AI and data",
      items: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "OpenCV",
        "Pandas",
        "SQL",
        "Power BI",
        "Tableau",
      ],
    },
    {
      name: "Cloud and development",
      items: [
        "AWS",
        "Azure",
        "Docker",
        "GitHub Actions",
        "PostgreSQL",
        "MongoDB",
        "Linux",
        "CI/CD",
      ],
    },
    {
      name: "Enterprise IT",
      items: [
        "Active Directory",
        "Microsoft Entra ID",
        "ServiceNow",
        "Ivanti",
        "Windows",
        "PowerShell",
        "Device deployment",
        "Networking support",
      ],
    },
  ],
} as const;
