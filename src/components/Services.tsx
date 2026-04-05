import { motion } from 'framer-motion';
import { Cloud, Smartphone, Database, Zap, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scale effortlessly with secure, robust infrastructure tailored for high-availability enterprise applications.",
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-500/10",
    textLight: "text-blue-400",
    features: [
      "Custom Hosted Architecture",
      "IaaS / PaaS Deployments",
      "Premium Web Hosting",
    ]
  },
  {
    icon: Smartphone,
    title: "Web & App Development",
    description: "Deliver stunning, high-performance web and mobile experiences engineered for maximum user engagement.",
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-500/10",
    textLight: "text-purple-400",
    features: [
      "Full-Stack Web Apps",
      "Native iOS & Android",
      "AI-Powered Experiences",
    ]
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Transform raw organizational data into actionable, predictive intelligence to outpace competitors.",
    color: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-500/10",
    textLight: "text-emerald-400",
    features: [
      "Big Data Analysis",
      "Predictive Modeling",
      "Custom Data Pipelines",
    ]
  },
  {
    icon: Zap,
    title: "Automation & Growth",
    description: "Automate repetitive tasks and supercharge your acquisition channels for exponential revenue growth.",
    color: "from-orange-400 to-red-500",
    bgLight: "bg-orange-500/10",
    textLight: "text-orange-400",
    features: [
      "Workflow Automation",
      "Performance Marketing",
      "Lead Generation Systems",
    ]
  }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3">B2B Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Elite IT Consulting & Delivery

          </h3>
          <p className="text-lg text-slate-400">
            We architect bespoke technology solutions precisely engineered to solve complex operational challenges.
          </p>
        </motion.div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative h-full bg-slate-900 border border-slate-800 hover:border-slate-500 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Icon Header */}
                <div className={`w-14 h-14 rounded-2xl ${service.bgLight} flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/20 transition-colors`}>
                  <Icon className={`w-7 h-7 ${service.textLight}`} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h4>

                <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[60px]">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.textLight}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Line */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent blur-2xl pointer-events-none rounded-bl-[100px]"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
