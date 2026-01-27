import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Payments from "./pages/Payments";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import PaymentTerms from "./pages/PaymentTerms";
import Disclaimer from "./pages/Disclaimer";
import AcceptableUse from "./pages/AcceptableUse";
import DMCA from "./pages/DMCA";
import Accessibility from "./pages/Accessibility";
import ESign from "./pages/ESign";
import ExportCompliance from "./pages/ExportCompliance";
import NotFound from "./pages/NotFound";
import ExecutiveStrategyCall from "./pages/services/ExecutiveStrategyCall";
import ExecutiveStrategyConsultation from "./pages/services/ExecutiveStrategyConsultation";
import StrategySprint from "./pages/services/StrategySprint";
import ExecutiveWorkshop from "./pages/services/ExecutiveWorkshop";
import MarketDiligence from "./pages/services/MarketDiligence";
import TransactionDiligence from "./pages/services/TransactionDiligence";
import CertificationCompliance from "./pages/services/CertificationCompliance";
import ValueCreation from "./pages/services/ValueCreation";
import CapitalMarketsMAAdvisory from "./pages/services/CapitalMarketsMAAdvisory";
import OperationalTurnaroundRestructuring from "./pages/services/OperationalTurnaroundRestructuring";
import BoardLeadershipAdvisory from "./pages/services/BoardLeadershipAdvisory";
import StrategicAdvisoryMarketIntelligence from "./pages/services/StrategicAdvisoryMarketIntelligence";
import MATransactionSupport from "./pages/services/MATransactionSupport";
import CommercialAviationRecovery from "./pages/blog/CommercialAviationRecovery";
import Retainers from "./pages/Retainers";
import DealRadar from "./pages/research/DealRadar";
import QuarterlyOutlook from "./pages/research/QuarterlyOutlook";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/executive-strategy-call" element={<ExecutiveStrategyCall />} />
          <Route path="/services/executive-strategy-consultation" element={<ExecutiveStrategyConsultation />} />
          <Route path="/services/strategy-sprint" element={<StrategySprint />} />
          <Route path="/services/executive-workshop" element={<ExecutiveWorkshop />} />
          <Route path="/services/market-diligence" element={<MarketDiligence />} />
          <Route path="/services/transaction-diligence" element={<TransactionDiligence />} />
          <Route path="/services/certification-compliance" element={<CertificationCompliance />} />
          <Route path="/services/value-creation" element={<ValueCreation />} />
          <Route path="/services/capital-markets-ma-advisory" element={<CapitalMarketsMAAdvisory />} />
          <Route path="/services/operational-turnaround-restructuring" element={<OperationalTurnaroundRestructuring />} />
          <Route path="/services/board-leadership-advisory" element={<BoardLeadershipAdvisory />} />
          <Route path="/services/strategic-advisory-market-intelligence" element={<StrategicAdvisoryMarketIntelligence />} />
          <Route path="/services/ma-transaction-support" element={<MATransactionSupport />} />
        
        {/* Blog Routes */}
        <Route path="/blog/commercial-aviation-recovery" element={<CommercialAviationRecovery />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/research/deal-radar" element={<DealRadar />} />
          <Route path="/research/quarterly-outlook" element={<QuarterlyOutlook />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/retainers" element={<Retainers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/payment-terms" element={<PaymentTerms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/aup" element={<AcceptableUse />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/e-sign" element={<ESign />} />
          <Route path="/export-compliance" element={<ExportCompliance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
