import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Server, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "Bespoke designs tailored to your brand, optimized for conversion and mobile.",
  },
  {
    icon: Code,
    title: "Development & Launch",
    description: "Clean, responsive builds with fast load times and modern best practices.",
  },
  {
    icon: Server,
    title: "Hosting & Care Plans",
    description: "Managed hosting, backups, and updates so you never worry about downtime.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Refresh",
    description: "Need a revamp? I optimize existing sites for design, speed, and UX.",
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
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get online and stay online — in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <CardContent className="p-6 space-y-4">
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
