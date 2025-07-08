import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Appointment from "@/pages/appointment";
import PatientInfo from "@/pages/patient-info";
import Contact from "@/pages/contact";
import Tips from "@/pages/tips";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/om-oss" component={About} />
      <Route path="/tjenester" component={Services} />
      <Route path="/bestill-time" component={Appointment} />
      <Route path="/pasientinformasjon" component={PatientInfo} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/tips" component={Tips} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
