import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import heroMockup from "@assets/generated_images/hero_section_mockup_graphic.png";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <Badge
              variant="secondary"
              className="text-sm px-4 py-1.5"
              data-testid="badge-services"
            >
              Website Design • Hosting • Care Plans
            </Badge>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                data-testid="text-hero-headline"
              >
                Launch a Website That Actually Works for Your Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                data-testid="text-hero-subheadline"
              >
                Sergios Designs builds fast, modern websites and handles hosting for you—so you can focus on running your business while your site does the selling.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                data-testid="button-start-project"
                className="text-base"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("portfolio")}
                data-testid="button-view-portfolio"
                className="text-base"
              >
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={heroMockup}
                alt="Modern website design mockup"
                className="w-full h-full object-cover"
                data-testid="img-hero-mockup"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
