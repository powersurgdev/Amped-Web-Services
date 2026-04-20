import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQBlockProps {
  faq: FAQItem[];
}

export default function BlogFAQBlock({ faq }: BlogFAQBlockProps) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 border-t border-border bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-6">
          Quick answers to the questions we hear most often.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
