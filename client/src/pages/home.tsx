import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemStatement } from "@/components/landing/problem-statement";
import { FeaturesSection } from "@/components/landing/features-section";
import { SDGSection } from "@/components/landing/sdg-section";
import { DemoSection } from "@/components/landing/demo-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemStatement />
        <FeaturesSection />
        <SDGSection />
        <DemoSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
}
