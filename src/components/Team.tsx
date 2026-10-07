import { motion } from 'framer-motion';
import { User, Code, BrainCircuit, LineChart, Bot } from 'lucide-react';

const humans = [
  {
    name: "Suraj Narayan Gupta",
    role: "Founder & CEO",
    icon: User,
    description: "BCA final year at IGNOU. Started Sparkwaves to bring real software to manufacturers and schools at prices that actually make sense for Indian businesses.",
    color: "from-brand-500 to-cyan-400"
  },
  {
    name: "Nitesh Chauhan",
    role: "Co-Founder & Tech Lead",
    icon: Code,
    description: "Builds the core — from ERP systems to SaaS platforms. Handles architecture, data science, and making sure nothing breaks under pressure.",
    color: "from-violet-500 to-indigo-400"
  },
  {
    name: "Amit Chamoli",
    role: "Senior Developer",
    icon: BrainCircuit,
    description: "AI/ML and full-stack development. Powers the automation workflows, intelligent dashboards, and integrations clients depend on daily.",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Rajneesh",
    role: "Head of Marketing & Growth",
    icon: LineChart,
    description: "Drives client acquisition across GeM, IndiaMart, and digital channels. Connects Sparkwaves' work to the manufacturing and government buyers who need it most.",
    color: "from-orange-400 to-amber-500"
  }
];

const agentDepartments = [
  {
    dept: "Core",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    agents: ["Michael (GOD Agent)", "QA Agent", "Guardrail Agent"],
    desc: "Oversees all operations, quality control, and safety across every department."
  },
  {
    dept: "Sales",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    agents: ["Sales Head", "Lead Gen Agent", "Lead Scorer", "Outreach Head", "Email Drafter", "Follow-up Agent", "Meeting Head", "Calendar Agent", "Proposal Head", "Proposal Writer"],
    desc: "End-to-end sales pipeline from lead generation to signed proposals — fully automated."
  },
  {
    dept: "Marketing",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    agents: ["Marketing Head", "Social Media Agent", "Brand Agent"],
    desc: "Content, brand voice, and social presence managed round the clock."
  },
  {
    dept: "Finance",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    agents: ["Finance Head", "Invoice Agent"],
    desc: "Invoicing, payment tracking, and financial reporting — zero manual effort."
  },
  {
    dept: "Legal",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    agents: ["Legal Head", "Contract Agent"],
    desc: "Contract drafting, review, and compliance checks handled end-to-end."
  },
  {
    dept: "Support",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    agents: ["Support Head", "Support Agent"],
    desc: "Client queries and issue resolution — fast response, any time of day."
  },
  {
    dept: "Research",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    agents: ["Research Head", "Intel Agent"],
    desc: "Market intelligence, competitor analysis, and opportunity scouting."
  },
  {
    dept: "Tech",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    agents: ["Tech Head", "Dev Support Agent"],
    desc: "Internal tooling, bug triage, and developer support."
  },
  {
    dept: "Content",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    agents: ["Content Head", "Blog Agent", "Course Agent", "Case Study Agent"],
    desc: "Blogs, courses, and case studies published consistently without manual overhead."
  },
  {
    dept: "Records",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    agents: ["Records Head", "Archive Agent", "Search Agent"],
    desc: "Document management, archiving, and internal knowledge retrieval."
  },
  {
    dept: "HR & Ops",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    agents: ["HR Head", "Performance Agent", "Compliance Agent", "Procurement Agent"],
    desc: "Hiring support, performance tracking, compliance monitoring, and vendor management."
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase mb-3">
            The team
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            4 humans. 37 AI agents.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
              One company.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Every department — sales, legal, finance, content, support — runs on purpose-built AI agents supervised by our human team. The result: enterprise-level capacity at a fraction of the cost, with full human accountability.
          </p>
        </motion.div>

        {/* ── Human team ── */}
        <div className="mb-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Human team</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {humans.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-slate-900 border border-slate-800 p-7 rounded-2xl hover:border-slate-600 transition-colors duration-200"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${member.color} rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition duration-400`} />
                <div className="relative z-10 flex flex-col">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 mb-5 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-8 h-8 text-slate-300" strokeWidth={1.6} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-0.5 leading-snug">{member.name}</h4>
                  <p className={`text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r ${member.color} mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── AI Agents ── */}
        <div className="border-t border-slate-800/50 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">AI workforce</p>
              <h3 className="text-3xl font-black text-white tracking-tight">37 AI agents across 11 departments</h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-xl shrink-0">
              <Bot className="w-4 h-4 text-brand-400" />
              <span className="text-brand-400 text-sm font-bold">Always on. Always supervised.</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {agentDepartments.map((dept, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 bg-slate-900 border border-slate-800 hover:${dept.border} rounded-2xl transition-colors duration-200 group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 ${dept.bg} rounded-lg flex items-center justify-center`}>
                    <Bot className={`w-4 h-4 ${dept.color}`} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${dept.color}`}>{dept.dept}</span>
                    <span className="text-xs text-slate-600 ml-2">· {dept.agents.length} agent{dept.agents.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{dept.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {dept.agents.map((agent, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                    >
                      {agent}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-sm text-slate-600"
        >
          All AI agents are supervised by our human team and operate from our office in Mukandpur, Delhi.
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
