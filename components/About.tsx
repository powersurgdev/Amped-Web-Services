'use client';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Responsive, mobile-first builds that load fast on every device",
  "Transparent communication and fast turnarounds — no ghosting, no delays",
  "All-in-one: design, development, SEO, hosting, and growth services",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-about-title">
              About Amped Web Studios
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're Amped Web Studios — a Florida-based web design and digital agency built for small businesses that want to compete online. We design, develop, and manage everything, so you're not juggling multiple vendors or wondering what's happening with your site. One team. One point of contact. Results you can actually measure.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                  data-testid={`list-item-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Card className="w-full max-w-md">
              <CardContent className="p-8 sm:p-12 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-6xl font-bold text-primary-foreground">
                    S
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
