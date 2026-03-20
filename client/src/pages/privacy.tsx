import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function navigateHome(section: string) {
  window.location.href = section === "hero" ? "/" : `/#${section}`;
}

export default function Privacy() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateHome} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </div>

          <Section title="Overview">
            <p>
              Amped Web Studios ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard information you provide when you contact us through our website.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>When you submit our contact form, we collect:</p>
            <ul>
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Your company or website name (if provided)</li>
              <li>Your project budget range</li>
              <li>Details about your project or inquiry</li>
            </ul>
            <p>We do not collect any payment information, and we do not use cookies or tracking scripts beyond what is necessary to operate the website.</p>
          </Section>

          <Section title="How We Use Your Information">
            <p>The information you submit is used solely to:</p>
            <ul>
              <li>Respond to your inquiry</li>
              <li>Discuss and scope the products or services you are interested in</li>
              <li>Communicate with you throughout the project engagement</li>
            </ul>
            <p>We will never use your information for unrelated marketing or unsolicited outreach.</p>
          </Section>

          <Section title="We Do Not Sell or Share Your Data">
            <p>
              We do not sell, rent, trade, or otherwise share your personal information with any third parties —
              ever. Your information stays between you and Amped Web Studios, period.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your contact information only for as long as necessary to fulfill the purpose for which
              it was submitted — to communicate with you about your inquiry or project. You may request deletion
              of your information at any time by contacting us directly.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy or wish to request deletion of your information,
              please reach out through our{" "}
              <a href="/#contact" className="text-primary hover:underline">contact form</a>.
            </p>
          </Section>
        </div>
      </main>
      <Footer onScrollToTop={scrollToTop} onNavigate={navigateHome} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
