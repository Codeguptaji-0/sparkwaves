import { motion } from 'framer-motion';
import { User, Code, BrainCircuit, LineChart } from 'lucide-react';

const teamData = [
  {
    name: "Suraj Narayan Gupta",
    role: "Founder",
    icon: User,
    description: "Visionary leader driving product strategy and overall business growth.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Nitesh Chauhan",
    role: "Co-Founder",
    icon: Code,
    description: "Expert in Development & Data Science. Architecting scalable tech ecosystems.",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Amit Chamoli",
    role: "Senior Developer",
    icon: BrainCircuit,
    description: "Specialist in AI/ML & Web Development. Engineering intelligent systems.",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Rajneesh",
    role: "Head of Marketing",
    icon: LineChart,
    description: "Marketing & Growth Expert. Connecting our products with the global market.",
    color: "from-orange-400 to-red-500"
  }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-950/40 backdrop-blur-sm border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3">The Minds Behind The Engine</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Meet Our Elite Team
          </h3>
          <p className="text-lg text-slate-400">
            A collective of highly specialized engineers and visionaries dedicated to building the future of digital SaaS architecture.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member, index) => {
            const Icon = member.icon;
            return (
               <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
               >
                 <div className={`absolute -inset-0.5 bg-gradient-to-br ${member.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>
                 
                 <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white opacity-80" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                    <p className={`text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r ${member.color} mb-4`}>
                      {member.role}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                 </div>
               </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
