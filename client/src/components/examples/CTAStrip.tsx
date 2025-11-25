import CTAStrip from "../CTAStrip";

export default function CTAStripExample() {
  return <CTAStrip onNavigate={(section) => console.log(`Navigate to: ${section}`)} />;
}
