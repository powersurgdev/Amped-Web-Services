import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function navigateHome(section: string) {
  window.location.href = section === "hero" ? "/" : `/#${section}`;
}

export default function Terms() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </div>

          <Section title="Agreement to Terms">
            <p>
              By accessing our website or engaging Amped Web Studios for services, you agree to be bound by these
              Terms & Conditions. If you do not agree, please do not use our website or services.
            </p>
          </Section>

          <Section title="Services">
            <p>
              Amped Web Studios provides custom web design, web development, and related digital services. The
              specific scope, deliverables, timeline, and pricing for each engagement are defined in a separate
              project agreement or proposal provided to the client prior to work beginning.
            </p>
          </Section>

          <Section title="Client Responsibilities">
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information necessary to complete the project</li>
              <li>Reviewing and approving deliverables in a timely manner</li>
              <li>Ensuring they have the rights to any content, images, or materials they provide to us</li>
              <li>Fulfilling payment obligations as outlined in the project agreement</li>
            </ul>
          </Section>

          <Section title="Payment">
            <p>
              Payment terms are outlined in the individual project proposal. We reserve the right to pause or
              discontinue work on a project if payment obligations are not met. Any deposits paid are
              non-refundable unless otherwise specified in writing.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              Upon receipt of full payment, the client owns all custom design and code created specifically for
              their project. Amped Web Studios retains the right to display completed work in our portfolio
              unless the client requests otherwise in writing.
            </p>
            <p>
              Third-party assets (stock images, fonts, plugins, or frameworks) are subject to their respective
              licenses and are not transferred to the client as owned assets.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              Amped Web Studios shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our services or website. Our total liability in any matter related to
              services provided shall not exceed the total fees paid by the client for that specific project.
            </p>
          </Section>

          <Section title="Website Use">
            <p>
              You may not use our website for any unlawful purpose or in any way that could harm, disable, or
              impair our services or interfere with any other party's use of our website.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              We reserve the right to update these Terms & Conditions at any time. Changes will be reflected on
              this page with an updated date. Continued use of our website after changes constitutes acceptance
              of the updated terms.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions about these Terms & Conditions, please reach out through our{" "}
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
