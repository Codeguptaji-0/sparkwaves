import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDatabase } from '../context/DatabaseContext';
import type { ClientDocument } from '../context/DatabaseContext';
import { 
  Users, Ticket, MessageSquare, Briefcase, LogOut, 
  Settings, Trash2, Plus, Mail, Activity, Cloud, PhoneCall, 
  CheckCircle, Eye, Layout, List, FileText 
} from 'lucide-react';

import { useSEO } from '../hooks/useSEO';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const user = localStorage.getItem('swp_admin_user') || 'Admin';

  useSEO({
    title: 'Command Center - Sparkwaves',
    description: 'Secure admin portal dashboard.',
    keywords: 'admin, command center, sparkwaves'
  });
  
  const { 
    products, setProducts, 
    services, setServices,
    testimonials, setTestimonials,
    tickets, setTickets,
    queries, setQueries,
    clients, setClients,
    demoRequests, setDemoRequests,
    settings, setSettings
  } = useDatabase();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'products' | 'services' | 'testimonials' | 'clients' | 'document' | null>(null);
  const [targetClientId, setTargetClientId] = useState<string | null>(null);
  
  // Generic Form State
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const isAuth = localStorage.getItem('swp_admin_auth');
    if (isAuth !== 'true') {
      navigate('/swp-command-center');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('swp_admin_auth');
    localStorage.removeItem('swp_admin_user');
    navigate('/swp-command-center');
  };

  const openTickets = tickets.filter(t => t.status === 'Open').length;
  const unreadQueries = queries.filter(q => !q.isReplied).length;

  const tabs = [
    { id: 'overview', name: 'Dashboard', icon: <Activity className="w-5 h-5" /> },
    { id: 'demoRequests', name: 'Demo Requests', icon: <PhoneCall className="w-5 h-5" />, badge: demoRequests.filter(d => d.status === 'Pending').length },
    { id: 'content', name: 'Content Manager', icon: <Layout className="w-5 h-5" /> },
    { id: 'clients', name: 'Client Manager', icon: <Users className="w-5 h-5" /> },
    { id: 'products', name: 'Product Suite', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'services', name: 'Service Catalog', icon: <Cloud className="w-5 h-5" /> },
    { id: 'testimonials', name: 'Review Manager', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'tickets', name: 'Support Grid', icon: <Ticket className="w-5 h-5" />, badge: openTickets },
    { id: 'queries', name: 'Contact Inquiries', icon: <Mail className="w-5 h-5" />, badge: unreadQueries },
  ];

  const deleteProduct = (id: string) => setProducts(products.filter(p => p.id !== id));
  const deleteTestimonial = (id: string) => setTestimonials(testimonials.filter(t => t.id !== id));
  const deleteClient = (id: string) => setClients(clients.filter(c => c.id !== id));

  const openModal = (type: typeof modalType) => {
    setModalType(type);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = Math.random().toString(36).substr(2, 9);
    
    if (modalType === 'products') {
      setProducts([{ id: newId, name: formData.name, description: formData.desc, model: formData.model || 'Standard', features: [], useCases: [] }, ...products]);
    } else if (modalType === 'services') {
      setServices([{ id: newId, title: formData.title, description: formData.desc, features: [] }, ...services]);
    } else if (modalType === 'testimonials') {
      setTestimonials([{ id: newId, clientName: formData.name, role: formData.role, message: formData.message, rating: 5 }, ...testimonials]);
    } else if (modalType === 'clients') {
      setClients([{ 
        id: newId, email: formData.email, portalPassword: formData.password, 
        company: formData.company, projectName: formData.projectName, 
        projectStatus: 'Planning', progressPercentage: 0, documents: []
      }, ...clients]);
    } else if (modalType === 'document' && targetClientId) {
      const client = clients.find(c => c.id === targetClientId);
      if (client) {
        const newDoc: ClientDocument = { id: newId, title: formData.title as string, link: formData.link as string, type: (formData.type as 'Bill' | 'Agreement' | 'Other') || 'Bill', date: new Date().toISOString() };
        const updatedClient = { ...client, documents: [...(client.documents || []), newDoc] };
        setClients(clients.map(c => c.id === targetClientId ? updatedClient : c));
      }
    }
    
    setIsModalOpen(false);
    setTargetClientId(null);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* Sidebar - Clean SaaS Design */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-20 shadow-2xl">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(20,184,166,0.4)]">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white uppercase">Command</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-4">
          <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Main Controls</p>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-sm font-semibold ${
                activeTab === tab.id 
                ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                {tab.icon}
                {tab.name}
              </div>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/20">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="mb-4 flex items-center gap-3 px-3 py-2 bg-slate-950/50 rounded-xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">{user}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 text-xs bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-400 rounded-xl transition-all border border-slate-700 hover:border-red-500/30 font-bold"
          >
            <LogOut className="w-4 h-4" />
            Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-950/50 p-8">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3 capitalize">
                {activeTab.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <p className="text-slate-500 text-sm mt-1">Global System Management Suite</p>
            </div>
            
            {['products', 'services', 'testimonials', 'clients'].includes(activeTab) && (
              <button 
                onClick={() => openModal(activeTab as any)} 
                className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]"
              >
                <Plus className="w-4 h-4"/> New {activeTab.slice(0, -1)}
              </button>
            )}
          </header>

          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px]">
            
            {/* Overview Tab Render */}
            {activeTab === 'overview' && (
              <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col hover:border-brand-500/30 transition-all group">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-brand-400 transition-colors"><Briefcase className="w-4 h-4" /> Total Products</span>
                    <span className="text-4xl font-extrabold text-white">{products.length}</span>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col hover:border-blue-500/30 transition-all group">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-blue-400 transition-colors"><Cloud className="w-4 h-4" /> Active Services</span>
                    <span className="text-4xl font-extrabold text-white">{services.length}</span>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col relative overflow-hidden hover:border-red-500/30 transition-all group">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-red-400 transition-colors"><Ticket className="w-4 h-4" /> Open Support</span>
                    <span className="text-4xl font-extrabold text-white">{openTickets}</span>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col relative overflow-hidden hover:border-brand-500/30 transition-all group">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-brand-400 transition-colors"><PhoneCall className="w-4 h-4" /> Demo Leads</span>
                    <span className="text-4xl font-extrabold text-white">{demoRequests.filter(d => d.status === 'Pending').length}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
                  <h3 className="font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">Recent Activity Log</h3>
                  <div className="space-y-4">
                    <p className="text-slate-500 text-sm italic">System diagnostic: No critical failures detected. All local nodes operational.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Content Manager Tab Render */}
            {activeTab === 'content' && (
              <div className="p-10 space-y-12">
                <section>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-4">
                    <Eye className="w-6 h-6 text-brand-400" /> Visibility Control
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                      <div>
                        <p className="font-bold text-white text-lg">Homepage Reviews</p>
                        <p className="text-xs text-slate-500 mt-1">Control the trust section display</p>
                      </div>
                      <button 
                        onClick={() => setSettings({...settings, showReviews: !settings.showReviews})}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${settings.showReviews ? 'bg-brand-500 shadow-[0_0_15px_rgba(20,184,166,0.4)]' : 'bg-slate-800'}`}
                      >
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${settings.showReviews ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-4">
                    <Layout className="w-6 h-6 text-blue-400" /> Advanced Page Settings
                  </h3>
                  <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 text-center">
                    <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
                      Page-specific SEO and text overrides are coming in the next production release. Currently, all values are parsed from the local configuration files.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* Demo Requests Render */}
            {activeTab === 'demoRequests' && (
              <div className="divide-y divide-slate-800">
                {demoRequests.length === 0 ? (
                  <div className="text-center py-20">
                     <PhoneCall className="w-16 h-16 text-slate-800 mx-auto mb-4 opacity-50" />
                    <p className="text-slate-500 font-medium">No system leads detected.</p>
                  </div>
                ) : demoRequests.slice().reverse().map(d => (
                  <div key={d.id} className="p-8 hover:bg-white/[0.02] transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                         <h4 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
                           {d.name}
                           {d.status === 'Contacted' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                         </h4>
                         <p className="text-slate-500 text-xs font-mono">{d.id} • {new Date(d.date).toLocaleString()}</p>
                       </div>
                      <span className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-extrabold rounded-full border ${d.status === 'Pending' ? 'bg-brand-500/10 text-brand-400 border-brand-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]' : 'bg-slate-800/50 text-slate-500 border-white/5'}`}>
                        {d.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 text-sm font-medium">📞 {d.phone}</span>
                      <span className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 text-sm font-medium">✉️ {d.email}</span>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm leading-relaxed mb-6 group-hover:border-slate-700 transition">
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Project Requirement</span>
                      {d.businessReq}
                    </div>
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setDemoRequests(demoRequests.filter(req => req.id !== d.id))} className="px-6 py-2.5 text-xs text-red-500 hover:bg-red-500/10 rounded-xl transition border border-transparent hover:border-red-500/20 font-bold">Destroy</button>
                      <button 
                        onClick={() => setDemoRequests(demoRequests.map(req => req.id === d.id ? {...req, status: req.status === 'Pending' ? 'Contacted' : 'Pending'} : req))} 
                        className={`px-6 py-2.5 text-xs font-bold rounded-xl transition border shadow-xl ${d.status === 'Pending' ? 'bg-emerald-500 text-white border-emerald-400 hover:bg-emerald-600' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
                      >
                        {d.status === 'Pending' ? 'Finalize Contact' : 'Reset to Pending'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Testimonials Tab Render */}
            {activeTab === 'testimonials' && (
              <div className="divide-y divide-slate-800">
                {testimonials.length === 0 ? <p className="p-10 text-slate-500">No review data.</p> : testimonials.map(t => (
                  <div key={t.id} className="p-8 flex justify-between hover:bg-white/[0.02] transition group">
                    <div>
                      <h4 className="text-xl font-bold text-white">{t.clientName} <span className="text-slate-500 font-normal text-sm ml-2">— {t.role}</span></h4>
                      <p className="text-lg text-slate-400 italic mt-3 max-w-4xl leading-relaxed">"{t.message}"</p>
                    </div>
                    <button onClick={() => deleteTestimonial(t.id)} className="p-4 text-red-400 hover:bg-red-500/10 rounded-2xl transition opacity-0 group-hover:opacity-100">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Clients Tab Render */}
            {activeTab === 'clients' && (
              <div className="divide-y divide-slate-800">
                {clients.length === 0 ? <p className="p-10 text-slate-500">No active clients.</p> : clients.map(c => (
                  <div key={c.id} className="p-8 hover:bg-white/[0.02] transition group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                          {c.company}
                          <span className={`px-3 py-1 text-[10px] uppercase font-bold rounded-full ${c.projectStatus === 'Deployed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-brand-500/20 text-brand-400'}`}>
                            {c.projectStatus}
                          </span>
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">{c.projectName}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="font-mono bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">{c.email}</span>
                        <div className="flex gap-2">
                          <button onClick={() => { setTargetClientId(c.id); openModal('document'); }} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition text-xs font-bold font-mono">
                            + Bill / Doc
                          </button>
                          <button onClick={() => deleteClient(c.id)} className="p-2 text-red-500 hover:bg-red-500/20 rounded-lg transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                       <div className="flex-1">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500 mb-2">
                            <span>Project Progress</span>
                            <span className="text-brand-400">{c.progressPercentage}%</span>
                          </div>
                          <div className="h-2 bg-slate-950 rounded-full border border-white/5 overflow-hidden">
                            <div className="h-full bg-brand-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-all duration-500" style={{ width: `${c.progressPercentage}%` }}></div>
                          </div>
                       </div>
                       <input 
                          type="number" min="0" max="100" 
                          defaultValue={c.progressPercentage || 0}
                          className="w-16 bg-slate-950 border border-slate-800 rounded-lg py-1 text-center font-bold text-brand-400 outline-none focus:border-brand-500 transition"
                          onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                              const val = parseInt(e.currentTarget.value);
                              if(val >= 0 && val <= 100) {
                                setClients(clients.map(client => client.id === c.id ? {...client, progressPercentage: val} : client));
                                e.currentTarget.blur();
                              }
                            }
                          }}
                       />
                    </div>

                    {c.documents && c.documents.length > 0 && (
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Attached Documents</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {c.documents.map(doc => (
                            <a key={doc.id} href={doc.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-lg hover:border-brand-500/50 transition truncate">
                              <span className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${doc.type === 'Bill' ? 'bg-amber-500/20 text-amber-500' : 'bg-blue-500/20 text-blue-500'}`}>
                                <FileText className="w-4 h-4" />
                              </span>
                              <div className="truncate">
                                <p className="text-xs font-bold text-slate-300 truncate">{doc.title}</p>
                                <p className="text-[10px] text-slate-500">{doc.type}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
               <div className="divide-y divide-slate-800">
                {products.map(p => (
                  <div key={p.id} className="p-8 flex items-center justify-between hover:bg-white/[0.02] transition group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-2xl font-bold text-white">{p.name}</h4>
                        <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">{p.model}</span>
                      </div>
                      <p className="text-slate-400 mt-2 max-w-2xl text-sm leading-relaxed">{p.description}</p>
                      <div className="mt-6 flex items-center gap-6">
                        <div className="flex-1 max-w-xs">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500 mb-2">
                             <span>Live Completion</span>
                             <span className="text-brand-400">{p.progressPercentage}%</span>
                          </div>
                          <div className="h-2 bg-slate-950 rounded-full border border-white/5 overflow-hidden">
                            <div className="h-full bg-brand-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-all duration-500" style={{ width: `${p.progressPercentage}%` }}></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-2 rounded-xl">
                           <input 
                            type="number" min="0" max="100" 
                            defaultValue={p.progressPercentage || 0}
                            className="w-16 bg-transparent text-center font-bold text-brand-400 outline-none focus:text-white transition"
                            onKeyDown={(e) => {
                              if(e.key === 'Enter') {
                                const val = parseInt(e.currentTarget.value);
                                if(val >= 0 && val <= 100) {
                                  setProducts(products.map(prod => prod.id === p.id ? {...prod, progressPercentage: val} : prod));
                                  e.currentTarget.blur();
                                }
                              }
                            }}
                           />
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Enter to Sync</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => deleteProduct(p.id)} className="p-4 text-red-400 hover:bg-red-500/10 rounded-2xl transition opacity-0 group-hover:opacity-100 ml-8">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
               </div>
            )}

            {/* Support Grid Render */}
            {activeTab === 'tickets' && (
              <div className="divide-y divide-slate-800">
                {tickets.length === 0 ? (
                  <div className="text-center py-24">
                     <List className="w-16 h-16 text-slate-800 mx-auto mb-4 opacity-50" />
                    <p className="text-slate-500">No active support threads.</p>
                  </div>
                ) : tickets.slice().reverse().map(t => (
                  <div key={t.id} className="p-8 hover:bg-white/[0.02] transition group">
                    <div className="flex justify-between items-start mb-4">
                       <h4 className="text-2xl font-bold text-white">{t.subject}</h4>
                      <span className={`px-4 py-1.5 text-[10px] font-bold rounded-full border ${t.status === 'Open' ? 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'bg-slate-800 text-slate-500 border-white/5'}`}>
                        {t.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 flex items-center gap-3">
                      <span className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">ID: {t.id}</span>
                      <span className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">{t.email}</span>
                      <span className="text-slate-600 font-mono text-xs">{new Date(t.date).toLocaleDateString()}</span>
                    </p>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm leading-relaxed mb-6 group-hover:border-slate-700 transition">
                      {t.message}
                    </div>
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setTickets(tickets.filter(tk => tk.id !== t.id))} className="px-6 py-2 text-xs text-red-500 hover:bg-red-500/10 rounded-xl transition border border-transparent hover:border-red-500/20 font-bold">Purge</button>
                      <button onClick={() => setTickets(tickets.map(tk => tk.id === t.id ? {...tk, status: tk.status === 'Open' ? 'Closed' : 'Open'} : tk))} className="px-6 py-2 text-xs bg-brand-500/10 hover:bg-brand-500/30 text-brand-400 rounded-xl transition border border-brand-500/30 font-bold">
                        {t.status === 'Open' ? 'Archive Ticket' : 'Reopen Thread'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Queries Tab */}
            {activeTab === 'queries' && (
              <div className="divide-y divide-slate-800">
                {queries.length === 0 ? (
                  <div className="text-center py-24">
                     <Mail className="w-16 h-16 text-slate-800 mx-auto opacity-50 mb-4" />
                     <p className="text-slate-500">Inbox clear.</p>
                  </div>
                ) : queries.slice().reverse().map(q => (
                  <div key={q.id} className="p-8 hover:bg-white/[0.02] transition group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold text-white">{q.name}</h4>
                      <span className="text-slate-600 text-xs font-mono">{new Date(q.date).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                       <span className="text-brand-400 text-sm font-medium bg-brand-500/10 px-3 py-1 rounded-lg border border-brand-500/20">✉️ {q.email}</span>
                       {q.isReplied && <span className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Handled</span>}
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm leading-relaxed mb-6 group-hover:border-slate-700 transition">
                      {q.message}
                    </div>
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setQueries(queries.filter(qr => qr.id !== q.id))} className="px-6 py-2 text-xs text-red-500 hover:bg-red-500/10 rounded-xl transition font-bold">Discard</button>
                      <button onClick={() => setQueries(queries.map(qr => qr.id === q.id ? {...qr, isReplied: !qr.isReplied} : qr))} className="px-6 py-2 text-xs bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl transition border border-blue-500/30 font-bold">
                        {q.isReplied ? 'Move to Inbox' : 'Mark as Processed'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Reusable Data Entry Modal - SaaS Styled */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] w-full max-w-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative p-12">
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-brand-500/20 rounded-2xl text-brand-400 border border-brand-500/30">
                 <Plus className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-3xl font-extrabold text-white tracking-tight">Create Entity</h3>
                 <p className="text-slate-500 text-sm">Drafting a new {modalType?.slice(0, -1)} entry</p>
               </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {(modalType === 'products' || modalType === 'services') && (
                 <>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{modalType === 'products' ? 'Product' : 'Service'} Heading</label>
                     <input required autoFocus type="text" value={formData.name || formData.title || ''} onChange={e => setFormData({...formData, name: e.target.value, title: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 transition shadow-inner" placeholder="Enter name..." />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Summary Description</label>
                     <textarea required value={formData.desc || ''} onChange={e => setFormData({...formData, desc: e.target.value})} rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 resize-none shadow-inner" placeholder="..." />
                   </div>
                 </>
              )}

              {modalType === 'testimonials' && (
                <>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Endorser Name</label><input required autoFocus type="text" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 transition shadow-inner" /></div>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Position / Organization</label><input required type="text" value={formData.role || ''} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 transition shadow-inner" /></div>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Public Testimony</label><textarea required value={formData.message || ''} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 resize-none shadow-inner" /></div>
                </>
              )}

              {modalType === 'clients' && (
                <>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Enterprise Partner</label><input required autoFocus type="text" value={formData.company || ''} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner" /></div>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Contracted Initiative</label><input required type="text" value={formData.projectName || ''} onChange={e => setFormData({...formData, projectName: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner" /></div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Access Email</label><input required type="email" value={formData.email || ''} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner" /></div>
                     <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Secure Key</label><input required type="text" value={formData.password || ''} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner" /></div>
                   </div>
                </>
              )}

              {modalType === 'document' && (
                <>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Document Title</label><input required autoFocus type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Q3 Invoice" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner" /></div>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Document Category</label>
                     <select value={formData.type || 'Bill'} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner">
                       <option value="Bill">Bill / Invoice</option>
                       <option value="Agreement">Legal Agreement</option>
                       <option value="Other">Other Document</option>
                     </select>
                   </div>
                   <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">File Asset Link</label><input required type="url" value={formData.link || ''} onChange={e => setFormData({...formData, link: e.target.value})} placeholder="https://" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-500 shadow-inner" /></div>
                </>
              )}

              <div className="flex flex-col gap-3 pt-6">
                <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 py-5 rounded-[1.5rem] text-white font-extrabold transition-all shadow-[0_10px_30px_rgba(20,184,166,0.3)] hover:-translate-y-1">Confirm Entity Creation</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="w-full py-4 text-slate-500 hover:text-white font-bold transition">Discard Change</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
