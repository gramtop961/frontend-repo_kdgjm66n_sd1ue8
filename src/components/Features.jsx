import { motion } from "framer-motion";
import { PhoneCall, Bot, CalendarCheck2, Sparkles } from "lucide-react";

const items = [
  {
    icon: PhoneCall,
    title: "Real calls, real results",
    desc: "Natural conversations that book, qualify, and support without hold music.",
  },
  {
    icon: Bot,
    title: "Human-like AI",
    desc: "Understands context, responds instantly, and adapts to your brand's tone.",
  },
  {
    icon: CalendarCheck2,
    title: "Works with your tools",
    desc: "Connect calendars, CRMs, and ticketing — zero heavy setup.",
  },
  {
    icon: Sparkles,
    title: "Deploy in minutes",
    desc: "Launch a voice agent faster than writing a job description.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_30px_#7c3aed55]">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
