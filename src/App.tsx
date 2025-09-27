import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Landing from "./pages/Landing";
import CreateAct from "./pages/CreateAct";
import Nominate from "./pages/Nominate";
import RipplePage from "./pages/RipplePage";
import Profile from "./pages/Profile";
import Gamification from "./pages/Gamification";
import Splashes from "./pages/Splashes";
import MyRipples from "./pages/MyRipples";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="itforward-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/create" element={<CreateAct />} />
            <Route path="/nominate" element={<Nominate />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ocean" element={<Gamification />} />
            <Route path="/splashes" element={<Splashes />} />
            <Route path="/my-ripples" element={<MyRipples />} />
            <Route path="/ripple/:slug" element={<RipplePage />} />
            <Route path="/ripples" element={<RipplePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
