import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Rocket, TrendingUp, FileText, Search, PenTool, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";

interface PricingProps {
  onNavigate: (section: string) => void;
}

const pricingPlans = [
  {
    name: "Starter Website Plan",
    price: "$50",
    period: "/mo",
    tag: "Best for getting online",
    description: "Perfect for small businesses that need a clean, professional website and ongoing support.",
    features: [
      "Up to 5 professionally designed pages",
      "Hosting & SSL security included",
      "Mobile-responsive design",
      "Contact form setup",
      "Basic SEO setup",
      "Google Business listing setup",
      "Basic visitor analytics",
      "Ongoing website updates and support",
    ],
    cta: "Get Started",
    popular: true,
    icon: Rocket,
  },
  {
    name: "Growth Website Plan",
    price: "$100",
    period: "/mo",
    tag: "For businesses ready to grow",
    description: "For businesses that want more traffic, more leads, and real data on what's working.",
    features: [
      "Everything in the Starter Website Plan",
      "Advanced SEO optimization (ongoing improvements to rank higher on Google)",
      "Google Analytics 4 (see how many people visit and where they come from)",
      "Microsoft Clarity (see how visitors interact so we can improve conversions)",
      "Google Search Console (track search performance and fix visibility issues)",
      "Google Business Profile optimization (helps you get more local calls)",
      "Monthly performance review and improvements",
      "Priority support & faster updates",
    ],
    cta: "Scale My Website",
    popular: false,
    icon: TrendingUp,
  },
];

const addOnServices = [
  {
    name: "Additional Pages",
    price: "$25",
    period: "per page",
    description: "Add extra pages with full design, content, and SEO optimization.",
    icon: FileText,
  },
  {
    name: "SEO Boost Package",
    price: "$49",
    period: "/mo",
    description: "Monthly keyword research, content updates, and ranking improvements.",
    icon: Search,
  },
  {
    name: "Blog Posts",
    price: "$19",
    period: "/post",
    description: "SEO-optimized blog posts to keep your site fresh and improve search visibility.",
    icon: PenTool,
  },
  {
    name: "Logo / Brand Refresh",
    price: "$99",
    period: "one-time",
    description: "Professional logo refresh with multiple concepts and final files for web and print.",
    icon: ImagePlus,
  },
];

export default function Pricing({ onNavigate }: PricingProps) {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-pricing-title">
            Website Management & SEO Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent monthly pricing. No long-term contracts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full hover-elevate transition-all duration-300 ${
                  plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : ""
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <plan.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <span className="text-sm text-primary font-medium">{plan.tag}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => onNavigate("contact")}
                      data-testid={`button-pricing-cta-${index}`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-On Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold">Add-On Services</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Customize your plan with extra growth tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOnServices.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Card
                  className="h-full hover-elevate transition-all duration-300"
                  data-testid={`card-addon-${index}`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <addon.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{addon.name}</h4>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold">{addon.price}</span>
                        <span className="text-sm text-muted-foreground">{addon.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {addon.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Need something more custom?{" "}
          <button 
            onClick={() => onNavigate("contact")} 
            className="text-primary hover:underline"
            data-testid="link-custom-quote"
          >
            Get in touch
          </button>{" "}
          for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
}
