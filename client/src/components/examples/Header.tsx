import Header from "../Header";

export default function HeaderExample() {
  return (
    <div className="h-screen">
      <Header onNavigate={(section) => console.log(`Navigate to: ${section}`)} />
      <div className="pt-32 px-8">
        <p className="text-muted-foreground">Scroll down to see the header blur effect</p>
        <div className="h-[200vh]"></div>
      </div>
    </div>
  );
}
