import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import CTAStrip from "@/components/CTAStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <SocialProof />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <CTAStrip onNavigate={scrollToSection} />
      <Contact />
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
}
