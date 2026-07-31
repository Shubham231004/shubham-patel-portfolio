export const profile = {
  name: "Shubham Patel",
  location: "Waterloo, Ontario",
  origin: "Ahmedabad, India",
  email: "sspatel231004@gmail.com",
  hero: {
    label: "SHUBHAM PATEL · WATERLOO, ONTARIO",
    headline: {
      intro: "Hi, I’m Shubham.",
      statementLines: [
        "I build software, work with data",
        "and care a little too much about",
        "getting the small details right.",
      ],
    },
    supportingText:
      "I’m finishing my Computer Science degree and returning to TMX Group this fall. My work has taken me through software development, AI, data and enterprise IT.",
    strip: [
      "SOFTWARE DEVELOPMENT",
      "AI & DATA",
      "ENTERPRISE IT",
      "GRADUATING AUGUST 2026",
    ],
  },
  education: {
    degree: "Honours Bachelor of Computer Science",
    institution: "Conestoga College",
    location: "Waterloo",
    status: "in-progress" as const,
    expected: "Expected August 2026",
    areas: [
      "AI and machine learning",
      "Data engineering",
      "Software development",
      "Networking and systems",
    ],
  },
  links: {
    linkedin: "https://www.linkedin.com/in/shubhampatel2310/",
    github: "https://github.com/Shubham231004",
    email: "mailto:sspatel231004@gmail.com",
    resume: "/resume/Shubham-Patel-Resume.pdf",
  },
  metadata: {
    title: "Shubham Patel — Software, AI and Data",
    description:
      "Shubham Patel is finishing his Computer Science degree in Waterloo, Ontario, with experience in software development, AI, data and enterprise IT at TMX Group.",
    socialTitle: "Shubham Patel — Software, AI and Data",
    socialDescription:
      "Selected work, experience and projects across software, AI, data and enterprise technology.",
  },
  contact: {
    sectionLabel: "04 / CONTACT",
    heading: "Got a role, a project or a good question? Say hello.",
    supportingText:
      "Email works best. LinkedIn works too. I am usually not far from either.",
  },
  footer: {
    line: "Built with care. Tested more than once.",
    copyright: "© 2026 Shubham Patel",
    location: "Waterloo, Ontario",
  },
} as const;
