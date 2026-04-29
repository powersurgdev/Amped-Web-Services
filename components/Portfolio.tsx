'use client';
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { IndustryLabel } from "@/lib/industries";
import { trackEvent } from "@/lib/analytics";
import grandOaksImg from "@assets/generated_images/grandoaks_portfolio.webp";
import vanguardImg from "@assets/generated_images/vanguard_gutters_portfolio.webp";
import vergaImg from "@assets/generated_images/verga_electric_portfolio.webp";
import longsLandManagementImg from "@assets/generated_images/longs-land-management_portfolio.webp";

import stillwellPsychiatryImg from "@assets/generated_images/stillwell-psychiatry_portfolio.webp";
import blackrockPressureWashingImg from "@assets/generated_images/blackrock-pressure-washing_portfolio.webp";
type PortfolioItem = {
  image: StaticImageData;
  title: string;
  description: string;
  tag: IndustryLabel;
  url: string;
  featured?: boolean;
};

const portfolioItems: PortfolioItem[] = [
  {
    image: grandOaksImg,
    title: "Grand Oaks Tree Service",
    description: "Professional tree service website built to drive local calls and service requests",
    tag: "Contractors & Trades",
    url: "https://grandoakspropertymaintenance.com/",
  },
  {
    image: vanguardImg,
    title: "Vanguard Gutters",
    description: "Clean, conversion-focused site for a gutter installation and repair company",
    tag: "Home Services",
    url: "https://vanguardgutters.com/",
    featured: true,
  },
  {
    image: vergaImg,
    title: "Verga Electric",
    description: "Professional electrician website designed to generate calls and service requests",
    tag: "Contractors & Trades",
    url: "https://www.vergaelectric.com/",
    featured: true,
  },
  {
    image: longsLandManagementImg,
    title: "Long's Land Management",
    description: "Bold, high-impact site for a land clearing and site prep contractor built to attract residential and commercial jobs",
    tag: "Contractors & Trades",
    url: "https://longslandmanagement.com",
    featured: true,
  },
  {
    image: stillwellPsychiatryImg,
    title: "Stillwell Psychiatry",
    description: "Calming, trust-focused telehealth psychiatry site designed to convert visitors into new patient consults",
    tag: "Healthcare & Wellness",
    url: "https://stillwellpsychiatry.com",
  },
  {
    image: blackrockPressureWashingImg,
    title: "Blackrock Pressure Washing",
    description: "Bold, conversion-focused site for a Brooksville pressure washing company built to drive local cleaning jobs",
    tag: "Home Services",
    url: "https://blackrock-pressure-washing.vercel.app/",
  },
];

type PortfolioMode = "grid" | "carousel";

export default function Portfolio({ mode = "grid" }: { mode?: PortfolioMode }) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const items = mode === "carousel" ? portfolioItems.filter((i) => i.featured) : portfolioItems;

  const renderCard = (item: PortfolioItem, index: number) => (
    <Card
      className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      onClick={() => setSelectedItem(item)}
      data-testid={`card-portfolio-${index}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
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
  );

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

          {mode === "carousel" ? (
            <>
              <div className="grid grid-cols-1 gap-6 md:hidden">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    {renderCard(item, index)}
                  </motion.div>
                ))}
              </div>
              <div className="hidden md:grid grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    {renderCard(item, index)}
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  {renderCard(item, index)}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] p-0">
          <DialogTitle className="sr-only">
            {selectedItem ? selectedItem.title : "Portfolio item"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedItem ? selectedItem.description : "Website details"}
          </DialogDescription>
          {selectedItem && (
            <div className="space-y-6 p-6">
              <div className="rounded-md overflow-hidden bg-muted relative" style={{ height: '60vh' }}>
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                  <Badge variant="secondary">{selectedItem.tag}</Badge>
                </div>
                <p className="text-muted-foreground">
                  {selectedItem.description}
                </p>
                <Button
                  asChild
                  className="w-full gap-2"
                  data-testid="button-visit-site"
                >
                  <a
                    href={selectedItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('portfolio_visit_site_click', {
                      project: selectedItem.title,
                      industry: selectedItem.tag,
                      url: selectedItem.url,
                    })}
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
