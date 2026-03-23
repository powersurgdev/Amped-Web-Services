import Hero from "../Hero";

export default function HeroExample() {
  return <Hero onNavigate={(section) => console.log(`Navigate to: ${section}`)} />;
}
