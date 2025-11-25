import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface PricingProps {
  onNavigate: (section: string) => void;
}

const pricingPlans = [
  {
    name: "Starter Website",
    price: "$500",
    period: "one-time",
    description: "Everything you need to get your business online with a professional presence.",
    features: [
      "Custom-designed landing page",
      "Mobile-responsive design",
      "Contact form integration",
      "Social media links",
      "Business information section",
      "Fast-loading, optimized build",
    ],
    cta: "Get Started",
    popular: false,
    icon: Sparkles,
  },
  {
    name: "Monthly Hosting & Care",
    price: "$25",
    period: "/month",
    description: "Keep your website running smoothly with ongoing support and maintenance.",
    features: [
      "Reliable managed hosting",
      "24/7 website support",
      "2 content updates per month",
      "Photo & image updates",
      "Promotion & sales updates",
      "Business info changes",
    ],
    cta: "Add to Your Plan",
    popular: true,
    icon: Clock,
    note: "Available with website purchase",
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No surprises. Just straightforward pricing for quality work.
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
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <plan.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                    </div>
                    <div className="flex items-baseline gap-1 pt-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm pt-1">
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

                  <div className="pt-4 space-y-3">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => onNavigate("contact")}
                      data-testid={`button-pricing-cta-${index}`}
                    >
                      {plan.cta}
                    </Button>
                    {plan.note && (
                      <p className="text-xs text-center text-muted-foreground">
                        {plan.note}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Need something more custom? <button onClick={() => onNavigate("contact")} className="text-primary hover:underline">Get in touch</button> for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
}
