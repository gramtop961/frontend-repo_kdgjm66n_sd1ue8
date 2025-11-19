import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.25),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              >
                Your AI voice agent for every call
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 text-lg sm:text-xl text-slate-300 max-w-xl"
              >
                Deploy an autonomous, human-like voice that books appointments, qualifies leads, and supports customers — 24/7.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 px-5 py-3 text-base font-semibold text-white shadow-[0_10px_40px_-10px_#7c3aed]"
                >
                  Try the demo
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-base font-medium backdrop-blur-md border border-white/10 transition-all"
                >
                  Pricing
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-8 flex items-center gap-6 text-slate-300"
              >
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur" />
                  ))}
                </div>
                <span className="text-sm">Trusted by teams shipping with AI voice</span>
              </motion.div>
            </div>
            <div className="relative h-[420px] sm:h-[560px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 pointer-events-none" />
              {/* Spline canvas is already full-screen in the section background, but we keep a glass card right side for visual parity */}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
