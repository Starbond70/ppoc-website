import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import foot from "./assets/img.jpeg";
import { ArrowUpIcon } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    <footer className="text-white/70 flex justify-center w-full bg-black">
    <img src={foot} alt="Logo" className="w-50 h-24 mb-6 bottom-0" />
    <img src={foot} alt="Logo" className="w-50 h-24 mb-6 bottom-0" />
    <img src={foot} alt="Logo" className="w-50 h-24 mb-6 bottom-0" />
    <img src={foot} alt="Logo" className="w-50 h-24 mb-6 bottom-0" />
  </footer>
  <button className="fixed bottom-4 right-4 z-50 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <ArrowUpIcon className="w-6 h-6" />
  </button>
  </QueryClientProvider>
);

export default App;
