import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/0 pointer-events-none" />
      <nav className="relative mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <motion.a
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          href="#"
          className="flex items-center gap-3"
        >
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_30px_#6d28d9aa]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">TeleBuddy</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-slate-300 hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="hidden sm:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-sm font-medium backdrop-blur-md border border-white/10 transition-all"
          >
            Sign in
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_#7c3aed]"
          >
            Get started
          </a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}
