import { motion } from "framer-motion";

const steps = [
  {
    k: "01",
    t: "Pick your use case",
    d: "Inbound support, outbound outreach, bookings — start with a template.",
  },
  {
    k: "02",
    t: "Connect your tools",
    d: "Hook up your CRM, calendar, or help desk in a click.",
  },
  {
    k: "03",
    t: "Go live",
    d: "Publish a phone number or embed on your site. Start taking real calls.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="text-sm font-mono text-slate-300">{s.k}</div>
              <h4 className="mt-3 text-xl font-semibold text-white">{s.t}</h4>
              <p className="mt-2 text-slate-300 text-sm">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
