import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-studies/case-study-page";
import { projects } from "@/content/projects";

type CaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    return {};
  }

  const title = `${project.publicName} — Case Study | Shubham Patel`;

  return {
    title,
    description: project.caseStudy.seoDescription,
    alternates: {
      canonical: project.caseStudyHref,
    },
    openGraph: {
      title,
      description: project.caseStudy.seoDescription,
      type: "article",
      url: project.caseStudyHref,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Shubham Patel — Software, AI, Data and Enterprise IT",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.caseStudy.seoDescription,
      images: ["/og.png"],
    },
  };
}

export default async function ProjectCaseStudy({
  params,
}: CaseStudyRouteProps) {
  const { slug } = await params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
