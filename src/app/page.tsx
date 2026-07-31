import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/hero/hero";
import { ZonalyzeSection } from "@/components/projects/zonalyze-section";
import {
  AegisGridSection,
  SignLanguageSection,
  StockMarketSection,
} from "@/components/projects/remaining-projects";
import {
  AboutSection,
  CapabilitiesSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  OtherWorkSection,
} from "@/components/home/remaining-sections";
import { profile } from "@/content/profile";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waterloo",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: [
    "Software development",
    "Artificial intelligence",
    "Data",
    "Enterprise IT",
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(personStructuredData)}
      </script>
      <SiteShell>
        <Hero />
        <ZonalyzeSection />
        <AegisGridSection />
        <StockMarketSection />
        <SignLanguageSection />
        <OtherWorkSection />
        <ExperienceSection />
        <AboutSection />
        <CapabilitiesSection />
        <EducationSection />
        <ContactSection />
      </SiteShell>
    </>
  );
}
