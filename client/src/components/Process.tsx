import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Discover",
    description: "We define your goals, content, and what success looks like.",
  },
  {
    number: "2",
    icon: Layers,
    title: "Design & Build",
    description: "You review polished design concepts while I handle the build and hosting setup.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Launch & Support",
    description: "We go live, then I stick around with care plans and optimizations if you need them.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-process-title">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-step-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground mt-12"
        >
          Most projects move from first call to launch in just a few weeks.
        </motion.p>
      </div>
    </section>
  );
}
