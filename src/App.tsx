import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import foot from "./assets/img.jpeg";
import usePageTracking from "./hooks/usePageTracking";
import { ArrowUpIcon } from "lucide-react";

const queryClient = new QueryClient();

// This component is inside BrowserRouter, so useLocation works here
function AppRoutes() {
  usePageTracking();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>

      <footer className="text-white/70 w-full bg-black py-6">
        <div className="flex items-center gap-4 justify-center">
          <img src={foot} alt="Logo" className="w-32 h-auto mb-2" />
          <img src={foot} alt="Logo" className="w-32 h-auto mb-2" />
        </div>
      </footer>

      <button
        className="fixed bottom-4 right-4 z-50 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </QueryClientProvider>
  );
};

export default App;
