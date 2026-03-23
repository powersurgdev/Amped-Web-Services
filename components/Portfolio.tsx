'use client';
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import grandOaksImg from "@assets/generated_images/grandoaks_portfolio.png";
import vanguardImg from "@assets/generated_images/vanguard_gutters_portfolio.png";
import vergaImg from "@assets/generated_images/verga_electric_portfolio.png";

const portfolioItems = [
  {
    image: grandOaksImg.src,
    title: "Grand Oaks Tree Service",
    description: "Professional tree service website built to drive local calls and service requests",
    tag: "Tree Service",
    url: "https://grandoakspropertymaintenance.com/",
  },
  {
    image: vanguardImg.src,
    title: "Vanguard Gutters",
    description: "Clean, conversion-focused site for a gutter installation and repair company",
    tag: "Home Services",
    url: "https://vanguardgutters.com/",
  },
  {
    image: vergaImg.src,
    title: "Verga Electric",
    description: "Professional electrician website designed to generate calls and service requests",
    tag: "Electrical Services",
    url: "https://www.vergaelectric.com/",
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <>
      <section id="portfolio" className="py-20 sm:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-portfolio-title">
              Recent Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A snapshot of projects designed to look great and convert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                  onClick={() => setSelectedItem(index)}
                  data-testid={`card-portfolio-${index}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-3 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                      <Badge variant="secondary" className="flex-shrink-0 text-xs">
                        {item.tag}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm flex-1">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] p-0">
          <DialogTitle className="sr-only">
            {selectedItem !== null ? portfolioItems[selectedItem].title : "Portfolio item"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedItem !== null ? portfolioItems[selectedItem].description : "Website details"}
          </DialogDescription>
          {selectedItem !== null && (
            <div className="space-y-6 p-6">
              <div className="rounded-md overflow-hidden bg-muted">
                <img
                  src={portfolioItems[selectedItem].image}
                  alt={portfolioItems[selectedItem].title}
                  loading="lazy"
                  className="w-full object-contain max-h-[60vh]"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold">{portfolioItems[selectedItem].title}</h3>
                  <Badge variant="secondary">{portfolioItems[selectedItem].tag}</Badge>
                </div>
                <p className="text-muted-foreground">
                  {portfolioItems[selectedItem].description}
                </p>
                <Button
                  asChild
                  className="w-full gap-2"
                  data-testid={`button-visit-site-${selectedItem}`}
                >
                  <a
                    href={portfolioItems[selectedItem].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
