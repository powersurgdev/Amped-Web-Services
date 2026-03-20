import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Core pages
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import PortfolioPage from "@/pages/portfolio";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Services hub + pages
import ServicesHub from "@/pages/services/index";
import WebDesignPage from "@/pages/services/web-design";
import WebDevelopmentPage from "@/pages/services/web-development";
import HostingCarePage from "@/pages/services/hosting-care";
import SeoLocalSearchPage from "@/pages/services/seo-local-search";
import WebsiteRefreshPage from "@/pages/services/website-refresh";
import DigitalMarketingPage from "@/pages/services/digital-marketing";

// Industries hub + pages
import IndustriesHub from "@/pages/industries/index";
import HomeServicesPage from "@/pages/industries/home-services";
import ContractorsPage from "@/pages/industries/contractors";
import RestaurantsPage from "@/pages/industries/restaurants";
import HealthcarePage from "@/pages/industries/healthcare";
import RealEstatePage from "@/pages/industries/real-estate";
import BeautyWellnessPage from "@/pages/industries/beauty-wellness";
import AutoServicesPage from "@/pages/industries/auto-services";
import CreativePortfolioPage from "@/pages/industries/creative-portfolio";
import LegalProfessionalPage from "@/pages/industries/legal-professional";
import FitnessSportsPage from "@/pages/industries/fitness-sports";

function Router() {
  return (
    <Switch>
      {/* Core */}
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />

      {/* Services */}
      <Route path="/services" component={ServicesHub} />
      <Route path="/services/web-design" component={WebDesignPage} />
      <Route path="/services/web-development" component={WebDevelopmentPage} />
      <Route path="/services/hosting-care" component={HostingCarePage} />
      <Route path="/services/seo-local-search" component={SeoLocalSearchPage} />
      <Route path="/services/website-refresh" component={WebsiteRefreshPage} />
      <Route path="/services/digital-marketing" component={DigitalMarketingPage} />

      {/* Industries */}
      <Route path="/industries" component={IndustriesHub} />
      <Route path="/industries/home-services" component={HomeServicesPage} />
      <Route path="/industries/contractors" component={ContractorsPage} />
      <Route path="/industries/restaurants" component={RestaurantsPage} />
      <Route path="/industries/healthcare" component={HealthcarePage} />
      <Route path="/industries/real-estate" component={RealEstatePage} />
      <Route path="/industries/beauty-wellness" component={BeautyWellnessPage} />
      <Route path="/industries/auto-services" component={AutoServicesPage} />
      <Route path="/industries/creative-portfolio" component={CreativePortfolioPage} />
      <Route path="/industries/legal-professional" component={LegalProfessionalPage} />
      <Route path="/industries/fitness-sports" component={FitnessSportsPage} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
