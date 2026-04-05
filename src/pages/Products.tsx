import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Database as DatabaseIcon, LayoutGrid, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDatabase } from '../context/DatabaseContext';

export default function Products() {
  const { products } = useDatabase();

  // Helper function to map generic product data to beautiful UI icon configurations dynamically
  const getProductStyling = (index: number) => {
    const stylings = [
      { color: "from-blue-500/20 to-cyan-500/20", border: "hover:border-blue-500/50", icon: <DatabaseIcon className="w-8 h-8 text-blue-400" /> },
      { color: "from-emerald-500/20 to-teal-500/20", border: "hover:border-emerald-500/50", icon: <Zap className="w-8 h-8 text-emerald-400" /> },
      { color: "from-purple-500/20 to-fuchsia-500/20", border: "hover:border-purple-500/50", icon: <Shield className="w-8 h-8 text-purple-400" /> },
      { color: "from-brand-500/20 to-emerald-500/20", border: "hover:border-brand-500/50", icon: <LayoutGrid className="w-8 h-8 text-brand-400" /> },
      { color: "from-rose-500/20 to-orange-500/20", border: "hover:border-rose-500/50", icon: <Cpu className="w-8 h-8 text-rose-400" /> },
    ];
    return stylings[index % stylings.length];
  };

  return (
    <>
      <main className="pt-24 min-h-screen bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Software Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
              Powerful, scalable SaaS products designed to accelerate growth, security, and operational efficiency for modern enterprises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => {
              const style = getProductStyling(idx);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className={`relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 ${style.border} transition-all group backdrop-blur-sm p-8`}
                >
                  <div className={`absolute top-0 right-0 p-32 -m-16 rounded-full bg-gradient-to-br ${style.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                      {style.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                    <p className="text-slate-400 mb-6 min-h-[80px]">{product.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Use Cases</span>
                      <div className="flex flex-wrap gap-2">
                        {product.useCases.map((uc, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">{uc}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Key Features</span>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between items-end mb-2">
                         <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Coming Soon</span>
                         <span className="text-sm font-bold text-white">{product.progressPercentage ?? 0}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                           className={`bg-gradient-to-r ${style.color.replace('/20', '').replace('/20', '')} h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]`} 
                           style={{ width: `${product.progressPercentage ?? 0}%`, minWidth: '1rem' }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-6">
                      <div>
                        <span className="text-xs text-slate-500 block mb-1">Pricing Model</span>
                        <span className="text-white font-medium">{product.model}</span>
                      </div>
                      <Link to="/demo" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        Book Demo <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
