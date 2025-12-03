import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import restaurantImg from "@assets/generated_images/restaurant_website_portfolio_item.png";
import ecommerceImg from "@assets/generated_images/e-commerce_website_portfolio_item.png";
import corporateImg from "@assets/generated_images/corporate_landing_page_portfolio.png";
import realEstateImg from "@assets/generated_images/real_estate_website_portfolio.png";
import fitnessImg from "@assets/generated_images/fitness_website_portfolio_item.png";
import consultingImg from "@assets/generated_images/consulting_website_portfolio_item.png";

const portfolioItems = [
  {
    image: restaurantImg,
    title: "Bella Vista Restaurant",
    description: "Modern restaurant website with online reservations",
    tag: "Local Business Website",
  },
  {
    image: ecommerceImg,
    title: "Urban Threads",
    description: "E-commerce platform with integrated shopping cart",
    tag: "E-commerce",
  },
  {
    image: corporateImg,
    title: "TechCorp Solutions",
    description: "Corporate landing page with lead generation",
    tag: "Landing Page",
  },
  {
    image: realEstateImg,
    title: "Dream Homes Realty",
    description: "Real estate listings with interactive map",
    tag: "Real Estate",
  },
  {
    image: fitnessImg,
    title: "Peak Fitness Gym",
    description: "Fitness center with class scheduling",
    tag: "Local Business Website",
  },
  {
    image: consultingImg,
    title: "Clarity Consulting",
    description: "Professional services firm showcase",
    tag: "Landing Page",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl"
                  onClick={() => setSelectedItem(index)}
                  data-testid={`card-portfolio-${index}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-sm font-medium text-primary">View details</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge variant="secondary" className="flex-shrink-0 text-xs">
                        {item.tag}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedItem !== null && (
            <div className="space-y-6 p-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={portfolioItems[selectedItem].image}
                  alt={portfolioItems[selectedItem].title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold">{portfolioItems[selectedItem].title}</h3>
                  <Badge variant="secondary">{portfolioItems[selectedItem].tag}</Badge>
                </div>
                <p className="text-lg text-muted-foreground">
                  {portfolioItems[selectedItem].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
