import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/15 via-fuchsia-500/15 to-amber-400/15 p-10 backdrop-blur-xl overflow-hidden">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Talk to an AI voice agent in your browser
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-slate-300"
          >
            Experience latency, handoffs, and memory first-hand — no signup required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-base font-semibold shadow-[0_15px_45px_-10px_#a78bfa]"
            >
              Launch web demo
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-base font-medium backdrop-blur-md border border-white/10 transition-all"
            >
              Contact sales
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
