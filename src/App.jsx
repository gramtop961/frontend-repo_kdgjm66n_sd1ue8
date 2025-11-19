import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_70%,rgba(249,115,22,0.06),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />

      <footer id="faq" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-400">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <span className="text-xs font-bold">TB</span>
            </div>
            <span className="text-sm">© {new Date().getFullYear()} TeleBuddy</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
