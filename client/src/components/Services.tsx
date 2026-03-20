import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Server, TrendingUp, Search, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "No templates, no shortcuts. Every site is designed from scratch around your brand, your audience, and your goals.",
  },
  {
    icon: Code,
    title: "Development & Launch",
    description: "Hand-coded, fast-loading, and built to perform. We handle everything from domain setup to go-live.",
  },
  {
    icon: Server,
    title: "Hosting & Care Plans",
    description: "We manage your hosting, updates, backups, and security — so your site is always live, fast, and protected.",
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    description: "We optimize your site to rank in local search results, so nearby customers find you before they find your competition.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Refresh",
    description: "Got a site that's falling behind? We redesign, rebuild, and optimize for speed, conversions, and modern UX.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    description: "Review management, local SEO pages, and targeted content — we help you grow well beyond just a website.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-services-title">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first impression to long-term growth — we handle the web so you can run the business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover-elevate transition-all duration-300 hover:shadow-lg"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
