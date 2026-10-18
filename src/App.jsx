import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center p-6 bg-background"><div className="max-w-md w-full text-center"><h1 className="text-7xl font-light text-muted-foreground">404</h1><h2 className="text-2xl font-medium text-foreground mt-4">Page Not Found</h2></div></div>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App