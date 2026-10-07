import { motion } from 'framer-motion';
import { Factory, GraduationCap, Building2, Globe, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Software that speaks your shopfloor language — from raw material to dispatch, digitised.",
    color: "from-orange-500 to-amber-400",
    bgLight: "bg-orange-500/10",
    textLight: "text-orange-400",
    features: [
      "ERP: inventory, production & billing",
      "Barcode / QR tracking system",
      "Dealer & distributor order portal",
      "Machine monitoring dashboard",
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools and coaching institutes — admissions, fees, exams, and parent communication in one place.",
    color: "from-violet-500 to-indigo-400",
    bgLight: "bg-violet-500/10",
    textLight: "text-violet-400",
    features: [
      "School website + admission portal",
      "Online fee collection",
      "LMS & online exam platform",
      "Parent app & notifications",
    ]
  },
  {
    icon: Building2,
    title: "Government & GeM",
    description: "GeM seller registration, tender support, and IT solutions that meet government compliance requirements.",
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-500/10",
    textLight: "text-blue-400",
    features: [
      "GeM seller account setup",
      "Tender documentation support",
      "Government website & portals",
      "IT AMC & hardware supply",
    ]
  },
  {
    icon: Globe,
    title: "Digital Growth",
    description: "Google ranking, social media presence, and lead generation — so clients find you, not your competitors.",
    color: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-500/10",
    textLight: "text-emerald-400",
    features: [
      "Google Business Profile & local SEO",
      "Website design & development",
      "Social media management",
      "Performance marketing & ads",
    ]
  }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header — left aligned, not centred generic */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What we build
          </h2>
          <p className="text-lg text-slate-400 max-w-xl">
            Four industries. One team. Prices 30% below the Delhi market — every time.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-7 transition-colors duration-200 overflow-hidden"
              >
                {/* Subtle hover glow — one effect, not stacked animations */}
                <div className={`absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-400`}></div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.bgLight} flex items-center justify-center mb-5 border border-white/5`}>
                  <Icon className={`w-6 h-6 ${service.textLight}`} strokeWidth={1.8} />
                </div>

                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h4>

                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.textLight}`} strokeWidth={2} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
